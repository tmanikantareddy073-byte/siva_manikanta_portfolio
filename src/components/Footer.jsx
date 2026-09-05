import { profile } from '../data/portfolio';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  return (
    <footer className="relative border-t border-white/10 bg-dark-canvas/90 backdrop-blur-2xl text-slate-400 py-14 sm:py-18 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle top ambient specular light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-cyber-cyan/35 to-transparent" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-cyber-cyan/[0.03] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Brand & Identity */}
        <div className="mb-7">
          <h2 className="text-xl sm:text-2xl font-display font-extrabold tracking-tight text-slate-100 mb-2.5">
            {profile.name}
          </h2>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-mono tracking-widest text-cyber-cyan bg-cyber-cyan/10 border border-cyber-cyan/25">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-ping" />
            <span>{profile.statusBadge}</span>
          </div>
        </div>

        {/* Quick Nav Anchors */}
        <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2.5 mb-8 text-[11px] font-mono tracking-wider">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-400 hover:text-cyber-cyan transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Configured Social Profiles (Only displayed if configured) */}
        <div className="flex items-center gap-2.5 mb-8">
          {profile.socialLinks.github && (
            <a
              href={profile.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl btn-secondary text-slate-400 hover:text-cyber-cyan transition-all"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {profile.socialLinks.linkedin && (
            <a
              href={profile.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl btn-secondary text-slate-400 hover:text-cyber-cyan transition-all"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          )}
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="p-2.5 rounded-xl btn-secondary text-slate-400 hover:text-cyber-cyan transition-all"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="mb-8 p-3 rounded-full btn-secondary text-slate-400 hover:text-cyber-cyan transition-all group"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        </button>

        {/* Copyright */}
        <div className="text-[11px] font-mono text-slate-500 border-t border-white/5 pt-6 w-full max-w-xl">
          <p>© 2026 {profile.displayName}. Built with precision, React, Tailwind CSS, & Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
