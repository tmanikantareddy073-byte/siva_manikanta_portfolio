import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories } from '../data/skills';
import { Code2, Layout, Database, BrainCircuit, ArrowUpRight, CheckCircle2, Sparkles, FolderGit2, Award, Info } from 'lucide-react';

const iconMap = {
  Code2: Code2,
  Layout: Layout,
  Database: Database,
  BrainCircuit: BrainCircuit,
};

export default function Skills({ onSelectProject }) {
  const [selectedSkill, setSelectedSkill] = useState(skillCategories[0].skills[0]);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-cyber-cyan tracking-widest uppercase mb-2">
            <span>03</span>
            <span className="w-6 h-[1px] bg-cyber-cyan" />
            <span>CORE CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            TECH STACK & CONSTELLATION
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            Interactive technology constellation. Click any skill to inspect where it is actively applied across my practical projects and certified coursework.
          </p>
        </div>

        {/* Constellation Grid & Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Columns (8 cols): Categorized Skill Matrix */}
          <div className="lg:col-span-8 space-y-6">
            {skillCategories.map((category) => {
              const Icon = iconMap[category.icon] || Code2;
              return (
                <div
                  key={category.id}
                  className="p-6 sm:p-7 rounded-3xl glass-panel border border-white/10"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-cyber-cyan">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-sm tracking-wider text-slate-900 dark:text-white">
                          {category.title}
                        </h3>
                        <p className="text-[11px] font-mono text-slate-500">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    {category.isLearningArea && (
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-cyber-purple/15 text-cyber-purple border border-cyber-purple/30 font-medium">
                        Active Growth Domain
                      </span>
                    )}
                  </div>

                  {/* Skills Pills in this Category */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => {
                      const isSelected = selectedSkill?.name === skill.name;
                      return (
                        <button
                          key={skill.name}
                          onClick={() => setSelectedSkill(skill)}
                          className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 flex items-center gap-2 border ${
                            isSelected
                              ? 'bg-cyber-cyan/15 text-cyber-cyan border-cyber-cyan shadow-glow-cyan font-bold scale-[1.02]'
                              : 'bg-white/[0.03] hover:bg-white/[0.07] text-slate-700 dark:text-slate-300 border-white/10 hover:border-white/20'
                          }`}
                        >
                          <span>{skill.name}</span>
                          {skill.usedInProjects.length > 0 && (
                            <span className="w-1.5 h-1.5 rounded-full bg-cyber-emerald" title="Used in projects" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column (4 cols): Interactive Skill Inspector Panel */}
          <div className="lg:col-span-4 sticky top-28">
            <div className="p-6 sm:p-7 rounded-3xl glass-panel border border-cyber-cyan/35 shadow-card relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-emerald" />
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyber-cyan" />
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                    RELATIONSHIP INSPECTOR
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/30">
                  LIVE
                </span>
              </div>

              {selectedSkill ? (
                <div>
                  <h4 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-1 tracking-tight">
                    {selectedSkill.name}
                  </h4>
                  <div className="text-xs font-mono text-cyber-cyan mb-3 font-medium">
                    {selectedSkill.level}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {selectedSkill.context}
                  </p>

                  {/* Used In Projects */}
                  <div className="mb-5">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-2.5 font-medium">
                      <FolderGit2 className="w-3.5 h-3.5 text-cyber-emerald" />
                      <span>USED IN PROJECTS:</span>
                    </div>
                    {selectedSkill.usedInProjects.length > 0 ? (
                      <div className="space-y-2">
                        {selectedSkill.usedInProjects.map((p) => (
                          <div
                            key={p.id}
                            onClick={() => onSelectProject(p.id)}
                            className="p-3 rounded-xl bg-white/[0.03] hover:bg-cyber-cyan/10 border border-white/10 hover:border-cyber-cyan/40 flex items-center justify-between text-xs font-mono text-slate-800 dark:text-slate-200 cursor-pointer transition-colors group"
                          >
                            <span>→ {p.title}</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-cyber-cyan opacity-50 group-hover:opacity-100 transition-opacity" />
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
                      <Award className="w-3.5 h-3.5 text-cyber-purple" />
                      <span>RELATED CERTIFICATION / LEARNING:</span>
                    </div>
                    {selectedSkill.relatedCertifications.length > 0 ? (
                      <div className="space-y-2">
                        {selectedSkill.relatedCertifications.map((c) => (
                          <div
                            key={c.id}
                            className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-slate-700 dark:text-slate-300"
                          >
                            <span>✓ {c.title}</span>
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
    </section>
  );
}
