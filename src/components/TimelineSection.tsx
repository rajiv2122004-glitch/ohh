import React from 'react';
import { CAREER_MILESTONES } from '../data/portfolioData';
import { CheckCircle2 } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  return (
    <section id="journey" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-zinc-800/80">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-zinc-800">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
            Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Career Journey &amp; Milestones
          </h2>
        </div>
        <p className="text-sm text-zinc-400 max-w-md mt-4 md:mt-0 font-normal">
          A progression focused on architectural ownership, high-availability reliability, and engineering leadership.
        </p>
      </div>

      {/* Timeline items */}
      <div className="space-y-10 relative">
        {CAREER_MILESTONES.map((item, idx) => (
          <div 
            key={idx}
            className="p-6 sm:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors text-left"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white tracking-tight">
                  {item.role}
                </h3>
                <div className="text-sm text-zinc-400 font-medium">
                  {item.company} <span className="text-zinc-600">·</span> {item.location}
                </div>
              </div>
              <div className="text-xs font-mono text-zinc-400 bg-zinc-950 px-3 py-1 rounded-md border border-zinc-800 w-fit">
                {item.period}
              </div>
            </div>

            <ul className="space-y-2.5 mb-6 text-sm text-zinc-300">
              {item.highlights.map((highlight, hIdx) => (
                <li key={hIdx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-mono text-zinc-400 pt-3 border-t border-zinc-800/60">
              <span className="text-zinc-500 uppercase">Technologies:</span>
              {item.technologies.map((tech, tIdx) => (
                <span key={tIdx} className="text-zinc-300">
                  {tech}{tIdx < item.technologies.length - 1 ? ' ·' : ''}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
