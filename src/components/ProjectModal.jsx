import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Video, Layers, CheckCircle2, Cpu, ArrowRight, Image as ImageIcon } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9990] flex items-center justify-center p-3 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 28, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel border border-white/15 dark:border-white/15 rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 z-10 text-slate-900 dark:text-slate-100"
        >
          {/* Header Bar */}
          <div className="flex items-start justify-between border-b border-white/10 pb-5 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono tracking-wider bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/30">
                  {project.category}
                </span>
                {project.badge && (
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono tracking-wider bg-cyber-purple/10 text-cyber-purple border border-cyber-purple/30">
                    {project.badge}
                  </span>
                )}
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-gradient-silver">
                {project.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-8 text-sm sm:text-base leading-relaxed">
            
            {/* 01 — OVERVIEW */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyber-cyan tracking-widest uppercase mb-2">
                <span>01</span>
                <span className="w-4 h-[1px] bg-cyber-cyan" />
                <span>OVERVIEW</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                {project.description}
              </p>
            </div>

            {/* CASE STUDY BLOCKS: 02 PROBLEM & 03 SOLUTION */}
            {project.caseStudy && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.caseStudy.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white/5 dark:bg-white/[0.03] border border-white/10 relative overflow-hidden"
                  >
                    <div className="flex items-center gap-2 text-xs font-mono text-cyber-purple tracking-wider mb-2">
                      <span>{item.number}</span>
                      <span className="w-3 h-[1px] bg-cyber-purple" />
                      <span>{item.label}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* 04 — HOW IT WORKS / ARCHITECTURE */}
            {project.architectureSteps && (
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-cyber-cyan tracking-widest uppercase mb-3">
                  <span>04</span>
                  <span className="w-4 h-[1px] bg-cyber-cyan" />
                  <span>ARCHITECTURE & SYSTEM FLOW</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {project.architectureSteps.map((step) => (
                    <div
                      key={step.step}
                      className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02] flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between text-[11px] font-mono text-cyber-cyan mb-1.5">
                        <span>STEP {step.step}</span>
                        <ArrowRight className="w-3 h-3 opacity-60" />
                      </div>
                      <div className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-slate-100 mb-1">
                        {step.name}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        {step.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* EXPENSE MASTER FLOW STEPS */}
            {project.flowSteps && (
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-cyber-cyan tracking-widest uppercase mb-3">
                  <span>04</span>
                  <span className="w-4 h-[1px] bg-cyber-cyan" />
                  <span>PROCESSING PIPELINE</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.flowSteps.map((step) => (
                    <div
                      key={step.step}
                      className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02]"
                    >
                      <div className="text-[11px] font-mono text-cyber-emerald mb-1">
                        STAGE {step.step} • {step.title}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        {step.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* KEY FEATURES */}
            {project.features && (
              <div>
                <div className="text-xs font-mono text-cyber-cyan tracking-widest uppercase mb-3">
                  KEY FEATURES
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyber-cyan shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 05 — TECHNOLOGY */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyber-cyan tracking-widest uppercase mb-3">
                <span>05</span>
                <span className="w-4 h-[1px] bg-cyber-cyan" />
                <span>TECHNOLOGIES USED</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 dark:bg-white/[0.04] border border-white/10 text-slate-700 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 06 — MY CONTRIBUTION */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyber-cyan tracking-widest uppercase mb-2">
                <span>06</span>
                <span className="w-4 h-[1px] bg-cyber-cyan" />
                <span>MY CONTRIBUTION</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 p-4 rounded-xl bg-white/[0.02] border border-white/10">
                {project.contribution}
              </p>
            </div>

            {/* 07 — VISUALS PLACEHOLDER */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyber-cyan tracking-widest uppercase mb-2">
                <span>07</span>
                <span className="w-4 h-[1px] bg-cyber-cyan" />
                <span>PROJECT VISUALS</span>
              </div>
              {project.images && project.images.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      className="rounded-xl border border-white/10 w-full h-48 object-cover"
                    />
                  ))}
                </div>
              ) : (
                <div className="p-6 rounded-xl border border-dashed border-white/15 bg-white/[0.01] flex flex-col items-center text-center justify-center text-slate-400">
                  <ImageIcon className="w-8 h-8 mb-2 text-cyber-cyan/60" />
                  <span className="text-xs font-mono text-slate-300 dark:text-slate-400 mb-1">
                    Visual Media Pending User Upload
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    Drop screenshots in <code className="text-cyber-cyan">public/projects/{project.id}/</code> to showcase
                  </span>
                </div>
              )}
            </div>

            {/* 08 — LINKS */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyber-cyan tracking-widest uppercase mb-3">
                <span>08</span>
                <span className="w-4 h-[1px] bg-cyber-cyan" />
                <span>PROJECT LINKS</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-mono text-white transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GITHUB REPOSITORY</span>
                  </a>
                ) : (
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.02] border border-white/10 text-xs font-mono text-slate-500 cursor-not-allowed">
                    <GithubIcon className="w-4 h-4" />
                    <span>Repository Private / Staging</span>
                  </div>
                )}

                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyber-cyan/10 hover:bg-cyber-cyan/20 border border-cyber-cyan/40 text-xs font-mono text-cyber-cyan transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>LIVE DEMONSTRATION</span>
                  </a>
                ) : null}

                {project.video ? (
                  <a
                    href={project.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyber-purple/10 hover:bg-cyber-purple/20 border border-cyber-purple/40 text-xs font-mono text-cyber-purple transition-colors"
                  >
                    <Video className="w-4 h-4" />
                    <span>WALKTHROUGH VIDEO</span>
                  </a>
                ) : null}
              </div>
            </div>

          </div>

          {/* Footer Close */}
          <div className="mt-8 pt-5 border-t border-white/10 flex justify-between items-center text-xs font-mono text-slate-500">
            <span>Press ESC or click outside to dismiss</span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-colors"
            >
              CLOSE
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
