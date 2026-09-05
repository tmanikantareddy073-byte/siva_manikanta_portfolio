import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ZoomOut, RotateCcw, Maximize, Download, FileText, CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react';

export default function CertModal({ cert, onClose }) {
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!cert) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
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

  const hasDocument = Boolean(cert.file && cert.file.trim() !== '');

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
          className={`relative w-full max-w-5xl max-h-[92vh] flex flex-col glass-panel border border-white/15 dark:border-white/15 rounded-2xl shadow-2xl overflow-hidden z-10 text-slate-900 dark:text-slate-100 ${
            isFullscreen ? 'h-full max-h-screen rounded-none' : ''
          }`}
        >
          {/* Top Control Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 sm:p-5 border-b border-white/10 bg-white/5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyber-purple/10 border border-cyber-purple/30 flex items-center justify-center text-cyber-purple">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-tight">
                  {cert.title}
                </h3>
                <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  Issued by: {cert.organization} {cert.date ? `• ${cert.date}` : ''}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {hasDocument && (
                <>
                  <button
                    onClick={handleZoomOut}
                    title="Zoom Out"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 transition-colors"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-mono text-slate-400 min-w-[40px] text-center">
                    {Math.round(zoom * 100)}%
                  </span>
                  <button
                    onClick={handleZoomIn}
                    title="Zoom In"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 transition-colors"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleResetZoom}
                    title="Reset Zoom"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={toggleFullscreen}
                    title="Toggle Fullscreen"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 transition-colors hidden sm:block"
                  >
                    <Maximize className="w-4 h-4" />
                  </button>
                  <a
                    href={cert.file}
                    download
                    title="Download Certificate"
                    className="p-2 rounded-lg bg-cyber-cyan/10 hover:bg-cyber-cyan/20 border border-cyber-cyan/40 text-cyber-cyan transition-colors"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                </>
              )}

              <button
                onClick={onClose}
                aria-label="Close viewer"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white border border-white/15 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Document Viewer Body */}
          <div className="flex-1 overflow-auto p-4 sm:p-8 flex items-center justify-center bg-black/40 min-h-[350px] sm:min-h-[480px]">
            {hasDocument ? (
              <div
                style={{ transform: `scale(${zoom})`, transformOrigin: 'center center' }}
                className="transition-transform duration-200 w-full h-full flex items-center justify-center"
              >
                {cert.type === 'pdf' ? (
                  <iframe
                    src={cert.file}
                    title={cert.title}
                    className="w-full h-[600px] rounded-xl border border-white/10 bg-white shadow-2xl"
                  />
                ) : (
                  <img
                    src={cert.file}
                    alt={cert.title}
                    className="max-h-[600px] w-auto max-w-full rounded-xl border border-white/10 object-contain shadow-2xl"
                  />
                )}
              </div>
            ) : (
              /* Awaiting Document Upload Card */
              <div className="max-w-md w-full p-8 rounded-2xl glass-panel border border-cyber-purple/30 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyber-purple via-cyber-cyan to-cyber-purple" />
                <div className="w-14 h-14 rounded-2xl bg-cyber-purple/15 border border-cyber-purple/40 text-cyber-purple flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-7 h-7" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider bg-cyber-purple/10 text-cyber-purple border border-cyber-purple/30 mb-3">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>AUTHENTIC CERTIFICATE SLOT</span>
                </div>
                <h4 className="text-base sm:text-lg font-bold font-display text-white mb-2">
                  {cert.title}
                </h4>
                <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                  {cert.description}
                </p>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-left space-y-2 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2 text-cyber-cyan">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span className="font-semibold">Ready for Document Addition:</span>
                  </div>
                  <p className="text-[11px] text-slate-400 pl-5">
                    1. Save file to <code className="text-cyber-cyan">public/certificates/</code>
                  </p>
                  <p className="text-[11px] text-slate-400 pl-5">
                    2. Add path in <code className="text-cyber-cyan">src/data/certificates.js</code>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Footer Metadata */}
          <div className="p-3 sm:p-4 border-t border-white/10 bg-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>Certificate Ref: {cert.id}</span>
            <span>Document Architecture Ready</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
