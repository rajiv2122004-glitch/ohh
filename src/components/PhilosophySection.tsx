import React from 'react';
import { ARCHITECTURAL_PRINCIPLES } from '../data/portfolioData';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="principles" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-zinc-800/80">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-zinc-800">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
            Engineering Manifesto
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Architectural Principles
          </h2>
        </div>
        <p className="text-sm text-zinc-400 max-w-md mt-4 md:mt-0 font-normal">
          The non-negotiable axioms governing every distributed topology, data contract, and client interface I build.
        </p>
      </div>

      {/* Editorial Principle List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {ARCHITECTURAL_PRINCIPLES.map((principle) => (
          <div 
            key={principle.number}
            className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/80 transition-colors"
          >
            <div>
              <div className="text-sm font-mono text-zinc-500 mb-2">
                Chapter {principle.number}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-3">
                {principle.title}
              </h3>
              <p className="text-sm font-medium text-zinc-300 mb-4">
                {principle.summary}
              </p>
              <p className="text-xs text-zinc-400 leading-relaxed font-normal mb-6">
                {principle.manifesto}
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-800/80">
              <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block mb-1">
                Concrete Application:
              </span>
              <p className="text-xs text-zinc-300 font-mono">
                {principle.implementationExample}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
