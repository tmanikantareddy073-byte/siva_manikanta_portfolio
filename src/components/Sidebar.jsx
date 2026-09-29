import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  User,
  Compass,
  Cpu,
  Layers,
  Briefcase,
  GraduationCap,
  Award,
  ShieldCheck,
  Mail,
  Menu,
  X,
  FileText,
  ChevronRight
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from './Icons';
import { profile } from '../data/portfolio';

const navItems = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Journey', href: '#journey', icon: Compass },
  { name: 'Skills', href: '#skills', icon: Cpu },
  { name: 'Projects', href: '#projects', icon: Layers },
  { name: 'Hackathon', href: '#hackathon', icon: Award },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Certifications', href: '#certifications', icon: ShieldCheck },
  { name: 'Education', href: '#education', icon: GraduationCap },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export default function Sidebar({ activeSection, onOpenResume }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 20;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* DESKTOP FIXED LEFT SIDEBAR */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-24 xl:w-28 bg-[#08080a]/98 backdrop-blur-xl border-r border-white/[0.08] z-50 flex-col justify-between items-center py-6 px-2 select-none">
        
        {/* TOP: Luxury Gold Monogram */}
        <a
          href="#home"
          onClick={(e) => handleScrollTo(e, '#home')}
          className="group flex flex-col items-center gap-1 focus:outline-none"
          title="Siva Manikanta Reddy"
        >
          <div className="relative w-12 h-12 flex items-center justify-center">
            <span className="font-serif italic font-bold text-3xl tracking-wider text-gradient-gold group-hover:scale-110 transition-transform duration-300">
              SM
            </span>
          </div>
          <div className="w-4 h-[1px] bg-gold-500/40 group-hover:w-8 transition-all duration-300" />
        </a>

        {/* MIDDLE: Vertical Navigation Icons + Labels */}
        <nav className="flex flex-col items-center gap-1.5 w-full py-4">
          {navItems.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            const Icon = item.icon;

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className={`relative group w-full py-2 px-1 flex flex-col items-center justify-center rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'text-gold-400 font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="sidebarActiveIndicator"
                    className="absolute inset-0 rounded-xl bg-gold-500/[0.12] border border-gold-500/30 shadow-[0_0_12px_rgba(212,175,55,0.15)]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}

                <Icon className={`w-4 h-4 mb-1 transition-transform group-hover:scale-110 relative z-10 ${
                  isActive ? 'text-gold-400' : 'text-slate-400 group-hover:text-gold-400'
                }`} />

                <span className="text-[10px] tracking-wide relative z-10 font-sans font-medium">
                  {item.name}
                </span>
              </a>
            );
          })}
        </nav>

        {/* BOTTOM: Editorial Tagline & Social Row */}
        <div className="flex flex-col items-center gap-4 w-full">
          {/* Subtle Vertical Editorial Tagline */}
          <div className="text-[10px] font-serif italic text-slate-500 text-center leading-tight tracking-wide px-1">
            Better Solutions<br />Through Technology
          </div>

          {/* Minimal Social Links */}
          <div className="flex items-center justify-center gap-2 text-slate-400">
            {profile.socialLinks.github && (
              <a
                href={profile.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-gold-400 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
            )}
            {profile.socialLinks.linkedin && (
              <a
                href={profile.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-gold-400 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
            )}
            {profile.socialLinks.instagram && (
              <a
                href={profile.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-gold-400 transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
            )}
            {profile.socialLinks.twitter && (
              <a
                href={profile.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="hover:text-gold-400 transition-colors"
              >
                <TwitterIcon className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </aside>

      {/* MOBILE TOP BAR (lg:hidden) */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#08080a]/95 backdrop-blur-xl border-b border-white/[0.08] px-4 py-3 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => handleScrollTo(e, '#home')}
          className="flex items-center gap-2.5"
        >
          <span className="font-serif italic font-bold text-2xl text-gradient-gold">SM</span>
          <span className="text-xs font-serif tracking-wider text-slate-200">Siva Manikanta Reddy</span>
        </a>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenResume}
            className="px-3 py-1.5 rounded-full border border-gold-500/40 text-gold-400 text-[11px] font-mono tracking-wider flex items-center gap-1.5 bg-gold-500/10"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>RESUME</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-xl border border-white/10 text-slate-300 hover:text-gold-400"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed top-14 left-0 right-0 z-40 bg-[#09090b]/98 backdrop-blur-2xl border-b border-white/10 p-5 shadow-2xl"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const sectionId = item.href.replace('#', '');
                const isActive = activeSection === sectionId;
                const Icon = item.icon;

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.href)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-sans tracking-wide transition-colors ${
                      isActive
                        ? 'bg-gold-500/15 text-gold-400 font-semibold border border-gold-500/30'
                        : 'text-slate-300 hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 opacity-40" />
                  </a>
                );
              })}

              <div className="pt-4 mt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span className="font-serif italic text-[11px]">Better Solutions Through Technology</span>
                <div className="flex items-center gap-3">
                  {profile.socialLinks.github && (
                    <a href={profile.socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-gold-400">
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {profile.socialLinks.linkedin && (
                    <a href={profile.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-gold-400">
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
