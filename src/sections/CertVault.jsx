import { useState } from 'react';
import { motion } from 'framer-motion';
import { certificates } from '../data/certificates';
import { ShieldCheck, Award, Eye, FileText, ArrowUpRight, CheckCircle2, ExternalLink, Sparkles } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

export default function CertVault({ onOpenCert }) {
  const [filter, setFilter] = useState('ALL');

  // Categories present among the 7 authentic certificates
  const categories = [
    'ALL',
    'Artificial Intelligence',
    'Web Development',
    'Programming',
    'Professional Skills',
    'Engineering & Problem Solving',
    'Hackathon & Innovation'
  ];

  // Certs 8, 9, 10 are strictly excluded; 1-7 are fully present
  const validCerts = certificates.filter(
    (c) => c.id !== 'aws-data-engineering' && c.id !== 'infosys-python' && c.id !== 'cisco-cybersecurity'
  );

  const filteredCerts = filter === 'ALL'
    ? validCerts
    : validCerts.filter(c => c.category === filter);

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      
      {/* Background ambient gold diffuse */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold-500/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-gold-400 uppercase mb-2">
            <span>07</span>
            <span className="w-6 h-[1px] bg-gold-400" />
            <span>CREDENTIAL VERIFICATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            CERTIFICATION VAULT
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed font-sans">
            Authentic proof of learning, internships, and competitive technical evaluations. Direct high-resolution document viewer with Credly badge validation.
          </p>
        </div>

        {/* Filter Badges in Gold Theme */}
        <div className="flex flex-wrap items-center gap-2 mb-10 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 border cursor-pointer ${
                filter === cat
                  ? 'bg-gold-500/20 text-gold-300 border-gold-400 shadow-glow-gold font-semibold'
                  : 'bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 border-white/10 hover:border-gold-500/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certificate Cards Grid (All 7 Authentic Certifications) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert, idx) => {
            const hasDocument = Boolean(cert.file && cert.file.trim() !== '');

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-7 rounded-3xl bg-obsidian-900/90 border border-white/[0.08] hover:border-gold-500/50 flex flex-col justify-between group relative overflow-hidden transition-all shadow-card"
              >
                <div>
                  {/* Header Strip: Number & Category & Verified Status */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-gold-400 font-bold tracking-wider">
                      CERT #{cert.number}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {hasDocument ? (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-gold-500/15 text-gold-300 border border-gold-500/30 flex items-center gap-1 font-semibold">
                          <CheckCircle2 className="w-2.5 h-2.5 text-gold-400" />
                          <span>DOCUMENT VERIFIED</span>
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/[0.03] border border-white/10 text-slate-400">
                          {cert.category}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Certificate Preview Badge Box */}
                  <div
                    onClick={() => onOpenCert(cert.id)}
                    className="relative h-44 rounded-2xl bg-[#0c0d12] border border-white/10 flex flex-col items-center justify-center text-center mb-5 overflow-hidden group-hover:border-gold-500/60 transition-all cursor-pointer shadow-md"
                  >
                    {cert.type === 'image' && cert.file ? (
                      <div className="w-full h-full relative">
                        <img
                          src={getAssetUrl(cert.file)}
                          alt={cert.title}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between pointer-events-none">
                          <span className="text-[10px] font-mono font-medium text-gold-300 bg-black/80 px-2 py-0.5 rounded border border-gold-500/30 backdrop-blur-sm truncate max-w-[70%]">
                            {cert.organization}
                          </span>
                          <span className="text-[10px] font-mono text-slate-300 bg-black/80 px-2 py-0.5 rounded border border-white/10 backdrop-blur-sm shrink-0">
                            {cert.date}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="p-4 flex flex-col items-center justify-center">
                        <div className="w-11 h-11 rounded-xl bg-gold-500/15 border border-gold-500/30 text-gold-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                          <Award className="w-5 h-5" />
                        </div>

                        <span className="text-xs font-mono text-slate-200 font-semibold truncate max-w-[92%]">
                          {cert.organization}
                        </span>

                        <span className="text-[10px] font-mono text-slate-400 mt-1">
                          {cert.date ? `Issued ${cert.date}` : 'Curriculum Verified'}
                        </span>

                        {/* Credly ribbon if verified on Credly */}
                        {cert.credlyUrl && (
                          <div className="mt-1.5 flex items-center gap-1 px-2 py-0.5 rounded text-[9px] font-mono bg-gold-500/15 text-gold-300 border border-gold-400/30">
                            <ShieldCheck className="w-2.5 h-2.5 text-gold-400" />
                            <span>CREDLY BADGE</span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Hover Overlay Hint */}
                    <div className="absolute inset-0 bg-gold-500/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                      <span className="text-xs font-mono font-bold text-white flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/80 border border-gold-400/80 shadow-glow-gold">
                        <Eye className="w-4 h-4 text-gold-400" /> PREVIEW DOCUMENT
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif font-bold text-base text-white mb-2 leading-snug group-hover:text-gold-400 transition-colors tracking-tight">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4 font-sans font-normal">
                    {cert.description}
                  </p>

                  {/* Associated Skills Tags */}
                  {cert.skills && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {cert.skills.map((s) => (
                        <span
                          key={s}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] border border-white/10 text-slate-400"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Action Strip */}
                <div className="pt-4 border-t border-white/10 flex items-center gap-2">
                  <button
                    onClick={() => onOpenCert(cert.id)}
                    className="flex-1 py-2.5 rounded-xl btn-secondary hover:border-gold-500 text-gold-400 text-xs font-mono font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{hasDocument ? 'VIEW CERTIFICATE' : 'VIEW DETAILS'}</span>
                  </button>

                  {cert.credlyUrl && (
                    <a
                      href={cert.credlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Verify Credly Badge"
                      className="p-2.5 rounded-xl bg-gold-500/10 hover:bg-gold-500/20 border border-gold-400/30 text-gold-300 transition-colors shrink-0"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Integration Status Footer Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-obsidian-900/90 border border-gold-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span>
              Certified Archival System Active: <strong className="text-white">6 Authentic Documents + 1 Hackathon Credential</strong> Loaded with Credly & Institutional Verification.
            </span>
          </div>
          <span className="text-gold-400 text-[11px] font-mono font-semibold">
            100% Client-Side Fast Preview
          </span>
        </div>

      </div>
    </section>
  );
}
