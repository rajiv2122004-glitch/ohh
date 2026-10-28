import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero3DStage } from './components/Hero3DStage';
import { ProjectsSection } from './components/ProjectsSection';
import { PhilosophySection } from './components/PhilosophySection';
import { SkillsSection } from './components/SkillsSection';
import { TimelineSection } from './components/TimelineSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PhotoIntegrityModal } from './components/PhotoIntegrityModal';

const DEFAULT_PHOTO = '/assets/original-photo.jpg';

export default function App() {
  const [photoSrc, setPhotoSrc] = useState<string>(DEFAULT_PHOTO);
  const [isCustomPhoto, setIsCustomPhoto] = useState(false);
  const [integrityModalOpen, setIntegrityModalOpen] = useState(false);

  // Initialize from local storage if the user previously dropped their photo
  useEffect(() => {
    try {
      const saved = localStorage.getItem('rajiv_original_photo_override');
      if (saved) {
        setPhotoSrc(saved);
        setIsCustomPhoto(true);
      }
    } catch {
      // Ignore local storage error in sandboxed contexts
    }
  }, []);

  const handleUpdatePhoto = (newSrc: string) => {
    setPhotoSrc(newSrc);
    setIsCustomPhoto(true);
    try {
      localStorage.setItem('rajiv_original_photo_override', newSrc);
    } catch {
      // Storage quota or sandboxed
    }
  };

  const handleResetPhoto = () => {
    setPhotoSrc(DEFAULT_PHOTO);
    setIsCustomPhoto(false);
    try {
      localStorage.removeItem('rajiv_original_photo_override');
    } catch {
      // Storage quota or sandboxed
    }
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-zinc-800 selection:text-white antialiased">
      {/* Navigation */}
      <Navbar
        onOpenIntegrityModal={() => setIntegrityModalOpen(true)}
        onNavigate={handleNavigate}
        isCustomPhoto={isCustomPhoto}
      />

      {/* Main Content */}
      <main>
        {/* 
          Hero 3D Stage:
          Contains the unedited original photograph rendered with object-fit: contain.
          Walking experience is driven strictly through camera perspectives and surrounding 3D elements.
        */}
        <Hero3DStage
          photoSrc={photoSrc}
          onOpenIntegrityModal={() => setIntegrityModalOpen(true)}
          onExploreWork={() => handleNavigate('work')}
          onContactClick={() => handleNavigate('contact')}
        />

        {/* Selected Projects & Systems */}
        <ProjectsSection />

        {/* Architectural Principles */}
        <PhilosophySection />

        {/* Technical Matrix & Stack */}
        <SkillsSection />

        {/* Career Timeline */}
        <TimelineSection />

        {/* Peer Testimonials */}
        <TestimonialsSection />

        {/* Direct Contact & Consultation */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenIntegrityModal={() => setIntegrityModalOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Photo Integrity & Spec Modal */}
      <PhotoIntegrityModal
        isOpen={integrityModalOpen}
        onClose={() => setIntegrityModalOpen(false)}
        currentPhotoSrc={photoSrc}
        onUpdatePhoto={handleUpdatePhoto}
        onResetPhoto={handleResetPhoto}
        isCustomPhoto={isCustomPhoto}
      />
    </div>
  );
}
