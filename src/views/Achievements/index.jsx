import React, { useState } from 'react';
import ViewsTitle from '../../components/ViewsTitle';

const TrophyIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
        <path d="M12 2a6 6 0 0 1 6 6v4a6 6 0 0 1-12 0V8a6 6 0 0 1 6-6z" />
    </svg>
);

const CodeIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="20" y1="4" x2="4" y2="20" />
    </svg>
);

const MedalIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
        <circle cx="12" cy="8" r="6" />
        <circle cx="12" cy="8" r="2" />
    </svg>
);

const AcademicIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
    </svg>
);

const GitIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="6" y1="9" x2="6" y2="21" />
        <line x1="18" y1="3" x2="18" y2="15" />
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="18" cy="18" r="3" />
        <path d="M18 15V9a4 4 0 0 0-4-4H9" />
    </svg>
);

const DesignIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22C17.52 22 22 17.52 22 12S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10z" />
        <circle cx="7.5" cy="10.5" r="1.5" fill="currentColor" />
        <circle cx="11.5" cy="7.5" r="1.5" fill="currentColor" />
        <circle cx="16.5" cy="9.5" r="1.5" fill="currentColor" />
        <circle cx="15.5" cy="14.5" r="1.5" fill="currentColor" />
    </svg>
);

const getIcon = (name) => {
    switch (name) {
        case 'trophy': return <TrophyIcon />;
        case 'code': return <CodeIcon />;
        case 'medal': return <MedalIcon />;
        case 'academic': return <AcademicIcon />;
        case 'git': return <GitIcon />;
        case 'design': return <DesignIcon />;
        default: return <TrophyIcon />;
    }
};

const Achievements = ({ data: { heading, items = [] } }) => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'Hackathons', 'Coding', 'Academic', 'Design'];

    const filteredItems = selectedCategory === 'All' 
        ? items 
        : items.filter(item => item.category === selectedCategory);

    return (
        <div className="mk-achievements">
            <div className="container">
                <div className="mk-achievements-container">
                    <ViewsTitle text={heading} />

                    {/* Filter Pills */}
                    <div className="mk-achievements-filters" data-aos="fade-up">
                        {categories.map((cat, i) => (
                            <button
                                key={i}
                                className={`mk-achievements-filter-pill ${selectedCategory === cat ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Achievements Grid */}
                    <div className="row g-4 justify-content-center mt-2">
                        {filteredItems.map((item, i) => (
                            <div 
                                key={item.id} 
                                className="col-12 col-md-6 d-flex align-items-stretch"
                                data-aos="fade-up"
                                data-aos-delay={i * 80}
                            >
                                <div className="mk-achievement-card-wrapper">
                                    <div className="mk-achievement-card-inner">
                                        
                                        {/* FRONT FACE (Displays headings/meta only) */}
                                        <div className="mk-achievement-card-front">
                                            <div className="mk-achievement-card-glow" />
                                            <div className="mk-achievement-header">
                                                <div className="mk-achievement-icon-wrapper">
                                                    {getIcon(item.iconName)}
                                                </div>
                                                <div className="mk-achievement-meta">
                                                    <span className="mk-achievement-date">{item.date}</span>
                                                    <span className="mk-achievement-tag">{item.category}</span>
                                                </div>
                                            </div>
                                            <div className="mk-achievement-body">
                                                <h3 className="mk-achievement-title">{item.title}</h3>
                                                <h4 className="mk-achievement-subtitle">{item.subtitle}</h4>
                                            </div>
                                            <div className="mk-achievement-hint">
                                                <span>Hover to view details</span>
                                                <svg className="mk-hint-arrow" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* BACK FACE (Displays description and link) */}
                                        <div className="mk-achievement-card-back">
                                            <div className="mk-achievement-card-glow-back" />
                                            <div className="mk-achievement-body-back">
                                                <div className="mk-achievement-back-header">
                                                    <span className="mk-achievement-back-title">{item.title}</span>
                                                </div>
                                                <p className="mk-achievement-description">{item.description}</p>
                                                {item.skills && item.skills.length > 0 && (
                                                    <div className="mk-achievement-skills">
                                                        {item.skills.map((skill, sIdx) => (
                                                            <span key={sIdx} className="mk-achievement-skill-tag">{skill}</span>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                            {item.link && item.link !== '#' && (
                                                <div className="mk-achievement-footer">
                                                    <a 
                                                        href={item.link} 
                                                        target="_blank" 
                                                        rel="noreferrer" 
                                                        className="mk-achievement-link"
                                                    >
                                                        <span>View Credential</span>
                                                        <svg className="mk-link-arrow" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <line x1="7" y1="17" x2="17" y2="7" />
                                                            <polyline points="7 7 17 7 17 17" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            )}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

Achievements.propTypes = {};

export default Achievements;
