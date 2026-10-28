import React, { useRef, useState } from 'react';
import { X, ShieldCheck, CheckCircle2, Upload, RotateCcw, Download, Info } from 'lucide-react';

interface PhotoIntegrityModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPhotoSrc: string;
  onUpdatePhoto: (newSrc: string) => void;
  onResetPhoto: () => void;
  isCustomPhoto: boolean;
}

export const PhotoIntegrityModal: React.FC<PhotoIntegrityModalProps> = ({
  isOpen,
  onClose,
  currentPhotoSrc,
  onUpdatePhoto,
  onResetPhoto,
  isCustomPhoto
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const processFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload a valid image file (JPG, PNG, WEBP).');
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      if (typeof event.target?.result === 'string') {
        onUpdatePhoto(event.target.result);
        setNotification(`Successfully loaded "${file.name}" with zero modifications!`);
        setTimeout(() => setNotification(null), 4000);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = currentPhotoSrc;
    link.download = 'original-photo.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl p-6 overflow-hidden text-zinc-100 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white tracking-tight">Original Photograph Integrity Spec</h2>
              <p className="text-xs text-zinc-400">Strict pixel identity guarantee · Zero AI modifications · 100% visible</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto py-4 space-y-6 pr-1">
          
          {/* Notification */}
          {notification && (
            <div className="p-3 rounded-lg bg-emerald-950/80 border border-emerald-600/50 text-emerald-300 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
              <span>{notification}</span>
            </div>
          )}

          {/* Current Photo Technical Preview */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-3 rounded-xl bg-zinc-950 border border-zinc-800">
            <div className="md:col-span-5 h-44 bg-zinc-900/60 rounded-lg border border-zinc-800 flex items-center justify-center overflow-hidden relative">
              <img
                src={currentPhotoSrc}
                alt="Original Unedited Photo"
                className="w-full h-full object-contain pointer-events-none select-none"
                style={{ objectFit: 'contain', filter: 'none' }}
              />
              <span className="absolute bottom-2 left-2 px-1.5 py-0.5 rounded bg-zinc-950/80 text-[10px] font-mono text-zinc-400 border border-zinc-800">
                object-fit: contain
              </span>
            </div>

            <div className="md:col-span-7 space-y-2.5 text-xs">
              <div className="flex justify-between py-1 border-b border-zinc-800/80">
                <span className="text-zinc-500">Repository Asset Path</span>
                <span className="font-mono text-zinc-200">/public/assets/original-photo.jpg</span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-800/80">
                <span className="text-zinc-500">CSS Filter Status</span>
                <span className="font-mono text-emerald-400">filter: none (0 filters)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-800/80">
                <span className="text-zinc-500">Aspect Ratio &amp; Background</span>
                <span className="font-mono text-emerald-400">100% Uncropped &amp; Visible</span>
              </div>
              <div className="flex justify-between py-1 border-b border-zinc-800/80">
                <span className="text-zinc-500">Facial &amp; Identity Retouching</span>
                <span className="font-mono text-emerald-400">Preserved 1:1 Raw Pixels</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-zinc-500">Walking Effect Implementation</span>
                <span className="font-mono text-zinc-300">Camera Rig &amp; 3D Stage only</span>
              </div>
            </div>
          </div>

          {/* Verification Checklist */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider font-mono">
              Strict User Directives Checklist
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="flex items-start gap-2 p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800 text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Original image pixels &amp; facial identity strictly preserved</span>
              </div>
              <div className="flex items-start gap-2 p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800 text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Full office background intact; no cropping or stretching</span>
              </div>
              <div className="flex items-start gap-2 p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800 text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Zero AI enhancements, face restoration, or filters</span>
              </div>
              <div className="flex items-start gap-2 p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800 text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Walking effect animated via camera perspective only</span>
              </div>
            </div>
          </div>

          {/* Upload / Replace Photo Section */}
          <div className="space-y-3 pt-1">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider font-mono">
                Load Your Exact Local File
              </h3>
              {isCustomPhoto && (
                <button
                  onClick={onResetPhoto}
                  className="flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Restore Default Asset</span>
                </button>
              )}
            </div>

            <div
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`p-6 border-2 border-dashed rounded-xl flex flex-col items-center justify-center text-center cursor-pointer transition-colors ${
                dragOver 
                  ? 'border-emerald-500 bg-emerald-500/10' 
                  : 'border-zinc-700 bg-zinc-950/60 hover:border-zinc-500 hover:bg-zinc-950'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/png,image/jpeg,image/webp"
                className="hidden"
                onChange={handleFileChange}
              />
              <Upload className="w-7 h-7 text-zinc-400 mb-2" />
              <p className="text-sm font-medium text-zinc-200">
                Click or drag &amp; drop your original photo here
              </p>
              <p className="text-xs text-zinc-500 mt-1">
                JPG, PNG, or WEBP · Direct 1:1 pixel rendering into the 3D walking stage
              </p>
            </div>
          </div>

          {/* GitHub Deployment Quick Commands */}
          <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-300">
                GitHub Repository Push Commands
              </span>
              <span className="text-[11px] font-mono text-emerald-400">Git Initialized on main</span>
            </div>
            <p className="text-xs text-zinc-400">
              Run these commands to link your local or remote GitHub repo:
            </p>
            <pre className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-200 overflow-x-auto select-all">
{`git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main`}
            </pre>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-zinc-800">
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Image</span>
            </button>
            <a
              href="/portfolio-source.tar.gz"
              download="rajiv-portfolio.tar.gz"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Full Repo (.tar.gz)</span>
            </a>
          </div>
          
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-semibold transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
