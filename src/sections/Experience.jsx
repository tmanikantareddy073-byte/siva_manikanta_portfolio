import { motion } from 'framer-motion';
import { experiences } from '../data/experience';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';

export default function Experience({ onOpenCert }) {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      
      {/* Background ambient gold diffuse */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gold-500/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-gold-400 uppercase mb-2">
            <span>06</span>
            <span className="w-6 h-[1px] bg-gold-400" />
            <span>INDUSTRY & INTERNSHIP ENGAGEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            EXPERIENCE & INTERNSHIPS
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed font-sans">
            Practical internships and virtual training programs in full-stack engineering and cloud data systems.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="p-7 sm:p-9 rounded-3xl bg-obsidian-900/90 border border-white/[0.08] hover:border-gold-500/40 flex flex-col justify-between group transition-all shadow-card"
            >
              <div>
                {/* Badge & Type */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono text-gold-400 bg-gold-500/10 border border-gold-500/30 font-medium">
                    {exp.badge}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    {exp.type}
                  </span>
                </div>

                {/* Role & Org */}
                <h3 className="font-serif font-bold text-lg sm:text-xl text-white mb-1 tracking-tight">
                  {exp.role}
                </h3>
                <div className="text-xs font-mono text-gold-400/90 mb-4 font-medium">
                  {exp.organization}
                </div>

                {/* Timeline & Location */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mb-6 pb-4 border-b border-white/10">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-gold-400" />
                    <span>{exp.duration}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-gold-400" />
                    <span>{exp.location}</span>
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-sans font-normal">
                  {exp.description}
                </p>

                {/* Key Points */}
                <div className="space-y-2.5 mb-6">
                  {exp.keyPoints.map((point, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300 font-sans">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded-lg text-[10px] font-mono bg-white/[0.03] border border-white/10 text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certificate Verification Trigger */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">
                  Credentials in Vault
                </span>
                {exp.verifiedCertificateId ? (
                  <button
                    onClick={() => onOpenCert(exp.verifiedCertificateId)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-gold-400 hover:underline font-semibold cursor-pointer"
                  >
                    <Award className="w-3.5 h-3.5 text-gold-400" />
                    <span>VIEW CERTIFICATE</span>
                  </button>
                ) : (
                  <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-gold-400" />
                    <span>TRAINING VERIFIED</span>
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
