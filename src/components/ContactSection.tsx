import React, { useState } from 'react';
import { Mail, Check, Copy, ArrowUpRight, Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    topic: 'Architecture Advisory',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Please provide a valid email address.';
    if (!formData.message.trim() || formData.message.length < 15) errs.message = 'Please provide details on your architectural scope (min 15 characters).';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#10b981', '#38bdf8', '#f4f4f5']
    });
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-zinc-800/80">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
        
        {/* Left Column (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            Direct Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight">
            Let’s discuss your next architectural leap.
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed font-normal">
            Available for principal architecture advisory, high-throughput systems scaling, and technical leadership engagements.
          </p>

          {/* Email Copy Card */}
          <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
            <span className="text-xs font-mono text-zinc-400 uppercase">Direct Email</span>
            <div className="flex items-center justify-between">
              <span className="text-sm font-mono text-zinc-200 truncate mr-2">
                {PERSONAL_INFO.email}
              </span>
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-white transition-colors cursor-pointer shrink-0"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Direct External Channels */}
          <div className="space-y-2 pt-2">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
              Profiles &amp; Repositories
            </span>
            <div className="flex flex-wrap gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-xs text-zinc-300 hover:text-white font-mono transition-colors"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <span className="text-zinc-700">/</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-xs text-zinc-300 hover:text-white font-mono transition-colors"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <span className="text-zinc-700">/</span>
              <a
                href={PERSONAL_INFO.x}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-xs text-zinc-300 hover:text-white font-mono transition-colors"
              >
                <span>X / Twitter</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form (7 cols) */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800">
          {submitted ? (
            <div className="py-12 flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white tracking-tight">
                Inquiry Transmitted
              </h3>
              <p className="text-sm text-zinc-400 max-w-md font-normal leading-relaxed">
                Thank you, {formData.name}. Rajiv will review your architectural scope and respond within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', organization: '', topic: 'Architecture Advisory', message: '' });
                }}
                className="mt-4 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-white transition-colors cursor-pointer"
              >
                Send Another Note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Connor"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 focus:border-zinc-500 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none transition-colors"
                  />
                  {errors.name && <p className="text-xs text-rose-400 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 focus:border-zinc-500 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none transition-colors"
                  />
                  {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                    Organization / Company
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="ScaleTech Systems"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 focus:border-zinc-500 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                    Engagement Scope
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 focus:border-zinc-500 text-sm text-zinc-100 outline-none transition-colors cursor-pointer"
                  >
                    <option value="Architecture Advisory">Principal Architecture Advisory</option>
                    <option value="Distributed Scaling">Distributed Scaling &amp; Audit</option>
                    <option value="Full-Stack Engineering">Full-Stack Realtime Engineering</option>
                    <option value="Executive Mentorship">Staff Engineering Mentorship</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                  Project Details &amp; Constraints *
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline your systems challenges, throughput targets, timeline, and current stack..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 focus:border-zinc-500 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none transition-colors resize-none"
                />
                {errors.message && <p className="text-xs text-rose-400 mt-1">{errors.message}</p>}
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs transition-all active:scale-[0.98] cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Inquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>

    </section>
  );
};
