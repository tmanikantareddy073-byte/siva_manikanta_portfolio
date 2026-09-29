import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import DigitalCore from '../components/DigitalCore';
import { profile } from '../data/portfolio';
import { downloadFile } from '../utils/assets';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from '../components/Icons';

export default function Hero({ onOpenResume }) {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex flex-col justify-center pt-8 pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden">
      
      {/* Top Right Utility Bar: Download Resume Button */}
      <div className="w-full flex justify-end mb-4 pt-2">
        <a
          href={profile.resume.filePath}
          download="Siva_Manikanta_Reddy_Resume.pdf"
          onClick={(e) => {
            e.preventDefault();
            downloadFile(profile.resume.filePath, 'Siva_Manikanta_Reddy_Resume.pdf');
          }}
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/40 text-gold-400 bg-obsidian-900/80 hover:bg-gold-500/15 hover:border-gold-400 text-xs font-mono tracking-wider transition-all duration-300 shadow-sm"
        >
          <Download className="w-3.5 h-3.5 text-gold-400" />
          <span>Download Resume</span>
        </a>
      </div>

      {/* Main Hero Container */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
        
        {/* LEFT COLUMN: Identity & Typography */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="lg:col-span-6 xl:col-span-6 flex flex-col items-start z-10"
        >
          {/* Eyebrow Label */}
          <div className="text-[11px] sm:text-xs font-mono tracking-[0.22em] uppercase text-gold-400/90 font-medium mb-4">
            AI / ML ENTHUSIAST • SOFTWARE ENGINEER • PROBLEM SOLVER
          </div>

          {/* Large Luxury Serif Display Name */}
          <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05] mb-5 text-white">
            <span className="block text-white">
              Siva Manikanta
            </span>
            <span className="block text-gradient-gold font-normal">
              Reddy
            </span>
          </h1>

          {/* Bio Description */}
          <p className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed mb-8 font-sans font-normal">
            I build intelligent web applications and explore the power of AI/ML to solve real-world problems. Passionate about creating innovative, scalable and user-friendly solutions.
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="px-6 py-3 rounded-full btn-gold text-xs font-sans font-semibold tracking-wide inline-flex items-center gap-2 group cursor-pointer"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href="#contact"
              onClick={scrollToContact}
              className="px-6 py-3 rounded-full btn-dark-luxury text-xs font-sans font-medium tracking-wide inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Get In Touch</span>
            </a>
          </div>

          {/* Social Row */}
          <div className="flex items-center gap-4 text-slate-400">
            {profile.socialLinks.github && (
              <a
                href={profile.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-gold-400 transition-colors"
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
                className="hover:text-gold-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
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
                <TwitterIcon className="w-4 h-4" />
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
                <InstagramIcon className="w-4 h-4" />
              </a>
            )}
          </div>
        </motion.div>

        {/* CENTER/RIGHT: 3D MODULAR CUBES WITH CELESTIAL RING */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.2, ease: 'easeOut' }}
          className="lg:col-span-5 xl:col-span-5 relative flex items-center justify-center"
        >
          <DigitalCore isDark={true} />
        </motion.div>

        {/* FAR RIGHT: VERTICAL EDITORIAL QUOTE & SCROLL INDICATOR */}
        <div className="hidden xl:flex lg:col-span-1 flex-col items-center justify-between h-[360px] self-center text-right pr-2">
          {/* Editorial Vertical Quote */}
          <div className="flex flex-col items-end gap-1.5">
            <span className="font-serif italic text-base text-slate-200">Code</span>
            <span className="font-serif italic text-base text-slate-200">Builds</span>
            <span className="font-serif italic text-base text-slate-200">Ideas into</span>
            <span className="font-serif italic text-lg font-bold text-gradient-gold">Reality</span>
            <div className="w-8 h-[1.5px] bg-gradient-to-r from-transparent to-gold-400 mt-1" />
          </div>

          {/* Scroll Down Indicator */}
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-slate-500 hover:text-gold-400 transition-colors group cursor-pointer"
          >
            <span className="[writing-mode:vertical-rl] text-[10px] font-mono tracking-widest uppercase">
              Scroll Down
            </span>
            <div className="w-[1px] h-12 bg-slate-700 group-hover:bg-gold-400 transition-colors relative">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}
