import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    // Only enable on fine pointer desktop devices
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    setIsFinePointer(hasFinePointer);

    if (!hasFinePointer) return;

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target.closest('[data-cursor]');
      if (target) {
        const type = target.getAttribute('data-cursor');
        setCursorVariant(type);
        if (type === 'project') setCursorText('VIEW PROJECT');
        else if (type === 'cert') setCursorText('VIEW CERT');
        else if (type === 'link') setCursorText('EXPLORE');
        else setCursorText('');
      } else {
        const interactive = e.target.closest('button, a, input, textarea, select');
        if (interactive) {
          setCursorVariant('hover');
          setCursorText('');
        } else {
          setCursorVariant('default');
          setCursorText('');
        }
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  if (!isFinePointer) return null;

  const variants = {
    default: {
      width: 28,
      height: 28,
      backgroundColor: 'rgba(56, 189, 248, 0.03)',
      borderColor: 'rgba(56, 189, 248, 0.35)',
      borderWidth: 1,
    },
    hover: {
      width: 46,
      height: 46,
      backgroundColor: 'rgba(56, 189, 248, 0.08)',
      borderColor: 'rgba(56, 189, 248, 0.75)',
      borderWidth: 1.25,
    },
    project: {
      width: 90,
      height: 90,
      backgroundColor: 'rgba(56, 189, 248, 0.16)',
      borderColor: '#38bdf8',
      borderWidth: 1.5,
    },
    cert: {
      width: 86,
      height: 86,
      backgroundColor: 'rgba(129, 140, 248, 0.18)',
      borderColor: '#818cf8',
      borderWidth: 1.5,
    },
    link: {
      width: 74,
      height: 74,
      backgroundColor: 'rgba(52, 211, 153, 0.16)',
      borderColor: '#34d399',
      borderWidth: 1.5,
    }
  };

  return (
    <>
      {/* Outer reactive ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center text-center backdrop-blur-[1px] hidden md:flex"
        animate={{
          x: position.x - (variants[cursorVariant]?.width || 28) / 2,
          y: position.y - (variants[cursorVariant]?.height || 28) / 2,
          ...variants[cursorVariant],
        }}
        transition={{ type: 'spring', damping: 28, stiffness: 280, mass: 0.4 }}
      >
        {cursorText && (
          <span className="text-[9px] font-mono tracking-wider text-white font-bold px-1 select-none">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Tiny inner center dot */}
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-cyber-cyan rounded-full pointer-events-none z-[10000] hidden md:block"
        style={{
          transform: `translate3d(${position.x - 3}px, ${position.y - 3}px, 0)`,
          boxShadow: '0 0 10px #38bdf8',
        }}
      />
    </>
  );
}
