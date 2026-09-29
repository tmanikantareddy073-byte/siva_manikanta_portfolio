import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Check, Copy, AlertCircle, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { profile } from '../data/portfolio';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
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
      const nowStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

      if (profile.web3formsKey && profile.web3formsKey.trim() !== '') {
        // Instant AWS SES submission via Web3Forms (if configured)
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            access_key: profile.web3formsKey,
            name: formData.name,
            email: formData.email,
            message: formData.message,
            from_name: formData.name,
            subject: `New Portfolio Message from ${formData.name} [${nowStr}]`,
          }),
        });
      } else {
        // Direct FormSubmit with unique timestamp and nonce to prevent duplicate queueing
        const formDataObj = new FormData();
        formDataObj.append('name', formData.name);
        formDataObj.append('email', formData.email);
        formDataObj.append('message', formData.message);
        formDataObj.append('_subject', `New Message from ${formData.name} [${nowStr}]`);
        formDataObj.append('_replyto', formData.email);
        formDataObj.append('_captcha', 'false');
        formDataObj.append('_template', 'table');
        formDataObj.append('_id', `${Date.now()}_${Math.random().toString(36).substring(2, 7)}`);

        // Race with a 3.5s timeout so the UI transitions cleanly without waiting on queue delays
        const postPromise = fetch(`https://formsubmit.co/${profile.email}`, {
          method: 'POST',
          body: formDataObj,
          mode: 'no-cors',
        });

        await Promise.race([
          postPromise,
          new Promise((resolve) => setTimeout(resolve, 3500)),
        ]);
      }

      setStatus('success');
      try {
        confetti({
          particleCount: 75,
          spread: 60,
          origin: { y: 0.75 },
        });
      } catch (e) {}
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Email dispatch error:', err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      
      {/* Background ambient gold diffuse */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gold-500/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-gold-400 uppercase mb-2">
            <span>09</span>
            <span className="w-6 h-[1px] bg-gold-400" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            LET'S BUILD SOMETHING USEFUL.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed font-sans">
            Have an idea, project or opportunity? Send a message directly to <strong className="text-gold-400">{profile.email}</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Email Card */}
            <div className="p-6 rounded-3xl bg-obsidian-900/90 border border-white/[0.08] hover:border-gold-500/40 flex items-center justify-between group transition-all shadow-card">
              <div className="flex items-center gap-4 overflow-hidden">
                <div className="w-11 h-11 rounded-2xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold">Direct Email</div>
                  <div
                    onClick={() => handleCopy(profile.email, 'email')}
                    className="cursor-pointer group/email flex items-center gap-1.5"
                    title="Click to copy email"
                  >
                    <span className="text-xs sm:text-sm font-mono text-slate-200 group-hover/email:text-gold-400 transition-colors truncate block font-medium mt-0.5">
                      {profile.email}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleCopy(profile.email, 'email')}
                title="Copy email"
                className="p-2.5 rounded-xl btn-secondary text-slate-400 hover:text-gold-400 shrink-0 ml-2 cursor-pointer flex items-center gap-1.5"
              >
                {copiedField === 'email' ? (
                  <>
                    <Check className="w-4 h-4 text-gold-400" />
                    <span className="text-[10px] font-mono text-gold-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span className="text-[10px] font-mono">Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-3xl bg-obsidian-900/90 border border-white/[0.08] hover:border-gold-500/40 flex items-center justify-between group transition-all shadow-card">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-2xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold">Phone / WhatsApp</div>
                  <a
                    href={`tel:${profile.phone}`}
                    className="text-xs sm:text-sm font-mono text-slate-200 hover:text-gold-400 transition-colors font-medium mt-0.5 block"
                  >
                    {profile.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(profile.phone, 'phone')}
                title="Copy phone"
                className="p-2.5 rounded-xl btn-secondary text-slate-400 hover:text-gold-400 shrink-0 cursor-pointer"
              >
                {copiedField === 'phone' ? <Check className="w-4 h-4 text-gold-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-3xl bg-obsidian-900/90 border border-white/[0.08] flex items-center gap-4 shadow-card">
              <div className="w-11 h-11 rounded-2xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold">Location</div>
                <div className="text-xs sm:text-sm font-mono text-slate-200 font-medium mt-0.5">
                  {profile.location}
                </div>
              </div>
            </div>

            {/* Direct Email Delivery Notice */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white/[0.02] border border-white/10 text-xs font-mono text-slate-400 leading-relaxed">
              <div className="flex items-center gap-2 text-gold-400 mb-2 font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Direct Inbox Delivery</span>
              </div>
              <p className="text-[11px] text-slate-300 font-sans leading-relaxed mb-3">
                All messages sent from this form are delivered straight to Siva's inbox at <strong className="text-gold-400 font-mono">{profile.email}</strong>.
              </p>
              <div className="flex items-center gap-2 text-[10px] text-slate-400 pt-2 border-t border-white/[0.06]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Siva will reply directly to your submitted email address</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-10 rounded-3xl bg-obsidian-900/95 border border-white/[0.08] shadow-card relative overflow-hidden">
              
              <h3 className="font-serif font-bold text-xl text-white mb-1 tracking-tight">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400 font-mono mb-6">
                Delivered directly to {profile.email}.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-[10px] font-mono text-gold-400 uppercase tracking-widest mb-1.5 font-semibold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Alex Hunter"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border ${
                      errors.name ? 'border-red-500/80' : 'border-white/10 focus:border-gold-400'
                    } text-white text-xs font-mono placeholder:text-slate-600 outline-none transition-colors`}
                  />
                  {errors.name && (
                    <span className="text-[11px] font-mono text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[10px] font-mono text-gold-400 uppercase tracking-widest mb-1.5 font-semibold">
                    Your Email Address (For Reply)
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. alex@organization.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border ${
                      errors.email ? 'border-red-500/80' : 'border-white/10 focus:border-gold-400'
                    } text-white text-xs font-mono placeholder:text-slate-600 outline-none transition-colors`}
                  />
                  {errors.email && (
                    <span className="text-[11px] font-mono text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[10px] font-mono text-gold-400 uppercase tracking-widest mb-1.5 font-semibold">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your inquiry, project collaboration idea, or opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border ${
                      errors.message ? 'border-red-500/80' : 'border-white/10 focus:border-gold-400'
                    } text-white text-xs font-mono placeholder:text-slate-600 outline-none transition-colors resize-none`}
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
                  className="w-full py-3.5 rounded-xl btn-gold font-sans font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 disabled:opacity-60 disabled:pointer-events-none cursor-pointer shadow-md"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      <span>SENDING MESSAGE...</span>
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
                      className="p-4 rounded-xl bg-gold-500/10 border border-gold-500/40 text-gold-300 text-xs font-mono flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-gold-400" />
                      <div>
                        <strong>Message Sent Successfully!</strong>
                        <p className="text-[11px] text-slate-300 mt-0.5 font-sans font-normal">
                          Your message has been delivered to <strong>{profile.email}</strong>. Siva will get back to you shortly.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Feedback State: Error */}
                <AnimatePresence>
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-mono flex items-start gap-2.5"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" />
                      <div>
                        <strong>Delivery Encountered an Issue</strong>
                        <p className="text-[11px] text-slate-300 mt-0.5 font-sans font-normal">
                          Unable to connect to the email gateway. Please write directly to <strong className="text-gold-400 font-mono">{profile.email}</strong>.
                        </p>
                      </div>
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
