import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, Award, Briefcase, CheckCircle2, ShieldCheck } from 'lucide-react';
import { experiences } from '../data/experience';
import { education } from '../data/education';
import { certificates } from '../data/certificates';
import { getAssetUrl } from '../utils/assets';

export default function CredentialsGrid({ onOpenCert }) {
  // 7 authentic verified certificates (certs 8, 9, 10 are removed)
  const validCerts = certificates.filter(
    (c) => c.id !== 'aws-data-engineering' && c.id !== 'infosys-python' && c.id !== 'cisco-cybersecurity'
  );

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-12 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* 3 COLUMNS GRID: 04 EXPERIENCE, 05 EDUCATION, 06 CERTIFICATIONS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* COLUMN 1: 04 EXPERIENCE */}
          <div className="flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-obsidian-900/90 border border-white/[0.08] shadow-card">
            <div>
              {/* Header */}
              <div className="flex items-center gap-2 text-[11px] font-mono font-bold tracking-widest text-gold-400 uppercase mb-1">
                <span>04</span>
                <span>EXPERIENCE</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-6">
                My Professional Journey
              </h3>

              {/* Timeline */}
              <div className="relative pl-6 border-l border-gold-500/30 space-y-6">
                {experiences.map((exp) => (
                  <div key={exp.id} className="relative group">
                    {/* Node Dot */}
                    <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-gold-400 border-2 border-obsidian-950 shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
                    
                    <span className="text-[10px] font-mono text-gold-400/90 font-medium block mb-0.5">
                      {exp.duration || 'Completed'}
                    </span>
                    <h4 className="text-sm font-sans font-bold text-slate-100 group-hover:text-gold-400 transition-colors">
                      {exp.role}
                    </h4>
                    <p className="text-xs text-slate-400 font-sans mt-1 leading-relaxed">
                      {exp.organization} — {exp.badge}
                    </p>
                  </div>
                ))}

                {/* Additional Milestone */}
                <div className="relative group">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-gold-400/60 border-2 border-obsidian-950" />
                  <span className="text-[10px] font-mono text-gold-400/90 font-medium block mb-0.5">
                    2022 – 2023
                  </span>
                  <h4 className="text-sm font-sans font-bold text-slate-100">
                    Project Contributor
                  </h4>
                  <p className="text-xs text-slate-400 font-sans mt-1">
                    Worked on academic engineering workflows & projects.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Action */}
            <div className="pt-6 mt-6 border-t border-white/[0.08]">
              <button
                onClick={() => onOpenCert(experiences[0].verifiedCertificateId)}
                className="w-full py-2.5 rounded-full border border-white/10 hover:border-gold-400 text-slate-300 hover:text-gold-400 text-xs font-sans font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* COLUMN 2: 05 EDUCATION */}
          <div id="education" className="flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-obsidian-900/90 border border-white/[0.08] shadow-card">
            <div>
              {/* Header */}
              <div className="flex items-center gap-2 text-[11px] font-mono font-bold tracking-widest text-gold-400 uppercase mb-1">
                <span>05</span>
                <span>EDUCATION</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-6">
                My Academic Background
              </h3>

              {/* Education Items */}
              <div className="space-y-5">
                {education.map((edu) => (
                  <div key={edu.id} className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-gold-500/30 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-gold-500/10 text-gold-400 shrink-0 mt-0.5">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-100 font-sans">
                          {edu.degree}
                        </h4>
                        <div className="text-[11px] text-gold-400 font-mono mt-0.5">
                          {edu.institution}
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400 mt-1">
                          <span>{edu.year}</span>
                          <span>•</span>
                          <span className="text-slate-300 font-semibold">{edu.percentage}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Status */}
            <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified JNTUK Records</span>
              </span>
              <span className="text-gold-400">88% Aggregate</span>
            </div>
          </div>

          {/* COLUMN 3: 06 CERTIFICATIONS */}
          <div id="certifications" className="flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-obsidian-900/90 border border-white/[0.08] shadow-card">
            <div>
              {/* Header */}
              <div className="flex items-center gap-2 text-[11px] font-mono font-bold tracking-widest text-gold-400 uppercase mb-1">
                <span>06</span>
                <span>CERTIFICATIONS</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-6">
                My Achievements
              </h3>

              {/* Verified Badges Preview */}
              <div className="space-y-3">
                {validCerts.filter(c => c.featured).map((cert) => (
                  <div
                    key={cert.id}
                    onClick={() => onOpenCert(cert.id)}
                    className="p-3.5 rounded-2xl bg-white/[0.03] hover:bg-gold-500/10 border border-white/[0.06] hover:border-gold-500/40 transition-all cursor-pointer group flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      {cert.type === 'image' && cert.file ? (
                        <div className="w-10 h-8 rounded-lg overflow-hidden border border-gold-500/40 shrink-0 bg-black">
                          <img
                            src={getAssetUrl(cert.file)}
                            alt={cert.title}
                            className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      ) : (
                        <div className="p-2 rounded-xl bg-gold-500/15 text-gold-400 shrink-0">
                          <Award className="w-4 h-4" />
                        </div>
                      )}
                      <div className="min-w-0">
                        <h4 className="text-xs font-bold text-slate-200 group-hover:text-gold-400 transition-colors font-sans truncate max-w-[170px]">
                          {cert.title}
                        </h4>
                        <div className="text-[10px] font-mono text-slate-400 truncate max-w-[170px]">
                          {cert.organization}
                        </div>
                      </div>
                    </div>

                    {cert.credlyUrl ? (
                      <span className="text-[9px] font-mono text-amber-300 px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 shrink-0">
                        CREDLY
                      </span>
                    ) : (
                      <span className="text-[9px] font-mono text-gold-400 px-1.5 py-0.5 rounded bg-gold-500/10 border border-gold-500/20 shrink-0">
                        VERIFIED
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Action: View Certifications Button */}
            <div className="pt-6 mt-6 border-t border-white/[0.08]">
              <button
                onClick={() => onOpenCert('ibm-ai-fundamentals')}
                className="w-full py-2.5 rounded-full btn-gold text-xs font-sans font-semibold flex items-center justify-center gap-2 shadow-sm"
              >
                <span>View Certifications</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
