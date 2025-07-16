import { AnimatePresence, motion } from "framer-motion";
import React from "react";

interface RollingNumberProps {
  value: string; // e.g., '07'
  className?: string;
}

const digitStyle: React.CSSProperties = {
  display: 'inline-block',
  width: '1ch',
  height: '1em',
  overflow: 'hidden',
  position: 'relative',
};

const RollingNumber: React.FC<RollingNumberProps> = ({ value, className }) => {
  return (
    <span className={className} style={{ display: 'inline-flex' }}>
      {value.split('').map((digit, idx) => (
        <span key={idx} style={digitStyle}>
          <AnimatePresence initial={false}>
            <motion.span
              key={digit}
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              style={{ position: 'absolute', left: 0, right: 0 }}
            >
              {digit}
            </motion.span>
          </AnimatePresence>
        </span>
      ))}
    </span>
  );
};

export default RollingNumber; 