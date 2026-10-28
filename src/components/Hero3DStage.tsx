import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Eye, ShieldCheck, Play, Pause, Compass, Sliders, Sparkles, ArrowDown } from 'lucide-react';
import { WalkMode, WalkSpeed } from '../types/portfolio';

interface Hero3DStageProps {
  photoSrc: string;
  onOpenIntegrityModal: () => void;
  onExploreWork: () => void;
  onContactClick: () => void;
}

export const Hero3DStage: React.FC<Hero3DStageProps> = ({
  photoSrc,
  onOpenIntegrityModal,
  onExploreWork,
  onContactClick
}) => {
  const [walkMode, setWalkMode] = useState<WalkMode>('walking');
  const [walkSpeed, setWalkSpeed] = useState<WalkSpeed>('gentle');
  const [walkStep, setWalkStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tilt tracking for Interactive mode
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for cursor parallax
  const springConfig = { damping: 24, stiffness: 120 };
  const smoothRotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const smoothRotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);
  const smoothTranslateZ = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, 30]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (walkMode !== 'interactive' || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    if (walkMode === 'interactive') {
      mouseX.set(0);
      mouseY.set(0);
    }
  };

  // Walking camera cycle loop (animates surrounding camera & perspective, never the photo)
  useEffect(() => {
    if (walkMode !== 'walking' || walkSpeed === 'paused') return;

    const intervalTime = walkSpeed === 'gentle' ? 50 : 35;
    const interval = setInterval(() => {
      setWalkStep((prev) => (prev + 0.05) % (Math.PI * 2));
    }, intervalTime);

    return () => clearInterval(interval);
  }, [walkMode, walkSpeed]);

  // Derived walking camera dynamics (bobbing, swaying, forward dolly)
  const walkingY = walkMode === 'walking' && walkSpeed !== 'paused' 
    ? Math.sin(walkStep * 2) * (walkSpeed === 'gentle' ? 7 : 12) 
    : 0;

  const walkingX = walkMode === 'walking' && walkSpeed !== 'paused' 
    ? Math.cos(walkStep) * (walkSpeed === 'gentle' ? 6 : 10) 
    : 0;

  const walkingRotateZ = walkMode === 'walking' && walkSpeed !== 'paused' 
    ? Math.cos(walkStep) * (walkSpeed === 'gentle' ? 0.8 : 1.4) 
    : 0;

  const walkingRotateX = walkMode === 'walking' && walkSpeed !== 'paused' 
    ? 2 + Math.sin(walkStep * 2) * (walkSpeed === 'gentle' ? 1.5 : 2.5) 
    : 0;

  const walkingTranslateZ = walkMode === 'walking' && walkSpeed !== 'paused' 
    ? 25 + Math.sin(walkStep) * 15 
    : 0;

  return (
    <section 
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] flex flex-col justify-center items-center overflow-hidden pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-zinc-950 text-zinc-100"
    >
      {/* 3D Horizon Ambient Lighting - strictly behind and around the stage */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-sky-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[450px] h-[400px] bg-amber-500/5 rounded-full blur-[120px]" />
        <div className="absolute top-2/3 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px]" />
      </div>

      {/* Receding 3D Runway Grid simulating walking corridor floor */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-[480px] overflow-hidden opacity-35"
        style={{ perspective: '800px' }}
      >
        <div 
          className={`w-full h-full origin-bottom ${walkMode === 'walking' && walkSpeed !== 'paused' ? 'animate-runway' : ''}`}
          style={{
            transform: 'rotateX(72deg) scale(1.8)',
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)',
            WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)'
          }}
        />
      </div>

      {/* Floating 3D Depth Particles */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-24 left-[15%] w-1.5 h-1.5 bg-zinc-400 rounded-full animate-float-slow" />
        <div className="absolute top-44 right-[18%] w-1 h-1 bg-sky-300 rounded-full animate-float-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 left-[22%] w-2 h-2 bg-amber-200/40 rounded-full animate-float-slow" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-56 right-[24%] w-1.5 h-1.5 bg-emerald-300/50 rounded-full animate-float-slow" style={{ animationDelay: '1s' }} />
      </div>

      {/* Main Container */}
      <div className="w-full max-w-6xl mx-auto z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Editorial Headline & Bio */}
        <div className="lg:col-span-6 flex flex-col items-start space-y-6 text-left">
          
          {/* Status & Identity Indicator (clean unboxed text with typographic separator) */}
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-zinc-400 uppercase">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Staff Systems Architect</span>
            <span aria-hidden="true">·</span>
            <span>San Francisco</span>
            <span aria-hidden="true">·</span>
            <span className="text-zinc-500">Available Q4 2026</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.08]">
            Architecting <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500">
              resilient distributed
            </span> <br />
            systems at scale.
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl font-normal">
            Hi, I’m <strong className="text-zinc-200 font-medium">Rajiv</strong>. I design fault-tolerant distributed consensus fabrics, low-latency streaming infrastructure, and high-performance reactive web applications.
          </p>

          {/* Authentic Core Numbers */}
          <div className="grid grid-cols-3 gap-6 pt-2 pb-2 w-full max-w-md border-y border-zinc-800/80">
            <div>
              <div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">120M+</div>
              <div className="text-xs text-zinc-500 mt-1">Req / min peak</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">99.999%</div>
              <div className="text-xs text-zinc-500 mt-1">SLA availability</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">10+</div>
              <div className="text-xs text-zinc-500 mt-1">Years production</div>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onExploreWork}
              className="px-5 py-2.5 rounded-lg bg-zinc-100 text-zinc-950 font-medium text-sm hover:bg-white transition-all shadow-md active:scale-[0.98] cursor-pointer"
            >
              Explore Architectures
            </button>
            <button
              onClick={onContactClick}
              className="px-5 py-2.5 rounded-lg border border-zinc-700 hover:border-zinc-500 text-zinc-200 font-medium text-sm hover:bg-zinc-900 transition-all active:scale-[0.98] cursor-pointer"
            >
              Consult &amp; Inquire
            </button>
            <button
              onClick={onOpenIntegrityModal}
              title="Inspect photograph fidelity specifications"
              className="px-3.5 py-2.5 rounded-lg text-zinc-400 hover:text-zinc-200 text-xs font-mono flex items-center gap-1.5 hover:bg-zinc-900/60 transition-colors cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Original Photo Verified</span>
            </button>
          </div>
        </div>

        {/* Right Column: The 3D Walking Gallery Stage with the Unmodified Original Photograph */}
        <div className="lg:col-span-6 flex flex-col items-center">
          
          {/* Camera Stage Control Bar */}
          <div className="w-full max-w-[480px] mb-3 flex items-center justify-between px-3 py-2 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-300">
            <div className="flex items-center gap-1">
              <span className="text-zinc-500 font-mono text-[11px] mr-1.5 uppercase">3D Camera:</span>
              <button
                onClick={() => setWalkMode('walking')}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                  walkMode === 'walking' ? 'bg-zinc-800 text-white shadow-xs' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                Cinematic Walk
              </button>
              <button
                onClick={() => setWalkMode('interactive')}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                  walkMode === 'interactive' ? 'bg-zinc-800 text-white shadow-xs' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                Interactive Tilt
              </button>
              <button
                onClick={() => setWalkMode('static')}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                  walkMode === 'static' ? 'bg-zinc-800 text-white shadow-xs' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                Still
              </button>
            </div>

            {/* Speed / pause toggle if walking mode */}
            {walkMode === 'walking' && (
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setWalkSpeed(prev => prev === 'paused' ? 'gentle' : 'paused')}
                  className="p-1 rounded text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer"
                  title={walkSpeed === 'paused' ? 'Resume camera walking' : 'Pause camera walking'}
                >
                  {walkSpeed === 'paused' ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={() => setWalkSpeed(prev => prev === 'gentle' ? 'brisk' : 'gentle')}
                  className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 hover:text-white cursor-pointer"
                >
                  {walkSpeed.toUpperCase()}
                </button>
              </div>
            )}
          </div>

          {/* 3D Perspective Viewport */}
          <div 
            className="w-full max-w-[480px] aspect-[4/3] relative flex items-center justify-center"
            style={{ perspective: '1100px' }}
          >
            {/* Surrounding 3D Architectural Bevel & Stage Backplane (strictly separate from photo) */}
            <div 
              aria-hidden="true" 
              className="absolute -inset-4 rounded-3xl border border-zinc-800/60 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(39,39,42,0.4) 0%, rgba(9,9,11,0) 70%)',
                transform: 'translateZ(-40px)'
              }}
            />

            {/* Architectural Corridor Pylons for 3D Depth cues */}
            <div 
              aria-hidden="true"
              className="absolute -left-6 top-8 bottom-8 w-1 bg-gradient-to-b from-transparent via-zinc-700/40 to-transparent pointer-events-none hidden sm:block"
              style={{ transform: 'translateZ(-20px)' }}
            />
            <div 
              aria-hidden="true"
              className="absolute -right-6 top-8 bottom-8 w-1 bg-gradient-to-b from-transparent via-zinc-700/40 to-transparent pointer-events-none hidden sm:block"
              style={{ transform: 'translateZ(-20px)' }}
            />

            {/* 
              CINEMATIC CAMERA MOTION RIG:
              Only the container rotates and shifts to produce the walking / 3D experience.
              The photograph itself is 100% UNTOUCHED, containing its original pixels, facial features,
              beard, office background, and aspect ratio.
            */}
            <motion.div
              className="w-full h-full relative rounded-2xl p-2 sm:p-2.5 bg-zinc-900/90 border border-zinc-700/60 shadow-2xl backdrop-blur-md overflow-hidden flex items-center justify-center transform-style-3d transition-shadow"
              style={
                walkMode === 'interactive'
                  ? {
                      rotateX: smoothRotateX,
                      rotateY: smoothRotateY,
                      translateZ: smoothTranslateZ,
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 25px rgba(255, 255, 255, 0.05)'
                    }
                  : walkMode === 'walking'
                  ? {
                      x: walkingX,
                      y: walkingY,
                      rotateZ: walkingRotateZ,
                      rotateX: walkingRotateX,
                      translateZ: walkingTranslateZ,
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 25px rgba(255, 255, 255, 0.05)'
                    }
                  : {
                      translateZ: 0,
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)'
                    }
              }
            >
              {/* Inner Stage Light Rim (ambient reflection on frame edge only) */}
              <div 
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none rounded-2xl border border-white/10"
              />

              {/* 
                THE SACRED ORIGINAL PHOTOGRAPH:
                Strict compliance:
                - object-fit: contain
                - 100% original aspect ratio preserved
                - Full photograph visible including the office background
                - Zero CSS filters (filter: 'none')
                - Zero artificial facial edits, zero pixel modifications
              */}
              <div className="w-full h-full relative flex items-center justify-center overflow-hidden bg-zinc-950/40 rounded-xl">
                <img
                  src={photoSrc}
                  alt="Rajiv - Staff Systems Architect & Full-Stack Engineer (Original Photograph)"
                  className="w-full h-full object-contain select-none pointer-events-none transition-none"
                  style={{
                    objectFit: 'contain',
                    filter: 'none',
                    WebkitFilter: 'none'
                  }}
                  loading="eager"
                  decoding="sync"
                />
              </div>

              {/* Verified Badge Overlay at corner of frame (non-blocking, architectural) */}
              <button
                onClick={onOpenIntegrityModal}
                className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-950/85 border border-zinc-700/80 text-[11px] text-zinc-300 backdrop-blur-md hover:border-emerald-500/60 hover:text-white transition-all cursor-pointer shadow-lg"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="font-mono">Pure Original Photo</span>
              </button>
            </motion.div>
          </div>

          {/* Subtitle Caption with technical verification details */}
          <div className="w-full max-w-[480px] mt-3.5 flex items-center justify-between text-xs text-zinc-500 font-mono">
            <span>Asset: /assets/original-photo.jpg</span>
            <span>object-fit: contain</span>
            <button
              onClick={onOpenIntegrityModal}
              className="text-zinc-400 hover:text-zinc-200 underline underline-offset-2 transition-colors cursor-pointer"
            >
              Verify Spec &amp; Replace
            </button>
          </div>

        </div>

      </div>

      {/* Down Scroll Indicator */}
      <div className="mt-12 lg:mt-16 flex flex-col items-center">
        <button
          onClick={onExploreWork}
          className="flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-300 font-mono transition-colors cursor-pointer"
        >
          <span>Scroll to Systems &amp; Case Studies</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </button>
      </div>

    </section>
  );
};
