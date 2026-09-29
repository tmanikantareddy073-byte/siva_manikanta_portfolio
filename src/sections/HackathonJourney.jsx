import { motion } from 'framer-motion';
import { Trophy, Lightbulb, Hammer, RefreshCw, Flag, Sparkles, ArrowRight, Award, FolderGit2, Eye } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

export default function HackathonJourney({ onOpenGenUI, onOpenCert }) {
  const steps = [
    {
      stage: '01',
      title: 'IDEA',
      icon: Lightbulb,
      desc: 'Observed that static frontend forms restrict real-time workflow adaptation. Conceived an AI orchestration layer allowing users to generate functional UIs through natural language.',
    },
    {
      stage: '02',
      title: 'BUILD',
      icon: Hammer,
      desc: 'Implemented FastAPI backend, integrated Google Gemini API prompt parsing, structured JSON schemas via Pydantic, and created dynamic React component renderers.',
    },
    {
      stage: '03',
      title: 'ITERATE',
      icon: RefreshCw,
      desc: 'Refined prompt engineering for deterministic UI layout schemas, resolved state mutation bugs, and polished responsive Tailwind CSS styling.',
    },
    {
      stage: '04',
      title: 'HACKATHON',
      icon: Flag,
      desc: 'Competed at the prestigious NRI-U Hackathon hosted at NRI Institute of Technology. Deployed live prototype for evaluation by technical judges.',
    },
    {
      stage: '05',
      title: 'SHOWCASE',
      icon: Trophy,
      desc: 'Successfully showcased GenUI AI in front of faculty and tech reviewers, receiving the NRI-U Hackathon Participation Certificate.',
    },
  ];

  return (
    <section id="hackathon" className="py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      
      {/* Ambient gold glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-gold-500/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-gold-400 uppercase mb-2">
            <span>05</span>
            <span className="w-6 h-[1px] bg-gold-400" />
            <span>COMPETITIVE SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            NRI-U HACKATHON JOURNEY
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed font-sans">
            Tracing the end-to-end development cycle of <strong className="text-gold-400 font-semibold">GenUI AI</strong> from initial conceptualization to live presentation at the NRI-U Hackathon.
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
                className="p-6 rounded-3xl bg-obsidian-900/90 border border-white/[0.08] hover:border-gold-500/40 flex flex-col justify-between group transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono text-gold-400/80 font-medium">STAGE {step.stage}</span>
                    <div className="p-2 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="font-serif font-bold text-sm text-white mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans font-normal">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Visual Linkage Box Connecting GenUI AI & NRI-U Certificate */}
        <div className="p-6 sm:p-8 rounded-3xl bg-obsidian-900/95 border border-gold-500/40 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-card">
          <div className="flex flex-col sm:flex-row items-center gap-5">
            {/* Certificate Photo Thumbnail */}
            <div 
              onClick={onOpenCert}
              className="relative w-32 h-24 sm:w-40 sm:h-28 rounded-2xl overflow-hidden border-2 border-gold-500/50 group cursor-pointer shrink-0 shadow-lg shadow-gold-500/10"
              title="Click to view full resolution certificate"
            >
              <img 
                src={getAssetUrl('/certificates/NRI_Hackathon_Certificate.jpeg')} 
                alt="NRI Hackathon Participation Certificate"
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              <div className="absolute inset-0 bg-gold-500/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                <span className="text-[10px] font-mono font-bold text-white bg-black/80 px-2 py-1 rounded border border-gold-400 flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5 text-gold-400" /> INSPECT
                </span>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-gold-500/15 text-gold-300 border border-gold-500/30 mb-1.5">
                <Trophy className="w-3 h-3 text-gold-400" />
                <span>OFFICIAL HACKATHON CREDENTIAL</span>
              </div>
              <h4 className="font-serif font-bold text-base sm:text-lg text-white tracking-tight">
                InnoGenesis 24-Hour National Innovation Hackathon 5.0
              </h4>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                School of Computer Studies, Dr. RVR NRI Institute of Technology • August 2026
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            <button
              onClick={onOpenGenUI}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-full border border-gold-500/30 hover:border-gold-400 text-gold-400 hover:text-white text-xs font-mono flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>EXPLORE GENUI AI</span>
            </button>

            <button
              onClick={onOpenCert}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-full btn-gold text-xs font-sans font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-sm"
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
