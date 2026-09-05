import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { Sparkles, ArrowRight, ExternalLink, Layers, Cpu, CheckCircle2, ChevronRight, Terminal, Zap, Shield, Key } from 'lucide-react';

export default function ProjectLab({ onOpenCaseStudy }) {
  const genuiProject = projects.find((p) => p.id === 'genui-ai');
  const attendanceProject = projects.find((p) => p.id === 'digital-attendance');
  const expenseProject = projects.find((p) => p.id === 'expense-master');
  const passwordProject = projects.find((p) => p.id === 'password-generator');

  // Interactive simulation state for Expense Master preview
  const [demoExpense, setDemoExpense] = useState(2500);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-cyber-cyan tracking-widest uppercase mb-2">
            <span>04</span>
            <span className="w-6 h-[1px] bg-cyber-cyan" />
            <span>ENGINEERING WORKBENCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            PROJECT LAB
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
            Things I've built. Problems I've explored. Explore functional prototypes, generative UI architectures, and algorithmic utilities.
          </p>
        </div>

        {/* PRIMARY FEATURED PROJECT: GENUI AI (Largest Visual Presentation) */}
        {genuiProject && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="mb-16 rounded-3xl glass-panel border border-cyber-cyan/35 p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-card"
          >
            {/* Ambient background glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyber-cyan/[0.06] rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyber-purple/[0.05] rounded-full blur-[120px] pointer-events-none" />

            {/* Top Badge & Category */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2.5">
                <span className="px-3 py-1 rounded-full text-xs font-mono tracking-wider bg-cyber-cyan/15 text-cyber-cyan border border-cyber-cyan/40 font-semibold">
                  PRIMARY FEATURED PROJECT
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono text-cyber-purple bg-cyber-purple/10 border border-cyber-purple/30">
                  {genuiProject.category}
                </span>
              </div>
              <span className="text-xs font-mono text-slate-400 font-medium">
                PROJECT 02
              </span>
            </div>

            {/* Title & Tagline */}
            <div className="max-w-3xl mb-8">
              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                {genuiProject.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {genuiProject.description}
              </p>
            </div>

            {/* ANIMATED ARCHITECTURE PIPELINE */}
            <div className="mb-10 p-6 sm:p-8 rounded-2xl bg-white/[0.02] dark:bg-black/30 border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-cyber-cyan" />
                  <span className="text-xs font-mono text-slate-300 tracking-wider uppercase font-semibold">
                    GENERATIVE UI ARCHITECTURE PIPELINE
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/30 font-medium">
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
                    className="p-4 rounded-xl bg-white/[0.03] dark:bg-dark-surface/80 border border-white/10 flex flex-col justify-between group hover:border-cyber-cyan/50 transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-cyber-cyan mb-1.5">
                        <span>STAGE {step.step}</span>
                        {idx < 5 && <ChevronRight className="w-3 h-3 text-slate-500 lg:hidden" />}
                      </div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white mb-1 tracking-tight">
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
                  <div className="text-[10px] font-mono text-cyber-purple mb-1.5 font-semibold tracking-wider">
                    {item.number} — {item.label}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Tech Stack & Explore Action */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pt-6 border-t border-white/10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-400 mr-2 font-medium">STACK:</span>
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
                data-cursor="project"
                className="px-6 py-3 rounded-xl btn-primary font-mono text-xs tracking-wider uppercase inline-flex items-center gap-2"
              >
                <span>OPEN FULL CASE STUDY</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* OTHER PROJECTS GRID: 01 ATTENDANCE, 03 EXPENSE MASTER, 04 PASSWORD GENERATOR */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* PROJECT 01 — DIGITAL ATTENDANCE SYSTEM */}
          {attendanceProject && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="p-7 sm:p-8 rounded-3xl glass-panel interactive-card border border-white/10 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono text-cyber-cyan bg-cyber-cyan/10 border border-cyber-cyan/30 font-medium">
                    {attendanceProject.category}
                  </span>
                  <span className="text-xs font-mono text-slate-500">PROJECT 01</span>
                </div>

                <h4 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyber-cyan transition-colors tracking-tight">
                  {attendanceProject.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed font-normal">
                  {attendanceProject.description}
                </p>

                {/* Structured Fields */}
                <div className="space-y-2.5 mb-6 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10">
                    <span className="text-slate-400 block mb-0.5 text-[10px] uppercase font-semibold">CORE PROBLEM:</span>
                    <span className="text-slate-300">Manual paper registers lead to errors and audit bottlenecks.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10">
                    <span className="text-slate-400 block mb-0.5 text-[10px] uppercase font-semibold">SOLUTION:</span>
                    <span className="text-slate-300">Clean web interface for immediate recording, rosters, and queries.</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {attendanceProject.technologies.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] border border-white/10 text-slate-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenCaseStudy(attendanceProject)}
                data-cursor="project"
                className="w-full py-2.5 rounded-xl btn-secondary text-xs font-mono text-slate-200 flex items-center justify-center gap-2"
              >
                <span>EXPLORE CASE STUDY</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          )}

          {/* PROJECT 03 — EXPENSE MASTER */}
          {expenseProject && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="p-7 sm:p-8 rounded-3xl glass-panel interactive-card border border-white/10 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono text-cyber-emerald bg-cyber-emerald/10 border border-cyber-emerald/30 font-medium">
                    {expenseProject.category}
                  </span>
                  <span className="text-xs font-mono text-slate-500">PROJECT 03</span>
                </div>

                <h4 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyber-emerald transition-colors tracking-tight">
                  {expenseProject.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed font-normal">
                  {expenseProject.description}
                </p>

                {/* Interactive Visual Flow */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 mb-6">
                  <div className="text-[10px] font-mono text-cyber-emerald mb-2 font-semibold tracking-wider">
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
                    <div className="flex justify-between pt-1.5 border-t border-white/10 text-cyber-emerald font-semibold">
                      <span>PROJECTED TOTAL:</span>
                      <span>₹{(demoExpense * 1.35).toFixed(0)}</span>
                    </div>
                  </div>

                  {/* Interactive Slider */}
                  <input
                    type="range"
                    min="1000"
                    max="10000"
                    step="500"
                    value={demoExpense}
                    onChange={(e) => setDemoExpense(Number(e.target.value))}
                    className="w-full mt-3 accent-cyber-emerald cursor-pointer"
                  />
                  <div className="text-[10px] font-mono text-slate-500 mt-1 text-center">
                    Simulate expenditure prediction logic
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {expenseProject.technologies.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] border border-white/10 text-slate-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenCaseStudy(expenseProject)}
                data-cursor="project"
                className="w-full py-2.5 rounded-xl btn-secondary text-xs font-mono text-slate-200 flex items-center justify-center gap-2"
              >
                <span>EXPLORE CASE STUDY</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          )}

          {/* PROJECT 04 — PASSWORD GENERATOR */}
          {passwordProject && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.16 }}
              className="p-7 sm:p-8 rounded-3xl glass-panel interactive-card border border-white/10 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono text-cyber-purple bg-cyber-purple/10 border border-cyber-purple/30 font-medium">
                    {passwordProject.category}
                  </span>
                  <span className="text-xs font-mono text-slate-500">PROJECT 04</span>
                </div>

                <h4 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyber-purple transition-colors tracking-tight">
                  {passwordProject.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed font-normal">
                  {passwordProject.description}
                </p>

                {/* Minimal terminal preview */}
                <div className="p-4 rounded-xl bg-black/60 border border-white/10 font-mono text-[11px] text-cyber-purple mb-6">
                  <div className="flex items-center gap-1.5 mb-2 text-slate-500">
                    <span className="w-2 h-2 rounded-full bg-red-500/80" />
                    <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                    <span className="text-[10px] pl-2 text-slate-400">pass_gen.py</span>
                  </div>
                  <div className="text-slate-400">$ python pass_gen.py --len 16</div>
                  <div className="text-cyber-cyan mt-1 font-semibold">&gt; 9k#Xp@4m$vR8!qL1</div>
                  <div className="text-[10px] text-slate-500 mt-2">
                    Python lists, strings & uniform randomization
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {passwordProject.technologies.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] border border-white/10 text-slate-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenCaseStudy(passwordProject)}
                data-cursor="project"
                className="w-full py-2.5 rounded-xl btn-secondary text-xs font-mono text-slate-200 flex items-center justify-center gap-2"
              >
                <span>EXPLORE CASE STUDY</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
}
