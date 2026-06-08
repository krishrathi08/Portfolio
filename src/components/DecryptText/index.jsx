import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const GLYPHS = "!@#$%^&*()_+~`{}|[]\\:;\"'<>,.?/0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const getRandomGlyph = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)];

const DecryptText = ({ values = [] }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    if (!values || values.length === 0) return;

    let active = true;
    
    const runAnimation = async () => {
      let textIdx = 0;

      while (active) {
        const currentTarget = values[textIdx];
        const len = currentTarget.length;

        // --- Phase 1: Appear / Decrypt from Left to Right ---
        for (let resolvedCount = 0; resolvedCount <= len; resolvedCount++) {
          if (!active) return;
          
          let tempText = '';
          for (let i = 0; i < len; i++) {
            if (i < resolvedCount) {
              tempText += currentTarget[i];
            } else {
              tempText += currentTarget[i] === ' ' ? ' ' : getRandomGlyph();
            }
          }
          setDisplayText(tempText);
          
          // Wait briefly before resolving the next character
          await new Promise((resolve) => setTimeout(resolve, 40));
        }

        // --- Phase 2: Fully Resolved Display Pause ---
        await new Promise((resolve) => setTimeout(resolve, 2500));

        // --- Phase 3: Disappear / Scramble-Erase from Left to Right ---
        for (let erasedCount = 0; erasedCount <= len; erasedCount++) {
          if (!active) return;

          let tempText = '';
          for (let i = 0; i < len; i++) {
            if (i < erasedCount) {
              tempText += '\u00A0'; // Non-breaking space to preserve letter spacing
            } else if (i === erasedCount && i < len) {
              tempText += currentTarget[i] === ' ' ? ' ' : getRandomGlyph();
            } else {
              tempText += currentTarget[i];
            }
          }
          setDisplayText(tempText);
          
          // Wait briefly before erasing the next character
          await new Promise((resolve) => setTimeout(resolve, 30));
        }

        // --- Phase 4: Brief Pause on Empty State ---
        setDisplayText('');
        await new Promise((resolve) => setTimeout(resolve, 400));
        
        // Advance index
        textIdx = (textIdx + 1) % values.length;
      }
    };

    runAnimation();

    return () => {
      active = false;
    };
  }, [values]);

  return <>{displayText || '\u00A0'}</>;
};

DecryptText.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DecryptText;