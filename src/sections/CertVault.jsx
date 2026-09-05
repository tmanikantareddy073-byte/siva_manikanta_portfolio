import { useState } from 'react';
import { motion } from 'framer-motion';
import { certificates } from '../data/certificates';
import { ShieldCheck, Award, Eye, FileText, ArrowUpRight, CheckCircle2, Lock } from 'lucide-react';

export default function CertVault({ onOpenCert }) {
  const [filter, setFilter] = useState('ALL');

  const categories = ['ALL', 'Hackathon & Innovation', 'Web Development', 'Artificial Intelligence', 'Cloud & Data Engineering', 'Programming', 'Cybersecurity & Networks'];

  const filteredCerts = filter === 'ALL'
    ? certificates
    : certificates.filter(c => c.category === filter);

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-cyber-purple tracking-widest uppercase mb-2">
            <span>07</span>
            <span className="w-6 h-[1px] bg-cyber-purple" />
            <span>CREDENTIAL VERIFICATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            CERTIFICATION VAULT
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
            Proof of learning, participation and experience. Pre-configured vault with dedicated document viewer for PDF and high-resolution certificates.
          </p>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-10 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 border ${
                filter === cat
                  ? 'bg-cyber-purple/20 text-cyber-purple border-cyber-purple shadow-[0_0_20px_rgba(139,92,246,0.3)] font-semibold'
                  : 'bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="p-7 rounded-3xl glass-panel interactive-card border border-white/10 hover:border-cyber-purple/50 flex flex-col justify-between group"
            >
              <div>
                {/* Header Strip: Number & Category */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-cyber-purple font-bold tracking-wider">
                    CERT #{cert.number}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/[0.03] border border-white/10 text-slate-400">
                    {cert.category}
                  </span>
                </div>

                {/* Certificate Preview Badge */}
                <div className="relative h-32 rounded-2xl bg-gradient-to-br from-white/[0.04] to-black/40 border border-white/10 flex flex-col items-center justify-center text-center p-4 mb-5 overflow-hidden group-hover:border-cyber-purple/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-cyber-purple/10 border border-cyber-purple/30 text-cyber-purple flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-slate-300 font-semibold truncate max-w-[90%]">
                    {cert.organization}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 mt-0.5">
                    {cert.date || 'Curriculum Verified'}
                  </span>

                  {/* Hover Overlay Hint */}
                  <div className="absolute inset-0 bg-cyber-purple/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <span className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
                      <Eye className="w-4 h-4" /> PREVIEW
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="font-display font-bold text-base text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-cyber-purple transition-colors tracking-tight">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4 font-normal">
                  {cert.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={() => onOpenCert(cert.id)}
                  data-cursor="cert"
                  className="w-full py-2.5 rounded-xl btn-secondary hover:border-cyber-purple/50 text-cyber-purple text-xs font-mono font-semibold flex items-center justify-center gap-2"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>VIEW CERTIFICATE</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration Instructions Note */}
        <div className="mt-12 p-6 rounded-2xl glass-panel border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse" />
            <span>
              Document System Ready: Add files to <code className="text-cyber-cyan">public/certificates/</code> and configure path in <code className="text-cyber-cyan">src/data/certificates.js</code>.
            </span>
          </div>
          <span className="text-slate-500 text-[11px]">Zero code refactor required</span>
        </div>

      </div>
    </section>
  );
}
