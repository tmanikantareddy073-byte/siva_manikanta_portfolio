import { useState } from 'react';
import Sidebar from './components/Sidebar';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Footer from './components/Footer';

// Sections (ALL 100% PRESERVED SECTIONS)
import Hero from './sections/Hero';
import About from './sections/About';
import Journey from './sections/Journey';
import Skills from './sections/Skills';
import ProjectLab from './sections/ProjectLab';
import HackathonJourney from './sections/HackathonJourney';
import Experience from './sections/Experience';
import CertVault from './sections/CertVault';
import Education from './sections/Education';
import Contact from './sections/Contact';

// Modals
import ProjectModal from './components/ProjectModal';
import CertModal from './components/CertModal';
import ResumeModal from './components/ResumeModal';

// Hooks & Data
import { useTheme } from './hooks/useTheme';
import { useScrollSpy } from './hooks/useScrollSpy';
import { projects } from './data/projects';
import { certificates } from './data/certificates';

const sectionIds = [
  'home',
  'about',
  'journey',
  'skills',
  'projects',
  'hackathon',
  'experience',
  'certifications',
  'education',
  'contact',
];

export default function App() {
  const { theme, toggleTheme, isDark } = useTheme();
  const activeSection = useScrollSpy(sectionIds, 120);

  // Modal states
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenProjectById = (projectId) => {
    const p = projects.find((item) => item.id === projectId);
    if (p) setSelectedProject(p);
  };

  const handleOpenCertById = (certId) => {
    const c = certificates.find((item) => item.id === certId);
    if (c) setSelectedCert(c);
  };

  return (
    <div className="relative min-h-screen bg-[#08080a] text-slate-100 selection:bg-gold-500/25 selection:text-gold-300">
      
      {/* Subtle Tech Grid Texture */}
      <div className="fixed inset-0 tech-grid-overlay pointer-events-none z-0" />

      {/* Ambient Diffuse Background Glows in Pure Warm Gold */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-500/[0.035] blur-[140px] rounded-full pointer-events-none z-0" />
      <div className="fixed top-1/3 right-0 w-[500px] h-[500px] bg-amber-500/[0.025] blur-[150px] rounded-full pointer-events-none z-0" />

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Left Fixed Sidebar Navigation */}
      <Sidebar
        activeSection={activeSection}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Area (Offset by sidebar width on desktop) */}
      <div className="lg:pl-24 xl:pl-28 flex flex-col min-h-screen">
        <main className="flex-grow">
          
          {/* 1. HERO with 3D Modular Cubes & Celestial Halo */}
          <Hero
            onOpenResume={() => setIsResumeOpen(true)}
            isDark={isDark}
          />

          {/* 2. ABOUT ME (Cream Editorial Panel + 4 Story Blocks) */}
          <About />

          {/* 3. MY JOURNEY (Chronology & Timeline) */}
          <Journey />

          {/* 4. SKILLS & CONSTELLATION (4-Column Overview + Full Relationship Inspector) */}
          <Skills onSelectProject={handleOpenProjectById} />

          {/* 5. PROJECT LAB (Featured Projects + Primary Architecture Pipeline; Password Generator Removed) */}
          <ProjectLab onOpenCaseStudy={(proj) => setSelectedProject(proj)} />

          {/* 6. NRI-U HACKATHON JOURNEY (5 Stages & Showcase Linkage) */}
          <HackathonJourney
            onOpenGenUI={() => handleOpenProjectById('genui-ai')}
            onOpenCert={() => handleOpenCertById('nri-u-hackathon')}
          />

          {/* 7. EXPERIENCE & INTERNSHIPS (Full Details & Verified Credentials) */}
          <Experience onOpenCert={handleOpenCertById} />

          {/* 8. CERTIFICATION VAULT (All 7 Authentic Verified Certifications with Credly link & Document Viewer) */}
          <CertVault onOpenCert={handleOpenCertById} />

          {/* 9. EDUCATION (Academic Milestones, Percentages & Highlights) */}
          <Education />

          {/* 10. CONTACT (Direct Info, Copy Buttons, Mail Trigger & Contact Form) */}
          <Contact />
        </main>

        {/* Minimal Luxury Footer */}
        <Footer />
      </div>

      {/* Case Study Fullscreen Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Certificate Document Viewer Modal (With Credly Link, Zoom, Download) */}
      <CertModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />

      {/* Resume Document Viewer Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
