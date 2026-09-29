import { motion } from 'framer-motion';
import { education } from '../data/education';
import { GraduationCap, Award, Calendar, BookOpen, CheckCircle2 } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      
      {/* Background ambient gold diffuse */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gold-500/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-gold-400 uppercase mb-2">
            <span>08</span>
            <span className="w-6 h-[1px] bg-gold-400" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            EDUCATION
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed font-sans">
            Formal technical education, foundational computer engineering diploma with distinction, and current undergraduate engineering studies.
          </p>
        </div>

        {/* Education Milestone Cards */}
        <div className="space-y-6">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="p-7 sm:p-9 rounded-3xl bg-obsidian-900/90 border border-white/[0.08] hover:border-gold-500/40 group transition-all shadow-card"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                
                {/* Degree & Institution */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-gold-400 transition-all">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap mb-1.5">
                      <h3 className="font-serif font-bold text-lg sm:text-xl text-white tracking-tight">
                        {edu.degree}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-gold-500/15 text-gold-300 border border-gold-500/30 font-medium">
                        {edu.badge}
                      </span>
                    </div>
                    <div className="text-xs font-mono text-gold-400/90 mb-1">
                      {edu.specialization}
                    </div>
                    <div className="text-xs text-slate-300 font-sans font-medium">
                      {edu.institution} • <span className="text-slate-400">{edu.university}</span>
                    </div>
                  </div>
                </div>

                {/* Score & Year Badge */}
                <div className="flex items-center gap-5 lg:self-center shrink-0 border-t lg:border-t-0 lg:border-l border-white/10 pt-4 lg:pt-0 lg:pl-8">
                  <div className="text-left lg:text-right">
                    <div className="text-2xl sm:text-3xl font-serif font-extrabold text-gradient-gold tracking-tight">
                      {edu.percentage}
                    </div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                      Score / Grade
                    </div>
                  </div>

                  <div className="text-left lg:text-right pl-5 border-l border-white/10">
                    <div className="text-lg sm:text-xl font-mono font-bold text-white">
                      {edu.year}
                    </div>
                    <div className="text-[10px] font-mono text-gold-400 font-medium">
                      {edu.status}
                    </div>
                  </div>
                </div>

              </div>

              {/* Highlights */}
              <div className="mt-6 pt-5 border-t border-white/5 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
                {edu.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
