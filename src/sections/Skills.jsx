import { useState } from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';
import {
  Code2,
  Layout,
  Database,
  BrainCircuit,
  ArrowUpRight,
  Sparkles,
  FolderGit2,
  Award,
  Wrench,
  CheckCircle2
} from 'lucide-react';

const iconMap = {
  Code2: Code2,
  Layout: Layout,
  Database: Database,
  BrainCircuit: BrainCircuit,
};

export default function Skills({ onSelectProject }) {
  const [selectedSkill, setSelectedSkill] = useState(skillCategories[0]?.skills[0]);

  // Quick 4 Categorized Columns from reference design
  const quickCategories = [
    { title: 'Languages', icon: Code2, skills: ['Python', 'JavaScript', 'C++', 'Java'] },
    { title: 'Frontend', icon: Layout, skills: ['React', 'HTML', 'CSS', 'Tailwind CSS'] },
    { title: 'Backend', icon: Database, skills: ['Node.js', 'Express.js', 'FastAPI', 'MySQL'] },
    { title: 'Tools', icon: Wrench, skills: ['Git', 'GitHub', 'VS Code', 'Docker'] }
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      
      {/* Ambient gold glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-500/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* TOP: 4-COLUMN CATEGORICAL OVERVIEW & GOLDEN WAVE (Direct from Reference Image) */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-8 items-center p-8 sm:p-10 rounded-3xl bg-obsidian-900/80 border border-white/[0.08] shadow-card">
          
          {/* Left: Heading & Description (4 cols) */}
          <div className="xl:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-gold-400 uppercase mb-3">
              <span>03</span>
              <span>SKILLS</span>
              <span className="w-8 h-[1px] bg-gold-400/80" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
              Technologies I Work With
            </h2>

            <p className="text-sm text-slate-400 leading-relaxed mb-6 font-sans">
              I have experience with a range of programming languages, frameworks and tools. I'm always eager to learn and explore new technologies.
            </p>

            <a
              href="#projects"
              className="px-5 py-2.5 rounded-full border border-gold-500/40 text-gold-400 hover:bg-gold-500/15 hover:border-gold-400 text-xs font-sans font-medium tracking-wide inline-flex items-center gap-2 transition-all shadow-sm"
            >
              <span>View In Projects</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Center: 4 Categorized Columns (6 cols) */}
          <div className="xl:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4">
            {quickCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div key={cat.title} className="flex flex-col">
                  <div className="flex items-center gap-2 mb-4 text-slate-200 font-sans font-semibold text-sm">
                    <Icon className="w-4 h-4 text-gold-400" />
                    <span>{cat.title}</span>
                  </div>

                  <div className="flex flex-col gap-2.5">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors group cursor-default"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-400/60 group-hover:bg-gold-400 group-hover:scale-125 transition-all" />
                        <span className="font-sans">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Far Right: Radiant Golden Wave Graphic & Editorial Quote (2 cols) */}
          <div className="xl:col-span-2 hidden xl:flex flex-col items-end justify-center text-right pl-4 border-l border-white/[0.08] relative">
            <div className="w-28 h-28 absolute -top-8 right-0 opacity-25 pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full text-gold-400 stroke-current fill-none">
                <path d="M0 50 Q 25 20, 50 50 T 100 50" strokeWidth="1.5" />
                <path d="M0 60 Q 25 30, 50 60 T 100 60" strokeWidth="1.5" opacity="0.7" />
                <path d="M0 70 Q 25 40, 50 70 T 100 70" strokeWidth="1.5" opacity="0.4" />
              </svg>
            </div>

            <div className="flex flex-col items-end gap-1.5 relative z-10">
              <span className="font-serif italic text-base text-slate-200">Always</span>
              <span className="font-serif italic text-base text-slate-200">Learning</span>
              <span className="font-serif italic text-base text-slate-200">Always</span>
              <span className="font-serif italic text-base font-semibold text-gold-400">Building</span>
              <div className="w-8 h-[2px] bg-gold-400/80 mt-2" />
            </div>
          </div>
        </div>

        {/* FULL INTERACTIVE CONSTELLATION & RELATIONSHIP INSPECTOR (100% of authentic content preserved) */}
        <div>
          <div className="flex flex-col items-start mb-8">
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-gold-400 uppercase mb-2">
              <span>EXPLORER</span>
              <span className="w-6 h-[1px] bg-gold-400" />
              <span>SKILLS CONSTELLATION & RELATIONSHIPS</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl font-sans">
              Click any skill below to inspect its practical implementation across verified projects and certified coursework.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Columns (8 cols): Categorized Skill Matrix */}
            <div className="lg:col-span-8 space-y-6">
              {skillCategories.map((category) => {
                const Icon = iconMap[category.icon] || Code2;
                return (
                  <div
                    key={category.id}
                    className="p-6 sm:p-7 rounded-3xl bg-obsidian-900/90 border border-white/[0.08]"
                  >
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="font-serif font-bold text-sm tracking-wider text-slate-100">
                            {category.title}
                          </h3>
                          <p className="text-[11px] font-mono text-slate-400">
                            {category.description}
                          </p>
                        </div>
                      </div>
                      {category.isLearningArea && (
                        <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-gold-500/15 text-gold-300 border border-gold-500/30 font-medium">
                          Active Growth Domain
                        </span>
                      )}
                    </div>

                    {/* Skills Pills */}
                    <div className="flex flex-wrap gap-2.5">
                      {category.skills.map((skill) => {
                        const isSelected = selectedSkill?.name === skill.name;
                        return (
                          <button
                            key={skill.name}
                            onClick={() => setSelectedSkill(skill)}
                            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 flex items-center gap-2 border ${
                              isSelected
                                ? 'bg-gold-500/20 text-gold-300 border-gold-400 shadow-glow-gold font-bold scale-[1.02]'
                                : 'bg-white/[0.03] hover:bg-white/[0.07] text-slate-300 border-white/10 hover:border-gold-500/30'
                            }`}
                          >
                            <span>{skill.name}</span>
                            {skill.usedInProjects.length > 0 && (
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" title="Applied in active projects" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column (4 cols): Relationship Inspector Panel */}
            <div className="lg:col-span-4 sticky top-28">
              <div className="p-6 sm:p-7 rounded-3xl bg-obsidian-900/95 border border-gold-500/40 shadow-card relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 via-amber-300 to-gold-600" />
                
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-gold-400" />
                    <span className="text-[11px] font-mono text-gold-400 uppercase tracking-wider font-semibold">
                      RELATIONSHIP INSPECTOR
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/30">
                    LIVE
                  </span>
                </div>

                {selectedSkill ? (
                  <div>
                    <h4 className="text-xl font-serif font-bold text-white mb-1 tracking-tight">
                      {selectedSkill.name}
                    </h4>
                    <div className="text-xs font-mono text-gold-400 mb-3 font-medium">
                      {selectedSkill.level}
                    </div>
                    <p className="text-xs text-slate-300 mb-6 leading-relaxed font-sans">
                      {selectedSkill.context}
                    </p>

                    {/* Used In Projects */}
                    <div className="mb-5">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-2.5 font-medium">
                        <FolderGit2 className="w-3.5 h-3.5 text-gold-400" />
                        <span>USED IN PROJECTS:</span>
                      </div>
                      {selectedSkill.usedInProjects.length > 0 ? (
                        <div className="space-y-2">
                          {selectedSkill.usedInProjects.map((p) => (
                            <div
                              key={p.id}
                              onClick={() => onSelectProject(p.id)}
                              className="p-3 rounded-xl bg-white/[0.03] hover:bg-gold-500/15 border border-white/10 hover:border-gold-500/50 flex items-center justify-between text-xs font-mono text-slate-200 cursor-pointer transition-colors group"
                            >
                              <span>→ {p.title}</span>
                              <ArrowUpRight className="w-3.5 h-3.5 text-gold-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-[11px] font-mono text-slate-500 italic pl-2">
                          Core academic coursework & laboratory exercises.
                        </p>
                      )}
                    </div>

                    {/* Related Certifications */}
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-2.5 font-medium">
                        <Award className="w-3.5 h-3.5 text-gold-400" />
                        <span>RELATED CERTIFICATION / LEARNING:</span>
                      </div>
                      {selectedSkill.relatedCertifications.length > 0 ? (
                        <div className="space-y-2">
                          {selectedSkill.relatedCertifications.map((c) => (
                            <div
                              key={c.id}
                              className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-slate-300"
                            >
                              <span className="text-gold-400 font-bold">✓</span> {c.title}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-[11px] font-mono text-slate-500 italic pl-2">
                          Coursework verified via curriculum examination.
                        </p>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-10 text-xs font-mono text-slate-500">
                    Select a skill node to view connected projects & certifications.
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
