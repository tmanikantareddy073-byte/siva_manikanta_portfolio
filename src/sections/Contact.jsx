import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Check, Copy, AlertCircle, Sparkles, CheckCircle2, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { profile } from '../data/portfolio';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'fallback'
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter a message';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters';
    }
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus('loading');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _replyto: formData.email,
          _captcha: 'false',
        }),
      });

      const data = await response.json();

      if (response.ok || data.success === 'true') {
        setStatus('success');
        try {
          confetti({
            particleCount: 75,
            spread: 60,
            origin: { y: 0.75 },
          });
        } catch (e) {}
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('fallback');
      }
    } catch (err) {
      console.warn('FormSubmit network error, activating fallback:', err);
      setStatus('fallback');
    }
  };

  const handleOpenMailClient = () => {
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Hi Siva,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-cyber-cyan tracking-widest uppercase mb-2">
            <span>09</span>
            <span className="w-6 h-[1px] bg-cyber-cyan" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            LET'S BUILD SOMETHING USEFUL.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
            Have an idea, project or opportunity? Send a message directly to <strong className="text-cyber-cyan">{profile.email}</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Email Card */}
            <div className="p-6 rounded-3xl glass-panel interactive-card border border-white/10 flex items-center justify-between group">
              <div className="flex items-center gap-4 overflow-hidden">
                <div className="w-11 h-11 rounded-2xl bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold">Direct Email</div>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-xs sm:text-sm font-mono text-slate-800 dark:text-slate-200 hover:text-cyber-cyan transition-colors truncate block font-medium mt-0.5"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(profile.email, 'email')}
                title="Copy email"
                className="p-2.5 rounded-xl btn-secondary text-slate-400 hover:text-white shrink-0 ml-2"
              >
                {copiedField === 'email' ? <Check className="w-4 h-4 text-cyber-emerald" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-3xl glass-panel interactive-card border border-white/10 flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-2xl bg-cyber-purple/10 border border-cyber-purple/30 text-cyber-purple flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold">Phone / WhatsApp</div>
                  <a
                    href={`tel:${profile.phone}`}
                    className="text-xs sm:text-sm font-mono text-slate-800 dark:text-slate-200 hover:text-cyber-purple transition-colors font-medium mt-0.5 block"
                  >
                    {profile.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(profile.phone, 'phone')}
                title="Copy phone"
                className="p-2.5 rounded-xl btn-secondary text-slate-400 hover:text-white shrink-0"
              >
                {copiedField === 'phone' ? <Check className="w-4 h-4 text-cyber-emerald" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-3xl glass-panel border border-white/10 flex items-center gap-4">
              <div className="w-11 h-11 rounded-2xl bg-cyber-emerald/10 border border-cyber-emerald/30 text-cyber-emerald flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold">Location</div>
                <div className="text-xs sm:text-sm font-mono text-slate-800 dark:text-slate-200 font-medium mt-0.5">
                  {profile.location}
                </div>
              </div>
            </div>

            {/* Direct Send via Mail App Trigger */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white/[0.02] border border-white/10 text-xs font-mono text-slate-400 leading-relaxed">
              <div className="flex items-center gap-2 text-cyber-cyan mb-2 font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>Instant Mail Client Option</span>
              </div>
              <p className="text-[11px] text-slate-400 mb-3">
                Prefer using your default email program? Click below to compose directly to {profile.email}.
              </p>
              <a
                href={`mailto:${profile.email}?subject=Portfolio%20Inquiry%20from%20Website`}
                className="w-full py-2.5 px-4 rounded-xl btn-secondary text-xs font-mono text-slate-200 flex items-center justify-center gap-2"
              >
                <Mail className="w-3.5 h-3.5 text-cyber-cyan" />
                <span>OPEN IN GMAIL / OUTLOOK</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-10 rounded-3xl glass-panel border border-white/10 shadow-card relative overflow-hidden">
              
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-1 tracking-tight">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-500 font-mono mb-6">
                Delivered directly to {profile.email}.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1.5 font-semibold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Alex Hunter"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border ${
                      errors.name ? 'border-red-500/80' : 'border-white/10 focus:border-cyber-cyan'
                    } text-slate-900 dark:text-white text-xs font-mono placeholder:text-slate-600 outline-none transition-colors`}
                  />
                  {errors.name && (
                    <span className="text-[11px] font-mono text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1.5 font-semibold">
                    Your Email Address (For Reply)
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. alex@organization.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border ${
                      errors.email ? 'border-red-500/80' : 'border-white/10 focus:border-cyber-cyan'
                    } text-slate-900 dark:text-white text-xs font-mono placeholder:text-slate-600 outline-none transition-colors`}
                  />
                  {errors.email && (
                    <span className="text-[11px] font-mono text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1.5 font-semibold">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your inquiry, project collaboration idea, or opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border ${
                      errors.message ? 'border-red-500/80' : 'border-white/10 focus:border-cyber-cyan'
                    } text-slate-900 dark:text-white text-xs font-mono placeholder:text-slate-600 outline-none transition-colors resize-none`}
                  />
                  {errors.message && (
                    <span className="text-[11px] font-mono text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3.5 rounded-xl btn-primary font-mono font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 disabled:opacity-60 disabled:pointer-events-none"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      <span>DISPATCHING TO INBOX...</span>
                    </>
                  ) : (
                    <>
                      <span>SEND MESSAGE TO SIVA</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>

                {/* Feedback State: Success */}
                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 rounded-xl bg-cyber-emerald/10 border border-cyber-emerald/30 text-cyber-emerald text-xs font-mono flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                      <div>
                        <strong>Message Sent Successfully!</strong>
                        <p className="text-[11px] text-slate-300 mt-0.5 font-normal">
                          Your message has been delivered to <strong>{profile.email}</strong>. Siva will get back to you shortly.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Feedback State: Fallback */}
                <AnimatePresence>
                  {status === 'fallback' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 rounded-xl bg-cyber-cyan/10 border border-cyber-cyan/30 text-slate-200 text-xs font-mono space-y-2"
                    >
                      <div className="flex items-center gap-2 text-cyber-cyan font-semibold">
                        <Mail className="w-4 h-4" />
                        <span>Ready to Send via Email Client</span>
                      </div>
                      <p className="text-[11px] text-slate-300 font-normal">
                        To guarantee instant delivery, click below to open your message directly in your mail application:
                      </p>
                      <button
                        type="button"
                        onClick={handleOpenMailClient}
                        className="w-full py-2.5 rounded-xl btn-primary text-slate-950 text-xs font-mono font-bold flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>CLICK TO SEND IN GMAIL / OUTLOOK</span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
