import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-zinc-800/80">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-zinc-800">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
            Peer Endorsements
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            What engineering leaders say.
          </h2>
        </div>
        <p className="text-sm text-zinc-400 max-w-md mt-4 md:mt-0 font-normal">
          Collaborations with engineering executives and fellow principal architects across mission-critical systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((item, idx) => (
          <div 
            key={idx}
            className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-colors text-left"
          >
            <div>
              <Quote className="w-6 h-6 text-zinc-600 mb-4" />
              <p className="text-sm text-zinc-300 leading-relaxed font-normal mb-6 italic">
                "{item.quote}"
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-zinc-800/80">
              <div className="w-9 h-9 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center font-mono text-xs font-semibold text-zinc-200 shrink-0">
                {item.avatarText}
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold text-white truncate">
                  {item.author}
                </div>
                <div className="text-xs text-zinc-400 truncate">
                  {item.role} <span className="text-zinc-600">·</span> {item.company}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
