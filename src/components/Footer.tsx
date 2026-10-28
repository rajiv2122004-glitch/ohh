import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenIntegrityModal: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenIntegrityModal, onNavigate }) => {
  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950 py-12 px-4 sm:px-6 lg:px-8 text-zinc-400 text-xs">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Identity & Integrity */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="text-sm font-semibold text-white tracking-tight">
            {PERSONAL_INFO.name} — {PERSONAL_INFO.title}
          </div>
          <div className="flex items-center gap-2 text-zinc-500 font-mono text-[11px]">
            <span>© 2026 Rajiv. All rights reserved.</span>
            <span aria-hidden="true">·</span>
            <button
              onClick={onOpenIntegrityModal}
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
            >
              <ShieldCheck className="w-3 h-3" />
              <span>Original Photo Verified (object-fit: contain)</span>
            </button>
          </div>
        </div>

        {/* Center: Clean Nav Links */}
        <div className="flex items-center gap-6 font-medium text-zinc-400">
          <button onClick={() => onNavigate('work')} className="hover:text-zinc-200 transition-colors cursor-pointer">
            Work
          </button>
          <button onClick={() => onNavigate('principles')} className="hover:text-zinc-200 transition-colors cursor-pointer">
            Principles
          </button>
          <button onClick={() => onNavigate('stack')} className="hover:text-zinc-200 transition-colors cursor-pointer">
            Stack
          </button>
          <button onClick={() => onNavigate('journey')} className="hover:text-zinc-200 transition-colors cursor-pointer">
            Journey
          </button>
          <button onClick={() => onNavigate('contact')} className="hover:text-zinc-200 transition-colors cursor-pointer">
            Contact
          </button>
        </div>

        {/* Right: Technical Notes */}
        <div className="text-zinc-500 font-mono text-[11px] text-center md:text-right">
          <div>Built with React 19 &amp; Motion</div>
          <div>Zero artificial image filters applied</div>
        </div>

      </div>
    </footer>
  );
};
