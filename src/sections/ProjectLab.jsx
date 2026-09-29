import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import {
  Sparkles,
  ArrowRight,
  ChevronRight,
  Cpu,
  Terminal,
  Code2,
  CheckCircle2,
  Layers
} from 'lucide-react';

export default function ProjectLab({ onOpenCaseStudy }) {
  // 3 authentic projects (Password Generator strictly removed)
  const genuiProject = projects.find((p) => p.id === 'genui-ai');
  const attendanceProject = projects.find((p) => p.id === 'digital-attendance');
  const expenseProject = projects.find((p) => p.id === 'expense-master');
  const featuredProjects = [genuiProject, attendanceProject, expenseProject].filter(Boolean);

  // Interactive simulation state for Expense Master preview
  const [demoExpense, setDemoExpense] = useState(2500);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      
      {/* Ambient background gold glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-gold-500/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* EDITORIAL CREAM CONTRAST SHOWCASE (Direct from Reference Image) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="cream-panel p-8 sm:p-12 lg:p-14"
        >
          {/* Section Header Strip */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#8c6e18] uppercase mb-2">
                <span>04</span>
                <span>PROJECT LAB</span>
                <span className="w-8 h-[1px] bg-[#8c6e18]" />
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#141416] tracking-tight">
                Featured Projects
              </h2>
              <p className="text-xs sm:text-sm text-[#5c5c64] font-sans mt-1">
                Explore functional prototypes, generative UI architectures, and algorithmic utilities.
              </p>
            </div>

            <button
              onClick={() => onOpenCaseStudy(genuiProject)}
              className="self-start sm:self-auto px-5 py-2.5 rounded-full border border-black/20 text-[#141416] hover:bg-black hover:text-white text-xs font-sans font-medium tracking-wide inline-flex items-center gap-2 transition-all"
            >
              <span>Explore Primary Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 3 FEATURED PROJECT CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                onClick={() => onOpenCaseStudy(project)}
                className="group cursor-pointer rounded-2xl bg-white border border-black/5 hover:border-gold-500/50 p-4 transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Dark Preview Mockup Container */}
                  <div className="relative h-44 rounded-xl bg-[#0c0d12] border border-black/10 overflow-hidden mb-4 p-4 flex flex-col justify-between text-white group-hover:scale-[1.01] transition-transform">
                    {/* Top window dots */}
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-500/70" />
                        <span className="w-2 h-2 rounded-full bg-amber-500/70" />
                        <span className="w-2 h-2 rounded-full bg-emerald-500/70" />
                      </div>
                      <span className="text-gold-400 text-[10px] uppercase tracking-wider font-mono font-semibold">
                        {project.shortTitle}
                      </span>
                    </div>

                    {/* Schematic Icon */}
                    <div className="my-auto text-center">
                      <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-white/[0.05] border border-white/10 text-gold-400 mb-2 group-hover:scale-110 transition-transform">
                        {project.id === 'genui-ai' ? (
                          <Sparkles className="w-6 h-6" />
                        ) : project.id === 'digital-attendance' ? (
                          <Code2 className="w-6 h-6" />
                        ) : (
                          <Terminal className="w-6 h-6" />
                        )}
                      </div>
                      <div className="text-[11px] font-mono text-slate-400 truncate px-2">
                        {project.badge}
                      </div>
                    </div>

                    {/* Bottom Status */}
                    <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 border-t border-white/10 pt-2">
                      <span className="text-emerald-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        VERIFIED
                      </span>
                      <span className="text-gold-400 font-semibold group-hover:translate-x-0.5 transition-transform">
                        CASE STUDY →
                      </span>
                    </div>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-[#141416] group-hover:text-[#8c6e18] transition-colors mb-1.5 tracking-tight">
                    {project.shortTitle}
                  </h3>

                  <p className="text-xs text-[#5c5c64] font-sans leading-relaxed mb-4 line-clamp-2">
                    {project.tagline}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-black/5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[10px] font-sans font-medium bg-[#ede8df] text-[#4a4a4f]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* PRIMARY FEATURED PROJECT ARCHITECTURE: GENUI AI (Deep Technical Breakdown) */}
        {genuiProject && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-obsidian-900/95 border border-gold-500/40 p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-card"
          >
            {/* Top Badge & Category */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2.5">
                <span className="px-3.5 py-1 rounded-full text-xs font-mono tracking-wider bg-gold-500/15 text-gold-400 border border-gold-500/40 font-semibold">
                  PRIMARY FEATURED PROJECT
                </span>
                <span className="px-3.5 py-1 rounded-full text-xs font-mono text-slate-300 bg-white/[0.04] border border-white/10">
                  {genuiProject.category}
                </span>
              </div>
              <span className="text-xs font-mono text-gold-400/80 font-medium">
                NRI-U HACKATHON
              </span>
            </div>

            {/* Title & Description */}
            <div className="max-w-3xl mb-8">
              <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white mb-4 tracking-tight">
                {genuiProject.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                {genuiProject.description}
              </p>
            </div>

            {/* ANIMATED ARCHITECTURE PIPELINE (6 STAGES) */}
            <div className="mb-10 p-6 sm:p-8 rounded-2xl bg-black/40 border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-gold-400" />
                  <span className="text-xs font-mono text-slate-200 tracking-wider uppercase font-semibold">
                    GENERATIVE UI ARCHITECTURE PIPELINE
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/30 font-medium">
                  REAL-TIME FLOW
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
                {genuiProject.architectureSteps.map((step, idx) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, duration: 0.4 }}
                    className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col justify-between group hover:border-gold-500/50 transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-gold-400 mb-1.5">
                        <span>STAGE {step.step}</span>
                        {idx < 5 && <ChevronRight className="w-3 h-3 text-slate-600 lg:hidden" />}
                      </div>
                      <div className="text-xs font-bold text-white mb-1 font-sans">
                        {step.name}
                      </div>
                    </div>
                    <div className="text-[10px] text-slate-400 mt-2 font-mono leading-relaxed">
                      {step.detail}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CASE STUDY HIGHLIGHTS: 01 to 05 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-10">
              {genuiProject.caseStudy.map((item) => (
                <div
                  key={item.number}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/10"
                >
                  <div className="text-[10px] font-mono text-gold-400 mb-1.5 font-semibold tracking-wider">
                    {item.number} — {item.label}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Tech Stack & Action Button */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pt-6 border-t border-white/10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-gold-400 mr-2 font-medium">STACK:</span>
                {genuiProject.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/[0.03] border border-white/10 text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => onOpenCaseStudy(genuiProject)}
                className="px-6 py-3 rounded-full btn-gold text-xs font-sans font-semibold tracking-wide inline-flex items-center gap-2 cursor-pointer"
              >
                <span>OPEN FULL CASE STUDY</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* OTHER PROJECTS: DIGITAL ATTENDANCE & EXPENSE MASTER DETAILS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* DIGITAL ATTENDANCE */}
          {attendanceProject && (
            <div className="p-7 sm:p-9 rounded-3xl bg-obsidian-900/90 border border-white/[0.08] hover:border-gold-500/40 transition-all flex flex-col justify-between shadow-card">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-0.5 rounded-full text-[10px] font-mono text-gold-400 bg-gold-500/10 border border-gold-500/30 font-medium">
                    {attendanceProject.category}
                  </span>
                  <span className="text-xs font-mono text-slate-500">PROJECT 01</span>
                </div>

                <h4 className="text-xl font-serif font-bold text-white mb-2 tracking-tight">
                  {attendanceProject.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed font-sans">
                  {attendanceProject.description}
                </p>

                <div className="space-y-2.5 mb-6 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10">
                    <span className="text-gold-400 block mb-0.5 text-[10px] uppercase font-semibold">CORE PROBLEM:</span>
                    <span className="text-slate-300">Manual paper registers lead to errors and audit bottlenecks.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10">
                    <span className="text-gold-400 block mb-0.5 text-[10px] uppercase font-semibold">SOLUTION:</span>
                    <span className="text-slate-300">Clean web interface for immediate recording, rosters, and queries.</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {attendanceProject.technologies.map((t) => (
                    <span key={t} className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] border border-white/10 text-slate-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenCaseStudy(attendanceProject)}
                className="w-full py-3 rounded-xl btn-secondary text-xs font-mono text-gold-400 hover:text-white flex items-center justify-center gap-2 border border-gold-500/30 hover:border-gold-500"
              >
                <span>EXPLORE CASE STUDY</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* EXPENSE MASTER WITH INTERACTIVE SLIDER */}
          {expenseProject && (
            <div className="p-7 sm:p-9 rounded-3xl bg-obsidian-900/90 border border-white/[0.08] hover:border-gold-500/40 transition-all flex flex-col justify-between shadow-card">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-0.5 rounded-full text-[10px] font-mono text-gold-400 bg-gold-500/10 border border-gold-500/30 font-medium">
                    {expenseProject.category}
                  </span>
                  <span className="text-xs font-mono text-slate-500">PROJECT 02</span>
                </div>

                <h4 className="text-xl font-serif font-bold text-white mb-2 tracking-tight">
                  {expenseProject.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed font-sans">
                  {expenseProject.description}
                </p>

                {/* Interactive Visual Flow Preview */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 mb-6">
                  <div className="text-[10px] font-mono text-gold-400 mb-2 font-semibold tracking-wider">
                    ALGORITHMIC FLOW PREVIEW
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 space-y-1.5">
                    <div className="flex justify-between">
                      <span>USER INPUT:</span>
                      <span className="text-slate-200 font-medium">₹{demoExpense} baseline</span>
                    </div>
                    <div className="flex justify-between">
                      <span>PROCESSING:</span>
                      <span className="text-slate-200">Normalized arrays</span>
                    </div>
                    <div className="flex justify-between">
                      <span>PREDICTION:</span>
                      <span className="text-slate-200">Monthly Projection</span>
                    </div>
                    <div className="flex justify-between pt-1.5 border-t border-white/10 text-gold-400 font-semibold">
                      <span>PROJECTED TOTAL:</span>
                      <span>₹{(demoExpense * 1.35).toFixed(0)}</span>
                    </div>
                  </div>

                  <input
                    type="range"
                    min="1000"
                    max="10000"
                    step="500"
                    value={demoExpense}
                    onChange={(e) => setDemoExpense(Number(e.target.value))}
                    className="w-full mt-3 accent-[#d4af37] cursor-pointer"
                  />
                  <div className="text-[10px] font-mono text-slate-500 mt-1 text-center">
                    Interactive prediction calculator
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {expenseProject.technologies.map((t) => (
                    <span key={t} className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] border border-white/10 text-slate-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenCaseStudy(expenseProject)}
                className="w-full py-3 rounded-xl btn-secondary text-xs font-mono text-gold-400 hover:text-white flex items-center justify-center gap-2 border border-gold-500/30 hover:border-gold-500"
              >
                <span>EXPLORE CASE STUDY</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
