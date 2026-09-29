import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-white/[0.08] bg-[#070709] py-8 px-4 sm:px-6 lg:px-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Copyright */}
        <div className="font-sans text-slate-500 text-center sm:text-left">
          © 2025 Siva Manikanta Reddy. All rights reserved.
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] font-sans">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-400 hover:text-gold-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Scroll To Top */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="p-2 rounded-full border border-white/10 hover:border-gold-400 text-slate-400 hover:text-gold-400 transition-colors"
        >
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
}
