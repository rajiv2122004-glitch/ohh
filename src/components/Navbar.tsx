import React, { useState, useEffect } from 'react';
import { ShieldCheck, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenIntegrityModal: () => void;
  onNavigate: (sectionId: string) => void;
  isCustomPhoto: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenIntegrityModal,
  onNavigate,
  isCustomPhoto
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Work', id: 'work' },
    { label: 'Principles', id: 'principles' },
    { label: 'Stack', id: 'stack' },
    { label: 'Journey', id: 'journey' },
    { label: 'Contact', id: 'contact' }
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-zinc-950/85 backdrop-blur-md border-b border-zinc-800/80 py-3.5 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <button
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-2.5 text-left group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center font-mono font-bold text-sm text-zinc-100 group-hover:border-zinc-500 transition-colors">
            R
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-white leading-tight">
              Rajiv
            </span>
            <span className="text-[11px] text-zinc-400 font-mono tracking-wider uppercase leading-tight">
              Systems Architect
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-400">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="hover:text-zinc-100 transition-colors cursor-pointer relative py-1"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenIntegrityModal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-zinc-400 hover:text-white bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all cursor-pointer"
            title="Inspect original photo fidelity"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Photo Spec</span>
            {isCustomPhoto && (
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            )}
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className="flex items-center gap-1 px-4 py-1.5 rounded-lg bg-zinc-100 text-zinc-950 font-medium text-xs hover:bg-white transition-all active:scale-[0.98] cursor-pointer"
          >
            <span>Inquire</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950/95 border-b border-zinc-800 px-6 py-5 space-y-4 backdrop-blur-xl">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-left text-sm font-medium text-zinc-300 hover:text-white py-1"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="pt-3 border-t border-zinc-800 flex flex-col gap-2.5">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenIntegrityModal(); }}
              className="flex items-center justify-center gap-1.5 w-full py-2 rounded-lg text-xs font-mono text-zinc-300 bg-zinc-900 border border-zinc-800"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Original Photo Integrity Spec</span>
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-2 rounded-lg bg-zinc-100 text-zinc-950 font-semibold text-xs text-center"
            >
              Consult &amp; Inquire
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
