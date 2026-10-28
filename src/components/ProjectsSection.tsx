import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ArrowUpRight, Github, Layers, X, CheckCircle2 } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Architectures' },
    { id: 'distributed', label: 'Distributed Systems' },
    { id: 'spatial', label: 'Spatial & Real-Time' },
    { id: 'cloud', label: 'Cloud & Infrastructure' },
    { id: 'web', label: 'Web Applications' }
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-zinc-800">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
            Selected Work &amp; Blueprints
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Engineered for high concurrency &amp; zero loss.
          </h2>
        </div>
        <p className="text-sm text-zinc-400 max-w-md mt-4 md:mt-0 font-normal">
          Production systems deployed across global regions, handling hundreds of thousands of events per second with sub-millisecond tail latencies.
        </p>
      </div>

      {/* Interactive Category Filter (Functional buttons styled as segmented control, not pills!) */}
      <div className="flex flex-wrap items-center gap-1.5 p-1 bg-zinc-900 border border-zinc-800 rounded-xl mb-10 w-fit">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-zinc-800 text-white shadow-xs'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group relative flex flex-col justify-between p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/90 transition-all duration-200 cursor-pointer text-left"
          >
            <div>
              {/* Year & Status - clean unboxed inline text with typographic separator */}
              <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono mb-3">
                <span>{project.year}</span>
                <span aria-hidden="true">·</span>
                <span className="text-zinc-400">{project.status}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white tracking-tight group-hover:text-zinc-100 transition-colors mb-2 flex items-center justify-between">
                <span>{project.title}</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
              </h3>

              {/* Tagline */}
              <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                {project.tagline}
              </p>
            </div>

            <div>
              {/* Core Metrics */}
              <div className="grid grid-cols-2 gap-3 py-3 border-y border-zinc-800/80 mb-4 bg-zinc-950/40 rounded-lg px-3">
                {project.metrics.slice(0, 2).map((metric, idx) => (
                  <div key={idx}>
                    <div className="text-sm font-semibold font-mono text-zinc-200">{metric.value}</div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-wider">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* Tech Stack - rendered as clean unboxed text with typographic separator */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-400 font-mono">
                {project.stack.map((tech, idx) => (
                  <React.Fragment key={idx}>
                    <span>{tech}</span>
                    {idx < project.stack.length - 1 && <span aria-hidden="true" className="text-zinc-600">·</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Deep-Dive Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="w-full max-w-2xl bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-left relative text-zinc-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between pb-4 border-b border-zinc-800 mb-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-1">
                  <span>{selectedProject.year}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedProject.status}</span>
                </div>
                <h3 className="text-2xl font-semibold text-white tracking-tight">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
              {selectedProject.summary}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-zinc-950 border border-zinc-800 mb-6">
              {selectedProject.metrics.map((m, idx) => (
                <div key={idx}>
                  <div className="text-base sm:text-lg font-semibold font-mono text-white">{m.value}</div>
                  <div className="text-[11px] text-zinc-400 uppercase tracking-wider">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Architecture Invariants */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                Architectural Invariants &amp; Implementation
              </h4>
              <ul className="space-y-2.5 text-xs text-zinc-300">
                {selectedProject.architectureDetails.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technology Stack */}
            <div className="pt-4 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-x-2.5 text-xs font-mono text-zinc-400">
                <span className="text-zinc-500 uppercase">Stack:</span>
                {selectedProject.stack.map((item, idx) => (
                  <span key={idx} className="text-zinc-200">
                    {item}{idx < selectedProject.stack.length - 1 ? ' ·' : ''}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Codebase Blueprint</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
