import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, ExternalLink, CheckCircle2, AlertCircle } from 'lucide-react';
import { profile } from '../data/portfolio';

export default function ResumeModal({ isOpen, onClose }) {
  const [fileExists, setFileExists] = useState(true);
  const [checking, setChecking] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    // Verify resume file status
    fetch(profile.resume.filePath)
      .then(res => {
        setFileExists(res.ok);
      })
      .catch(() => {
        setFileExists(true); // fallback to true
      });

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9996] flex items-center justify-center p-3 sm:p-6 md:p-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 28, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] flex flex-col glass-panel border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 text-slate-100"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyber-cyan/15 border border-cyber-cyan/40 text-cyber-cyan flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-base sm:text-lg text-white">
                  CURRICULUM VITAE / RESUME
                </h3>
                <p className="text-xs font-mono text-slate-400">
                  {profile.displayName} • Computer Science Student
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={profile.resume.filePath}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl btn-secondary text-slate-300 hover:text-white transition-colors"
                title="Open in new tab"
              >
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={profile.resume.filePath}
                download="Siva_Manikanta_Reddy_Resume.pdf"
                className="px-4 py-2 rounded-xl btn-primary text-slate-950 text-xs font-mono font-bold inline-flex items-center gap-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>DOWNLOAD PDF</span>
              </a>

              <button
                onClick={onClose}
                className="p-2 rounded-xl btn-secondary text-slate-300 hover:text-white transition-colors ml-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center bg-black/40 min-h-[460px]">
            {fileExists ? (
              <object
                data={profile.resume.filePath}
                type="application/pdf"
                className="w-full h-[650px] rounded-2xl border border-white/10 bg-white shadow-2xl"
              >
                <iframe
                  src={profile.resume.filePath}
                  title="Siva Manikanta Reddy Resume"
                  className="w-full h-[650px] rounded-2xl border border-white/10 bg-white shadow-2xl"
                >
                  <p className="p-6 text-center text-xs font-mono text-slate-300">
                    Your browser does not support inline PDF viewing.{' '}
                    <a
                      href={profile.resume.filePath}
                      download="Siva_Manikanta_Reddy_Resume.pdf"
                      className="text-cyber-cyan underline"
                    >
                      Download the PDF
                    </a>{' '}
                    to view it.
                  </p>
                </iframe>
              </object>
            ) : (
              <div className="max-w-md w-full p-8 rounded-2xl glass-panel border border-cyber-cyan/30 text-center">
                <div className="w-14 h-14 rounded-2xl bg-cyber-cyan/15 border border-cyber-cyan/40 text-cyber-cyan flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold font-display text-white mb-2">
                  Resume Ready for Download
                </h4>
                <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                  You can download the compiled resume PDF below.
                </p>
                <a
                  href={profile.resume.filePath}
                  download="Siva_Manikanta_Reddy_Resume.pdf"
                  className="px-6 py-2.5 rounded-xl btn-primary text-xs font-mono font-bold inline-flex items-center gap-2 text-slate-950"
                >
                  <Download className="w-4 h-4" />
                  <span>DOWNLOAD PDF NOW</span>
                </a>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
