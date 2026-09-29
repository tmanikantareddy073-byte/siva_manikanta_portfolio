import { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const progress = (totalScroll / windowHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2.5px] z-[100] bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-gold-500 via-amber-300 to-gold-400 transition-all duration-75 shadow-[0_0_8px_rgba(212,175,55,0.6)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
