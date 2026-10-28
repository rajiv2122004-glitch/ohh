import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<{
    name: string;
    level: string;
    experience: string;
    context: string;
  }>(SKILL_CATEGORIES[0].skills[0]);

  return (
    <section id="stack" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-zinc-800/80">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-zinc-800">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
            Technical Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Core Disciplines &amp; Stack
          </h2>
        </div>
        <p className="text-sm text-zinc-400 max-w-md mt-4 md:mt-0 font-normal">
          Ten years of production engineering across compiled backend systems, real-time spatial runtimes, and resilient cloud infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Categories List (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="space-y-3">
              <h3 className="text-base font-semibold text-white tracking-tight">
                {cat.name}
              </h3>
              <p className="text-xs text-zinc-400 mb-3 font-normal">
                {cat.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {cat.skills.map((skill, sIdx) => {
                  const isSelected = selectedSkill.name === skill.name;
                  return (
                    <button
                      key={sIdx}
                      onClick={() => setSelectedSkill(skill)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-zinc-800 border-zinc-600 text-white shadow-md'
                          : 'bg-zinc-900/60 border-zinc-800/80 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-900'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-[11px] font-mono text-zinc-400">{skill.experience}</span>
                      </div>
                      <div className="text-[11px] text-zinc-500 font-mono">
                        {skill.level}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Selected Skill In-Depth Inspector (5 cols) */}
        <div className="lg:col-span-5 sticky top-28 p-6 rounded-2xl bg-zinc-900/80 border border-zinc-700/80 backdrop-blur-md shadow-xl text-left">
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
            Production Context Inspector
          </div>
          <h4 className="text-2xl font-semibold text-white tracking-tight mb-1">
            {selectedSkill.name}
          </h4>
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-6 pb-4 border-b border-zinc-800">
            <span>{selectedSkill.level}</span>
            <span aria-hidden="true">·</span>
            <span>{selectedSkill.experience} in Production</span>
          </div>

          <div className="space-y-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1.5">
                Real-World System Context:
              </span>
              <p className="text-sm text-zinc-200 leading-relaxed font-normal bg-zinc-950/60 p-4 rounded-xl border border-zinc-800/80">
                {selectedSkill.context}
              </p>
            </div>

            <div className="text-xs text-zinc-400 space-y-2 pt-2">
              <div className="flex items-center justify-between py-1 border-b border-zinc-800/60">
                <span className="text-zinc-500">Evaluation Criteria</span>
                <span className="text-zinc-300">Deterministic &amp; Memory-Safe</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-zinc-800/60">
                <span className="text-zinc-500">Scale Verification</span>
                <span className="text-emerald-400">Tested to 100k+ concurrency</span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
