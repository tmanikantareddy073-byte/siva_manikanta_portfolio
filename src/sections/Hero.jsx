import { motion } from 'framer-motion';
import { ArrowRight, FileText, Sparkles, Terminal, Code2, Cpu } from 'lucide-react';
import DigitalCore from '../components/DigitalCore';
import { profile } from '../data/portfolio';
import { downloadFile } from '../utils/assets';

export default function Hero({ onOpenResume, isDark }) {
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
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyber-cyan/[0.04] rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-cyber-purple/[0.04] rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        
        {/* Left Column: Identity & Typography */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Top Domain Label & Status Badge */}
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono tracking-widest text-cyber-cyan bg-cyber-cyan/[0.08] border border-cyber-cyan/30">
              <Terminal className="w-3.5 h-3.5" />
              <span>{profile.domainLabel}</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider text-slate-300 bg-white/[0.04] border border-white/10">
              <span className="w-2 h-2 rounded-full bg-cyber-emerald animate-pulse" />
              <span>{profile.statusBadge}</span>
            </div>
          </div>

          {/* Large Title with Cinematic Gradient */}
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-[3.75rem] tracking-tight leading-[1.08] mb-4 text-slate-900 dark:text-white">
            <span className="text-gradient-electric block">
              {profile.name}
            </span>
          </h1>

          {/* Role Subtitle */}
          <div className="text-base sm:text-xl font-medium font-sans text-gradient-cyan mb-5 tracking-tight">
            {profile.role}
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-8 font-normal">
            {profile.heroDescription}
          </p>

          {/* Quick Metrics Strip / Authentic Identifiers */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 py-4 px-5 sm:px-6 rounded-2xl glass-panel border border-white/10 mb-8 w-full max-w-xl">
            <div>
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Academics</div>
              <div className="text-base sm:text-lg font-bold font-display text-slate-900 dark:text-white mt-0.5">88% B.Tech</div>
              <div className="text-[10px] font-mono text-cyber-cyan mt-0.5">CSM • JNTUK</div>
            </div>
            <div className="border-x border-white/10 px-3 sm:px-5">
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Foundation</div>
              <div className="text-base sm:text-lg font-bold font-display text-slate-900 dark:text-white mt-0.5">87% Diploma</div>
              <div className="text-[10px] font-mono text-cyber-purple mt-0.5">C.M.E Distinction</div>
            </div>
            <div>
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Hackathon</div>
              <div className="text-base sm:text-lg font-bold font-display text-slate-900 dark:text-white mt-0.5">GenUI AI</div>
              <div className="text-[10px] font-mono text-cyber-emerald mt-0.5">NRI-U Participant</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full">
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="px-6 py-3.5 rounded-xl btn-primary font-mono font-semibold text-xs tracking-wider uppercase inline-flex items-center gap-2"
            >
              <span>EXPLORE MY PROJECTS</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={profile.resume.filePath}
              download="Siva_Manikanta_Reddy_Resume.pdf"
              onClick={(e) => {
                e.preventDefault();
                downloadFile(profile.resume.filePath, 'Siva_Manikanta_Reddy_Resume.pdf');
              }}
              className="px-6 py-3.5 rounded-xl btn-secondary text-slate-800 dark:text-slate-200 hover:text-cyber-cyan font-mono text-xs tracking-wider uppercase inline-flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-cyber-cyan" />
              <span>DOWNLOAD RESUME</span>
            </a>

            <button
              onClick={onOpenResume}
              className="text-xs font-mono text-slate-400 hover:text-cyber-cyan transition-colors inline-flex items-center gap-1 px-3 py-2 rounded-lg border border-white/10 hover:border-cyber-cyan/30 bg-white/[0.02]"
            >
              <span>PREVIEW</span>
            </button>

            <a
              href="#contact"
              onClick={scrollToContact}
              className="text-xs font-mono text-slate-500 hover:text-cyber-cyan transition-colors inline-flex items-center gap-1.5 ml-1 py-2"
            >
              <span>LET'S CONNECT</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Digital Intelligence Core Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="lg:col-span-5 relative"
        >
          <div className="relative">
            <DigitalCore isDark={isDark} />

            <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-slate-500 px-2 tracking-wider">
              <span className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-cyber-cyan" />
                <span>DIGITAL IDENTITY × PROJECT LAB</span>
              </span>
              <span>INTERACTIVE CORE</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
