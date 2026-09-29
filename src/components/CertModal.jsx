import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ZoomOut, RotateCcw, Maximize, Download, Award, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { getAssetUrl, downloadFile } from '../utils/assets';

export default function CertModal({ cert, onClose }) {
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!cert) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === '+' || e.key === '=') setZoom(prev => Math.min(prev + 0.2, 2.5));
      if (e.key === '-') setZoom(prev => Math.max(prev - 0.2, 0.5));
      if (e.key === '0') setZoom(1);
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [cert, onClose]);

  if (!cert) return null;

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.25, 0.5));
  const handleResetZoom = () => setZoom(1);

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  const hasDocument = Boolean(cert?.file && cert.file.trim() !== '');
  const documentUrl = hasDocument ? getAssetUrl(cert.file) : '';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9995] flex items-center justify-center p-2 sm:p-4 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 28, stiffness: 300 }}
          className={`relative w-full max-w-5xl max-h-[94vh] flex flex-col bg-obsidian-900/98 border border-gold-500/35 rounded-3xl shadow-2xl overflow-hidden z-10 text-slate-100 ${
            isFullscreen ? 'fixed inset-2 max-w-none max-h-none rounded-2xl' : ''
          }`}
        >
          {/* Top Control Bar */}
          <div className="flex items-center justify-between p-3.5 sm:p-5 border-b border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-gold-500/15 border border-gold-500/40 text-gold-400 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-serif font-bold text-sm sm:text-base text-white truncate">
                    {cert.title}
                  </h3>
                  {cert.credentialId && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-gold-500/15 text-gold-300 border border-gold-500/30">
                      ID: {cert.credentialId}
                    </span>
                  )}
                </div>
                <p className="text-xs font-mono text-slate-400 truncate mt-0.5">
                  {cert.organization} {cert.date ? `• ${cert.date}` : ''}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              {/* Credly Verification Link */}
              {cert.credlyUrl && (
                <a
                  href={cert.credlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Verify on Credly"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gold-500/15 hover:bg-gold-500/25 border border-gold-400/40 text-gold-300 text-xs font-mono font-medium transition-colors"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                  <span>CREDLY BADGE</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              )}

              {hasDocument && (
                <>
                  <div className="hidden sm:flex items-center gap-1 bg-white/5 border border-white/10 rounded-lg p-1 mr-1">
                    <button
                      onClick={handleZoomOut}
                      title="Zoom Out (-)"
                      className="p-1 hover:bg-white/10 rounded text-slate-300 transition-colors"
                    >
                      <ZoomOut className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[11px] font-mono px-1.5 text-slate-300">
                      {Math.round(zoom * 100)}%
                    </span>
                    <button
                      onClick={handleZoomIn}
                      title="Zoom In (+)"
                      className="p-1 hover:bg-white/10 rounded text-slate-300 transition-colors"
                    >
                      <ZoomIn className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={handleResetZoom}
                      title="Reset Zoom (0)"
                      className="p-1 hover:bg-white/10 rounded text-slate-400 transition-colors ml-0.5"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <a
                    href={documentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open Document in New Tab"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 transition-colors hidden sm:inline-flex"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <button
                    onClick={toggleFullscreen}
                    title="Toggle Fullscreen"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 transition-colors hidden sm:block"
                  >
                    <Maximize className="w-4 h-4" />
                  </button>

                  <a
                    href={documentUrl}
                    download={`${cert.id || 'certificate'}.${cert.type === 'pdf' ? 'pdf' : 'jpg'}`}
                    onClick={(e) => {
                      e.preventDefault();
                      downloadFile(documentUrl, `${cert.id || 'certificate'}.${cert.type === 'pdf' ? 'pdf' : 'jpg'}`);
                    }}
                    title="Download Certificate File"
                    className="p-2 rounded-lg bg-gold-500/20 hover:bg-gold-500/30 border border-gold-400/50 text-gold-300 transition-colors cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                </>
              )}

              <button
                onClick={onClose}
                aria-label="Close viewer"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white border border-white/15 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Document Viewer Body */}
          <div className="flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center bg-black/50 min-h-[380px] sm:min-h-[520px]">
            {hasDocument ? (
              <div
                style={{ transform: `scale(${zoom})`, transformOrigin: 'center center' }}
                className="transition-transform duration-200 w-full h-full flex items-center justify-center max-w-full"
              >
                {cert.type === 'pdf' ? (
                  <iframe
                    src={documentUrl}
                    title={cert.title}
                    className="w-full h-[640px] rounded-xl border border-white/10 bg-white shadow-2xl"
                  />
                ) : (
                  <img
                    src={documentUrl}
                    alt={cert.title}
                    className="max-h-[640px] w-auto max-w-full rounded-xl border border-white/10 object-contain shadow-2xl bg-white/5"
                  />
                )}
              </div>
            ) : (
              /* Awaiting Document Slot */
              <div className="max-w-md w-full p-8 rounded-2xl bg-obsidian-900 border border-gold-500/30 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-500 via-amber-300 to-gold-500" />
                <div className="w-14 h-14 rounded-2xl bg-gold-500/15 border border-gold-500/40 text-gold-400 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-7 h-7" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider bg-gold-500/10 text-gold-400 border border-gold-500/30 mb-3">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>CURRICULUM RECORD READY</span>
                </div>
                <h4 className="text-base sm:text-lg font-bold font-serif text-white mb-2">
                  {cert.title}
                </h4>
                <p className="text-xs text-slate-300 mb-6 leading-relaxed font-sans">
                  {cert.description}
                </p>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-left space-y-2 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2 text-gold-400">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span className="font-semibold">Integrated Document Archival:</span>
                  </div>
                  <p className="text-[11px] text-slate-400 pl-5">
                    1. Save file to <code className="text-gold-400">public/certificates/</code>
                  </p>
                  <p className="text-[11px] text-slate-400 pl-5">
                    2. Link path in <code className="text-gold-400">src/data/certificates.js</code>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Footer Metadata Strip */}
          <div className="p-3 sm:p-4 border-t border-white/10 bg-white/5 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-slate-400">
            <div className="flex items-center gap-3">
              <span>REF: {cert.id}</span>
              {cert.credentialId && (
                <span className="text-gold-400">• CREDENTIAL: {cert.credentialId}</span>
              )}
            </div>
            <div className="flex items-center gap-3">
              {cert.credlyUrl && (
                <a
                  href={cert.credlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-400 hover:underline flex items-center gap-1"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>View Official Credly Badge</span>
                </a>
              )}
              <span>AUTHENTIC DOCUMENT PREVIEW</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
