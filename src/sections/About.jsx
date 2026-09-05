import { motion } from 'framer-motion';
import { User, BookOpen, Hammer, Compass, Sparkles, MapPin, Mail, Phone, CheckCircle2 } from 'lucide-react';
import { profile } from '../data/portfolio';

export default function About() {
  const blocks = [
    {
      icon: User,
      title: 'WHO I AM',
      color: 'text-cyber-cyan',
      borderColor: 'border-cyber-cyan/30',
      tag: 'IDENTITY',
      content:
        'A dedicated Computer Science student currently pursuing B.Tech in CSM (Artificial Intelligence and Machine Learning) with a strong foundation built through a Diploma in Computer Engineering (87%). Driven by hands-on engineering, clarity in fundamentals, and writing clean, maintainable software.',
    },
    {
      icon: BookOpen,
      title: 'WHAT I AM LEARNING',
      color: 'text-cyber-purple',
      borderColor: 'border-cyber-purple/30',
      tag: 'KNOWLEDGE',
      content:
        'Actively deepening my knowledge in Python systems programming, MERN stack web architectures, data structures, and the practical implementation of AI/ML concepts. I focus on understanding principles thoroughly rather than chasing buzzwords.',
    },
    {
      icon: Hammer,
      title: 'WHAT I BUILD',
      color: 'text-cyber-emerald',
      borderColor: 'border-cyber-emerald/30',
      tag: 'EXECUTION',
      content:
        'Functional web applications and intelligent utility prototypes. From real-time digital attendance workflows to generative UI orchestration prototypes and predictive Python calculators, I prioritize solving tangible workflow problems.',
    },
    {
      icon: Compass,
      title: 'CAREER DIRECTION',
      color: 'text-blue-400',
      borderColor: 'border-blue-400/30',
      tag: 'OBJECTIVE',
      content:
        'Aiming towards a career in software engineering, full-stack product development, and applied AI systems. I seek opportunities to collaborate on impactful engineering problems, learn alongside experienced teams, and build durable software solutions.',
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-cyber-cyan tracking-widest uppercase mb-2">
            <span>01</span>
            <span className="w-6 h-[1px] bg-cyber-cyan" />
            <span>IDENTITY MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            ABOUT ME
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            {profile.aboutText}
          </p>
        </div>

        {/* Interactive Modular Story Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blocks.map((block, idx) => {
            const Icon = block.icon;
            return (
              <motion.div
                key={block.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-7 sm:p-8 rounded-3xl glass-panel interactive-card border border-white/10 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl bg-white/[0.03] border ${block.borderColor} ${block.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-display font-bold text-sm tracking-wider text-slate-900 dark:text-slate-100">
                        {block.title}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 px-2 py-0.5 rounded-full border border-white/5 bg-white/[0.02]">
                      {block.tag}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {block.content}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] font-mono text-slate-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyber-cyan opacity-80" />
                  <span>Authentic Profile Baseline</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Location & Contact Strip */}
        <div className="mt-8 p-5 sm:p-6 rounded-2xl glass-panel border border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2.5">
            <MapPin className="w-4 h-4 text-cyber-cyan" />
            <span>Based in: <strong className="text-slate-800 dark:text-slate-200">{profile.location}</strong></span>
          </div>
          <div className="flex items-center gap-2.5">
            <Mail className="w-4 h-4 text-cyber-purple" />
            <span>Email: <strong className="text-slate-800 dark:text-slate-200">{profile.email}</strong></span>
          </div>
          <div className="flex items-center gap-2.5">
            <Phone className="w-4 h-4 text-cyber-emerald" />
            <span>Phone: <strong className="text-slate-800 dark:text-slate-200">{profile.phone}</strong></span>
          </div>
        </div>

      </div>
    </section>
  );
}
