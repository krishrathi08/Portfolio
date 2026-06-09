import React, { useEffect, useRef, useState } from 'react'
import ViewsTitle from '../../components/ViewsTitle';
import { Parallax } from 'react-scroll-parallax'

const getAnimationData = ({ index }) => {
    const mod = index % 2;
    const translateX = {
        0: ['-25%', '25%'],
        1: ['25%', '-25%']
    };
    const rotate = {
        0: [0, 1.5],
        1: [0, -1.5]
    };
    const alignSelf = {
        0: 'self-end',
        1: 'self-start'
    };
    const theme = {
        0: 'theme1',
        1: 'theme2'
    };
    return {
        translateX: translateX[mod],
        alignSelf: alignSelf[mod],
        rotate: rotate[mod],
        theme: theme[mod],
    }
}

const TechStrip = ({ category, items, index }) => {
    const parallaxRef = useRef()
    const [startScroll, setStartScroll] = useState(0)
    const [endScroll, setEndScroll] = useState(0)
    
    useEffect(() => {
        window.addEventListener("resize", setPositions);
        setTimeout(() => {
            setPositions()
        }, 1000);
        return () => window.removeEventListener("resize", setPositions);
    }, [])
    
    const setPositions = () => {
        const innerHeight = window.innerHeight;
        const currentRef = parallaxRef?.current;
        if (!currentRef) return;
        const startPosition = currentRef.getBoundingClientRect().top + window.scrollY + 100;
        setStartScroll(startPosition - innerHeight)
        setEndScroll(startPosition + innerHeight)
    }

    const { translateX, alignSelf, rotate, theme } = getAnimationData({ index })
    
    return (
        <Parallax
            translateX={translateX}
            rotate={rotate}
            easing="easeOutQuad"
            {...(startScroll && ({ startScroll }))}
            {...(endScroll && ({ endScroll }))}
            style={{
                width: 'fit-content',
                alignSelf,
                transition: 'all 600ms cubic-bezier(0.25, 1, 0.5, 1)'
            }}
        >
            <div
                ref={parallaxRef}
                className={`mk-tech-strip-info mk-tech-color-${theme}-invert`}>
                {category}
            </div>
            <div className={`mk-tech-strip-items mk-tech-color-${theme}`}>
                {items.map((item, i) => (
                    <div key={i} className="mk-tech-item-card">
                        {item.logo && (item.logo.startsWith('http') || item.logo.startsWith('/') || item.logo.startsWith('data:')) ? (
                            <img src={item.logo} alt={item.name} className="mk-tech-logo" />
                        ) : (
                            <span className="mk-tech-logo-emoji" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', lineHeight: 1 }}>{item.logo}</span>
                        )}
                        <span className="mk-tech-name">{item.name}</span>
                    </div>
                ))}
            </div>
        </Parallax>
    )
}

const TechStacks = ({ data: { heading, categories } }) => {
    return (
        <div className='mk-tech-stacks'>
            <div className='container'>
                <div className='mk-tech-stacks-container'>
                    <ViewsTitle text={heading} />
                </div>
            </div>
            <div className='mk-tech-stacks-list'>
                {(categories || []).map((item, i) => (
                    <TechStrip
                        key={i}
                        index={i}
                        category={item.category}
                        items={item.items}
                    />
                ))}
            </div>
        </div>
    )
}

export default TechStacks;
