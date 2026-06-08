import React, { useEffect, useState } from 'react';

const PreLoader = () => {
    const [loader, handleLoader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            const root = document.documentElement;
            root.style.setProperty('--scrollBarWidth', '8px');
            handleLoader(false);
        }, 3500);
    }, []);

    const name = "Krish Rathi";
    
    // Custom starting coordinates (X offset, Y offset, Rotation) for each letter
    // to make them fly in from different directions (top-left, bottom-right, etc.)
    const entries = [
        { tx: "-160px", ty: "-120px", rot: "-60deg" }, // K
        { tx: "140px",  ty: "160px",  rot: "45deg" },  // r
        { tx: "-100px", ty: "140px",  rot: "-35deg" }, // i
        { tx: "150px",  ty: "-100px", rot: "60deg" },  // s
        { tx: "-120px", ty: "-150px", rot: "-40deg" }, // h
        { tx: "0px",    ty: "0px",    rot: "0deg" },   // (space)
        { tx: "-180px", ty: "90px",   rot: "95deg" },  // R
        { tx: "130px",  ty: "-80px",  rot: "-50deg" }, // a
        { tx: "-70px",  ty: "-180px", rot: "40deg" },  // t
        { tx: "160px",  ty: "140px",  rot: "-65deg" }, // h
        { tx: "-110px", ty: "90px",   rot: "55deg" },  // i
    ];

    return (
        <div className={`mk-pre-loader ${loader ? 'mk-pre-loader-enabled' : 'mk-pre-loader-disabled'}`}>
            <div className='mk-pre-loader-boarder' />
            <div className='mk-pre-loader-content-wrapper'>
                <div className="mk-preloader-name-container">
                    <h1 className="mk-preloader-name">
                        {name.split("").map((char, index) => {
                            const style = {
                                animationDelay: `${index * 0.08}s`,
                                '--tx': entries[index]?.tx || '0px',
                                '--ty': entries[index]?.ty || '0px',
                                '--rot': entries[index]?.rot || '0deg'
                            };
                            return (
                                <span 
                                    key={index} 
                                    className="mk-preloader-char" 
                                    style={style}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </span>
                            );
                        })}
                    </h1>
                    <svg className="mk-preloader-underline" viewBox="0 0 400 20" preserveAspectRatio="none">
                        <path 
                            d="M 10,10 Q 200,18 390,10" 
                            stroke="currentColor" 
                            strokeWidth="3.5" 
                            strokeLinecap="round" 
                            fill="transparent" 
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

PreLoader.propTypes = {};

export default PreLoader;
