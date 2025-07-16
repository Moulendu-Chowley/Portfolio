"use client";

import { DM_Serif_Text } from 'next/font/google';
import { useEffect, useState } from 'react';

const dmSerifText = DM_Serif_Text({ subsets: ['latin'], weight: '400', style: ['italic'] });

interface TypewriterTextProps {
  texts: string[];
  period?: number; // ms to show each word before deleting
  className?: string;
}

const TypewriterText = ({ texts, period = 2000, className = "" }: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: NodeJS.Timeout;

    const animate = () => {
      const currentText = texts[textIndex];

      if (!isDeleting) {
        // Typing phase
        if (charIndex < currentText.length) {
          setDisplayText(currentText.slice(0, charIndex + 1));
          charIndex++;
          timeoutId = setTimeout(animate, 150);
        } else {
          // Finished typing, wait then start deleting
          timeoutId = setTimeout(() => {
            isDeleting = true;
            charIndex = currentText.length - 1;
            animate();
          }, period);
        }
      } else {
        // Deleting phase
        if (charIndex >= 0) {
          setDisplayText(currentText.slice(0, charIndex));
          charIndex--;
          timeoutId = setTimeout(animate, 100);
        } else {
          // Finished deleting, move to next text
          textIndex = (textIndex + 1) % texts.length;
          charIndex = 0;
          isDeleting = false;
          setDisplayText('');
          timeoutId = setTimeout(animate, 500);
        }
      }
    };

    // Start animation after initial delay
    const startTimer = setTimeout(() => {
      animate();
    }, 1200);

    // Cursor blink
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(timeoutId);
      clearInterval(cursorTimer);
    };
  }, [texts, period]);

  return (
    <span className={`${dmSerifText.className} italic text-[#916be7] relative ${className}`}>
      {displayText}
      {showCursor && <span className="animate-pulse">|</span>}
    </span>
  );
};

export default TypewriterText;