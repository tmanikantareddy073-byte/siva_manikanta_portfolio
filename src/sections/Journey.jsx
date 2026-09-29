import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { journeyStages } from '../data/portfolio';
import { Calendar, ChevronDown, Award, BookOpen, Clock, CheckCircle2 } from 'lucide-react';

export default function Journey() {
  const [expandedIndex, setExpandedIndex] = useState(2); // Current stage open by default

  const toggleStage = (index) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="journey" className="py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      
      {/* Background ambient gold diffuse */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gold-500/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-gold-400 uppercase mb-2">
            <span>02</span>
            <span className="w-6 h-[1px] bg-gold-400" />
            <span>CHRONOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            MY JOURNEY
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed font-sans">
            From foundational school education to specialized computer engineering diploma with distinction and current B.Tech CSM studies.
          </p>
        </div>

        {/* Interactive Vertical Timeline with Luminous Trace */}
        <div className="relative border-l-2 border-gold-500/25 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-8">
          {journeyStages.map((stage, idx) => {
            const isExpanded = expandedIndex === idx;
            const isCurrent = stage.year === 'Current';

            return (
              <motion.div
                key={stage.stage}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="relative group"
              >
                {/* Milestone Node on Timeline */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-2 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    isCurrent
                      ? 'border-gold-400 bg-gold-500/20 shadow-[0_0_15px_rgba(212,175,55,0.6)]'
                      : 'border-white/20 bg-[#08080a] group-hover:border-gold-400'
                  }`}
                >
                  <div
                    className={`w-1.5 h-1.5 rounded-full ${
                      isCurrent ? 'bg-gold-400 animate-ping' : 'bg-slate-400'
                    }`}
                  />
                </div>

                {/* Stage Header Card */}
                <div
                  onClick={() => toggleStage(idx)}
                  className={`p-6 sm:p-7 rounded-3xl bg-obsidian-900/90 border cursor-pointer transition-all duration-300 shadow-card ${
                    isExpanded
                      ? 'border-gold-500/50 shadow-glow-gold'
                      : 'border-white/[0.08] hover:border-gold-500/30'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                      <span className="px-3 py-1 rounded-full text-xs font-mono tracking-wider bg-gold-500/10 border border-gold-500/30 text-gold-400 font-semibold">
                        {stage.year}
                      </span>
                      <h3 className="font-serif font-bold text-base sm:text-lg text-white">
                        {stage.stage}
                      </h3>
                      {stage.score && (
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-gold-500/15 text-gold-300 border border-gold-500/30">
                          {stage.score}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
                        {isExpanded ? 'Collapse' : 'Details'}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${
                          isExpanded ? 'rotate-180 text-gold-400' : ''
                        }`}
                      />
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 mt-2 font-sans">
                    {stage.institution}
                  </p>

                  {/* Expandable Details Area */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden pt-4 mt-4 border-t border-white/10"
                      >
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 font-sans font-normal">
                          {stage.description}
                        </p>
                        
                        <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-gold-400" />
                            Status: <strong className="text-slate-200 font-medium">{stage.status}</strong>
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
