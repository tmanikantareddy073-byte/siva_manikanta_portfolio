import { motion } from 'framer-motion';
import { Trophy, Lightbulb, Hammer, RefreshCw, Flag, Sparkles, ArrowRight, Award, FolderGit2 } from 'lucide-react';

export default function HackathonJourney({ onOpenGenUI, onOpenCert }) {
  const steps = [
    {
      stage: '01',
      title: 'IDEA',
      icon: Lightbulb,
      color: 'text-amber-400',
      border: 'border-amber-400/30',
      desc: 'Observed that static frontend forms restrict real-time workflow adaptation. Conceived an AI orchestration layer allowing users to generate functional UIs through natural language.',
    },
    {
      stage: '02',
      title: 'BUILD',
      icon: Hammer,
      color: 'text-cyber-cyan',
      border: 'border-cyber-cyan/30',
      desc: 'Implemented FastAPI backend, integrated Google Gemini API prompt parsing, structured JSON schemas via Pydantic, and created dynamic React component renderers.',
    },
    {
      stage: '03',
      title: 'ITERATE',
      icon: RefreshCw,
      color: 'text-cyber-purple',
      border: 'border-cyber-purple/30',
      desc: 'Refined prompt engineering for deterministic UI layout schemas, resolved state mutation bugs, and polished responsive Tailwind CSS styling.',
    },
    {
      stage: '04',
      title: 'HACKATHON',
      icon: Flag,
      color: 'text-blue-400',
      border: 'border-blue-400/30',
      desc: 'Competed at the prestigious NRI-U Hackathon hosted at NRI Institute of Technology. Deployed live prototype for evaluation by technical judges.',
    },
    {
      stage: '05',
      title: 'SHOWCASE',
      icon: Trophy,
      color: 'text-cyber-emerald',
      border: 'border-cyber-emerald/30',
      desc: 'Successfully showcased GenUI AI in front of faculty and tech reviewers, receiving the NRI-U Hackathon Participation Certificate.',
    },
  ];

  return (
    <section id="hackathon" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-cyber-purple tracking-widest uppercase mb-2">
            <span>05</span>
            <span className="w-6 h-[1px] bg-cyber-purple" />
            <span>COMPETITIVE SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            NRI-U HACKATHON JOURNEY
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            Tracing the end-to-end development cycle of <strong className="text-cyber-cyan font-semibold">GenUI AI</strong> from initial conceptualization to live presentation at the NRI-U Hackathon.
          </p>
        </div>

        {/* Journey Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.stage}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-3xl glass-panel interactive-card border border-white/10 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono text-slate-500 font-medium">STAGE {step.stage}</span>
                    <div className={`p-2 rounded-xl bg-white/[0.04] border ${step.border} ${step.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-sm text-slate-900 dark:text-white mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Visual Linkage Box Connecting GenUI AI & NRI-U Certificate */}
        <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-cyber-purple/35 bg-gradient-to-r from-cyber-purple/[0.04] via-transparent to-cyber-cyan/[0.04] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-card">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyber-purple/15 border border-cyber-purple/40 text-cyber-purple flex items-center justify-center shrink-0">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-slate-900 dark:text-white tracking-tight">
                Hackathon Artifacts & Proof of Innovation
              </h4>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                GenUI AI Prototype ↔ NRI-U Hackathon Participation Award
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onOpenGenUI}
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl btn-secondary text-cyber-cyan text-xs font-mono flex items-center justify-center gap-2"
            >
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>EXPLORE GENUI AI</span>
            </button>

            <button
              onClick={onOpenCert}
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl btn-primary text-slate-950 text-xs font-mono flex items-center justify-center gap-2"
            >
              <Award className="w-3.5 h-3.5" />
              <span>VIEW NRI-U CERTIFICATE</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
