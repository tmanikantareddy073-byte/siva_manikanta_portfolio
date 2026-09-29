import { motion } from 'framer-motion';
import {
  User,
  BookOpen,
  Hammer,
  Compass,
  MapPin,
  Mail,
  Phone,
  CheckCircle2,
  Lightbulb,
  Zap,
  Users,
  ArrowRight
} from 'lucide-react';
import { profile } from '../data/portfolio';

export default function About() {
  const highlights = [
    { title: 'Problem Solver', subtitle: 'Finds practical solutions', icon: Lightbulb },
    { title: 'Quick Learner', subtitle: 'Adapts to new technologies', icon: Zap },
    { title: 'Team Player', subtitle: 'Builds great things together', icon: Users },
    { title: 'Tech Enthusiast', subtitle: 'Always exploring', icon: Compass },
  ];

  const blocks = [
    {
      icon: User,
      title: 'WHO I AM',
      tag: 'IDENTITY',
      content:
        'A dedicated Computer Science student currently pursuing B.Tech in CSM (Artificial Intelligence and Machine Learning) with a strong foundation built through a Diploma in Computer Engineering (87%). Driven by hands-on engineering, clarity in fundamentals, and writing clean, maintainable software.',
    },
    {
      icon: BookOpen,
      title: 'WHAT I AM LEARNING',
      tag: 'KNOWLEDGE',
      content:
        'Actively deepening my knowledge in Python systems programming, MERN stack web architectures, data structures, and the practical implementation of AI/ML concepts. I focus on understanding principles thoroughly rather than chasing buzzwords.',
    },
    {
      icon: Hammer,
      title: 'WHAT I BUILD',
      tag: 'EXECUTION',
      content:
        'Functional web applications and intelligent utility prototypes. From real-time digital attendance workflows to generative UI orchestration prototypes and predictive Python calculators, I prioritize solving tangible workflow problems.',
    },
    {
      icon: Compass,
      title: 'CAREER DIRECTION',
      tag: 'OBJECTIVE',
      content:
        'Aiming towards a career in software engineering, full-stack product development, and applied AI systems. I seek opportunities to collaborate on impactful engineering problems, learn alongside experienced teams, and build durable software solutions.',
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      
      {/* Background ambient gold lighting */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold-500/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* EDITORIAL CREAM CONTRAST SHOWCASE CARD (Theme matching reference image) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="cream-panel p-8 sm:p-12 lg:p-14 relative overflow-hidden"
        >
          {/* Header Tag */}
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#8c6e18] uppercase mb-4">
            <span>01</span>
            <span>ABOUT ME</span>
            <span className="w-8 h-[1px] bg-[#8c6e18]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left: Heading, Text & 4 Gold Badges */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#141416] tracking-tight leading-tight mb-4">
                Passionate about Technology & Innovation
              </h2>

              <p className="text-sm text-[#4a4a4f] leading-relaxed mb-8 font-sans">
                {profile.aboutText || "I'm a Computer Science student with a strong interest in Artificial Intelligence, Machine Learning and Modern Web Technologies. I love building projects that solve real problems and create meaningful impact."}
              </p>

              {/* 4 Feature Badges with Gold Circular Icons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
                {highlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full border border-gold-500 bg-white flex items-center justify-center shrink-0 shadow-sm text-[#8c6e18]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[#141416] font-sans">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-[#6b6b72] font-sans">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <a
                href="#skills"
                className="px-6 py-3 rounded-full bg-[#141416] hover:bg-[#26262b] text-white text-xs font-sans font-medium tracking-wide inline-flex items-center gap-2 transition-all shadow-md group"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Center: Sleek Developer Syntax Display */}
            <div className="lg:col-span-4 flex items-center justify-center">
              <div className="w-full max-w-sm rounded-2xl bg-[#0c0d12] p-5 shadow-2xl border border-black/10 text-white relative">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3 text-[10px] font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-slate-400 font-sans">developer_workspace.jsx</span>
                  <span className="text-gold-400">utf-8</span>
                </div>

                <div className="font-mono text-[11px] space-y-1.5 leading-relaxed text-slate-300">
                  <div><span className="text-gold-400">const</span> <span className="text-slate-100">developer</span> = &#123;</div>
                  <div className="pl-4"><span className="text-gold-400">name</span>: <span className="text-amber-200">"{profile.name}"</span>,</div>
                  <div className="pl-4"><span className="text-gold-400">degree</span>: <span className="text-amber-200">"B.Tech CSM (88%)"</span>,</div>
                  <div className="pl-4"><span className="text-gold-400">foundation</span>: <span className="text-amber-200">"Diploma CME (87%)"</span>,</div>
                  <div className="pl-4"><span className="text-gold-400">focus</span>: <span className="text-amber-200">"AI / ML & Web Engineering"</span>,</div>
                  <div className="pl-4"><span className="text-gold-400">hackathon</span>: <span className="text-amber-200">"GenUI AI • NRI-U Participant"</span>,</div>
                  <div>&#125;;</div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-gold-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
                    AUTHENTIC PROFILE
                  </span>
                  <span className="text-slate-400">&lt;/&gt;</span>
                </div>
              </div>
            </div>

            {/* Right: Metric Stats */}
            <div className="lg:col-span-3 flex flex-col justify-center gap-6 sm:gap-8 border-t lg:border-t-0 lg:border-l border-black/10 pt-6 lg:pt-0 lg:pl-8">
              <div>
                <div className="font-serif text-4xl sm:text-5xl font-bold text-[#141416] tracking-tight">
                  3+
                </div>
                <div className="text-xs font-sans font-medium text-[#5c5c64] mt-1">
                  Projects Completed
                </div>
              </div>

              <div>
                <div className="font-serif text-4xl sm:text-5xl font-bold text-[#141416] tracking-tight">
                  2+
                </div>
                <div className="text-xs font-sans font-medium text-[#5c5c64] mt-1">
                  Internships
                </div>
              </div>

              <div>
                <div className="font-serif text-4xl sm:text-5xl font-bold text-[#141416] tracking-tight">
                  7
                </div>
                <div className="text-xs font-sans font-medium text-[#5c5c64] mt-1">
                  Verified Certifications
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4 DETAILED STORY BLOCKS (Preserving 100% of authentic information in Gold Theme) */}
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
                className="p-7 sm:p-8 rounded-3xl bg-obsidian-900/90 border border-white/[0.08] hover:border-gold-500/40 flex flex-col justify-between group transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-serif font-bold text-sm tracking-wider text-slate-100">
                        {block.title}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono text-gold-400/80 px-2 py-0.5 rounded-full border border-gold-500/20 bg-gold-500/5">
                      {block.tag}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans font-normal">
                    {block.content}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] font-mono text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                  <span>Authentic Profile Baseline</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* LOCATION & CONTACT STRIP (In Gold Theme) */}
        <div className="p-5 sm:p-6 rounded-2xl bg-obsidian-900/90 border border-white/[0.08] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2.5">
            <MapPin className="w-4 h-4 text-gold-400" />
            <span>Based in: <strong className="text-slate-200 font-sans">{profile.location}</strong></span>
          </div>
          <div className="flex items-center gap-2.5">
            <Mail className="w-4 h-4 text-gold-400" />
            <span>Email: <strong className="text-slate-200 font-mono">{profile.email}</strong></span>
          </div>
          <div className="flex items-center gap-2.5">
            <Phone className="w-4 h-4 text-gold-400" />
            <span>Phone: <strong className="text-slate-200 font-mono">{profile.phone}</strong></span>
          </div>
        </div>

      </div>
    </section>
  );
}
