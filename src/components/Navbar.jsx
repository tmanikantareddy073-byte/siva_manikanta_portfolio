import { useState, useEffect } from 'react';
import { Menu, X, FileText, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT', href: '#about' },
  { name: 'JOURNEY', href: '#journey' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'PROJECT LAB', href: '#projects' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'CERTIFICATIONS', href: '#certifications' },
  { name: 'EDUCATION', href: '#education' },
  { name: 'CONTACT', href: '#contact' },
];

export default function Navbar({ activeSection, theme, toggleTheme, onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 py-3.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo / Identity */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="flex items-center gap-3 group"
        >
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-b from-white/10 to-white/[0.02] border border-white/15 dark:border-white/10 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-cyber-cyan/60 group-hover:shadow-glow-cyan">
            <span className="font-display font-extrabold text-xs tracking-wider text-slate-100">SM</span>
            <div className="absolute inset-0 bg-cyber-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-display font-bold text-xs tracking-wider text-slate-900 dark:text-slate-100">
              SIVA MANIKANTA
            </span>
            <span className="text-[10px] font-mono tracking-widest text-cyber-cyan font-medium">
              DEV • AI/ML
            </span>
          </div>
        </a>

        {/* Desktop Floating Navigation Capsule */}
        <nav className="hidden xl:flex items-center gap-1 px-3 py-1.5 rounded-full glass-panel border border-white/10 dark:border-white/[0.08] shadow-card">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative px-3 py-1 rounded-full text-[11px] font-mono font-medium tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'text-cyber-cyan font-semibold'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 rounded-full bg-cyber-cyan/[0.12] border border-cyber-cyan/40 shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl btn-secondary text-[11px] font-mono tracking-wider text-slate-700 dark:text-slate-200 hover:text-cyber-cyan"
          >
            <FileText className="w-3.5 h-3.5 text-cyber-cyan" />
            <span>RESUME</span>
          </button>

          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="xl:hidden p-2 rounded-xl glass-panel text-slate-700 dark:text-slate-300 hover:text-cyber-cyan transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="xl:hidden mt-3 rounded-2xl glass-panel border border-white/10 dark:border-white/10 p-5 shadow-2xl backdrop-blur-2xl"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-mono tracking-wider transition-colors ${
                      isActive
                        ? 'bg-cyber-cyan/15 text-cyber-cyan border border-cyber-cyan/35'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-white/5'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-40" />
                  </a>
                );
              })}

              <div className="pt-3 mt-2 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full py-2.5 px-4 rounded-xl btn-primary text-xs font-mono tracking-wider flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>VIEW / DOWNLOAD RESUME</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
