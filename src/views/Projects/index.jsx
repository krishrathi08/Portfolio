import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

const colors = ['#FFE566', '#FF8AB0', '#6EF0B8', '#C3B1FF', '#4DDBFF'];
const accents = ['#D4B200', '#D63868', '#00B878', '#8B68D4', '#00A8B8'];

const Projects = ({ data: { heading, list } }) => {
    const projWrapRef = useRef(null);
    const lastTopRef = useRef(-1);

    useEffect(() => {
        const CARD_SCROLL = 560;
        const CARD_ANIM = 110;
        const MOBILE_BP = 780;
        const N = list.length;
        const LBLS = list.map((_, i) => `0${i + 1} / 0${N}`);

        const updateCards = () => {
            const projWrap = projWrapRef.current;
            if (!projWrap) return;

            const cards = projWrap.querySelectorAll('.pcard');
            const hudNum = projWrap.querySelector('#phud-num');
            const hudDots = projWrap.querySelectorAll('.phud-dot');

            if (!cards.length) return;

            if (window.innerWidth <= MOBILE_BP) {
                if (lastTopRef.current !== -2) {
                    lastTopRef.current = -2;
                    cards.forEach(c => {
                        c.style.transform = '';
                        c.style.opacity = '';
                        c.style.zIndex = '';
                    });
                    if (hudNum) {
                        hudNum.textContent = LBLS[0];
                        hudNum.style.color = accents[0];
                    }
                    hudDots.forEach((d, i) => d.classList.toggle('on', i === 0));
                }
                return;
            }

            const sectionTop = projWrap.getBoundingClientRect().top + window.scrollY;
            const scrolled = Math.max(0, window.scrollY - sectionTop + window.innerHeight * 0.02);

            cards.forEach((card, i) => {
                const start = i * CARD_SCROLL;
                const end = start + CARD_ANIM;

                if (scrolled < start) {
                    card.style.transform = 'translate3d(-50%, 108vh, 0) rotate(6deg) scale(0.88)';
                    card.style.opacity = '0';
                    card.style.zIndex = String(i + 1);
                } else {
                    let cardsAbove = 0;
                    for (let j = i + 1; j < N; j++) {
                        if (scrolled >= j * CARD_SCROLL) {
                            const p = Math.min(1, (scrolled - j * CARD_SCROLL) / CARD_ANIM);
                            cardsAbove += 1 - Math.pow(1 - p, 3);
                        }
                    }

                    if (scrolled < end) {
                        const e = 1 - Math.pow(1 - (scrolled - start) / CARD_ANIM, 3);
                        const rot = (1 - e) * 6;
                        const tx = (1 - e) * 18;
                        card.style.transform = `translate3d(calc(-50% + ${tx}px), ${(1 - e) * 108}vh, 0) rotate(${rot}deg) scale(${0.88 + e * 0.12})`;
                        card.style.opacity = String(0.3 + e * 0.7);
                    } else {
                        const nudgeY = -cardsAbove * 54;
                        const nudgeRot = cardsAbove * 0.6;
                        const sc = Math.max(0.91, 1 - cardsAbove * 0.016);
                        card.style.transform = `translate3d(-50%, ${nudgeY}px, 0) rotate(${nudgeRot}deg) scale(${sc})`;
                        card.style.opacity = '1';
                    }
                    card.style.zIndex = String(i + 1);
                }
            });

            let top = 0;
            for (let i = 0; i < N; i++) {
                if (scrolled >= i * CARD_SCROLL) top = i;
            }

            if (top !== lastTopRef.current) {
                lastTopRef.current = top;
                if (hudNum) {
                    hudNum.style.opacity = '0';
                    hudNum.style.transform = 'translateY(-6px)';
                    setTimeout(() => {
                        hudNum.textContent = LBLS[top];
                        hudNum.style.color = accents[top % accents.length];
                        hudNum.style.opacity = '1';
                        hudNum.style.transform = 'none';
                    }, 150);
                }
                hudDots.forEach((d, i) => d.classList.toggle('on', i === top));
            }
        };

        window.addEventListener('scroll', updateCards, { passive: true });
        window.addEventListener('resize', () => {
            lastTopRef.current = -1;
            updateCards();
        });

        // Initial call
        updateCards();

        return () => {
            window.removeEventListener('scroll', updateCards);
        };
    }, [list]);

    return (
        <div 
            ref={projWrapRef} 
            id="proj-wrap" 
            className="mk-projects-stacked"
            style={{ height: `calc(100vh + ${list.length * 560}px)` }}
        >
            <div id="proj-sticky">
                <div className="proj-hud">
                    <div className="phud-l">
                        <span className="phud-chap">Projects</span>
                        <span className="phud-title">{heading}</span>
                    </div>
                    <div className="phud-r">
                        <div className="phud-dots" id="phud-dots">
                            {list.map((_, i) => (
                                <div 
                                    key={i} 
                                    className={`phud-dot ${i === 0 ? 'on' : ''}`} 
                                    style={{ backgroundColor: accents[i % accents.length] }} 
                                />
                            ))}
                        </div>
                        <div className="phud-num" id="phud-num" style={{ color: accents[0] }}>
                            01 / 0{list.length}
                        </div>
                    </div>
                </div>

                <div className="cards-area">
                    {list.map((project, i) => (
                        <div 
                            key={i} 
                            className="pcard" 
                            id={`pc${i}`} 
                            style={{ backgroundColor: colors[i % colors.length] }}
                        >
                            <div className="cwm">0{i + 1}</div>
                            <div className="pcl">
                                <div>
                                    <div className="pc-num">Project 0{i + 1}</div>
                                    <h3 className="pc-title">{project.title}</h3>
                                    <div className="pc-type">{project.label}</div>
                                    <p className="pc-one">{project.description}</p>
                                </div>
                                <div className="pc-img-wrap">
                                    <img src={project.image} alt={project.title} className="pc-img" loading="lazy" />
                                </div>
                            </div>
                            <div className="pcr" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <div style={{ overflowY: 'auto', flex: 1, paddingRight: '5px', marginBottom: '15px' }}>
                                    <div className="pcr-lbl">What it does</div>
                                    <p className="pcr-desc" style={{ marginBottom: '15px' }}>{project.whatItDoes || project.description}</p>
                                    
                                    {project.features && project.features.length > 0 && (
                                        <>
                                            <div className="pcr-lbl" style={{ marginTop: '15px' }}>Key Features</div>
                                            <ul className="pc-features-list" style={{ paddingLeft: '20px', margin: '0 0 10px 0', fontSize: '0.9rem', lineHeight: '1.5' }}>
                                                {project.features.map((feat, fIdx) => (
                                                    <li key={fIdx} style={{ marginBottom: '4px' }}>{feat}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                </div>
                                <div style={{ marginTop: 'auto' }}>
                                    <div className="pcr-lbl">Key Tech Stack</div>
                                    <div className="feat-list">
                                        {project.techs.map((tech, idx) => (
                                            <div key={idx} className="feat-item">{tech}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

Projects.propTypes = {}

export default Projects