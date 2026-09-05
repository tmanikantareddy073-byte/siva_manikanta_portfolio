import { useState } from 'react';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Footer from './components/Footer';

// Sections
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
    <div className="relative min-h-screen bg-dark-canvas text-dark-text selection:bg-cyber-cyan/20 selection:text-cyber-cyan transition-colors duration-400">
      {/* Subtle Tech Grid Texture */}
      <div className="fixed inset-0 tech-grid-overlay pointer-events-none z-0" />

      {/* Ambient Diffuse Background Glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyber-cyan/[0.04] blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="fixed top-1/3 right-0 w-[500px] h-[500px] bg-cyber-purple/[0.03] blur-[140px] rounded-full pointer-events-none z-0" />

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Floating Navigation Header */}
      <Navbar
        activeSection={activeSection}
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Flow Sections */}
      <main>
        {/* 1. HERO with Digital Intelligence Core */}
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          isDark={isDark}
        />

        {/* 2. ABOUT ME */}
        <About />

        {/* 3. MY JOURNEY */}
        <Journey />

        {/* 4. SKILLS & CONSTELLATION */}
        <Skills onSelectProject={handleOpenProjectById} />

        {/* 5. PROJECT LAB */}
        <ProjectLab onOpenCaseStudy={(proj) => setSelectedProject(proj)} />

        {/* 6. HACKATHON JOURNEY */}
        <HackathonJourney
          onOpenGenUI={() => handleOpenProjectById('genui-ai')}
          onOpenCert={() => handleOpenCertById('nri-u-hackathon')}
        />

        {/* 7. EXPERIENCE & INTERNSHIPS */}
        <Experience onOpenCert={handleOpenCertById} />

        {/* 8. CERTIFICATION VAULT */}
        <CertVault onOpenCert={handleOpenCertById} />

        {/* 9. EDUCATION */}
        <Education />

        {/* 10. CONTACT */}
        <Contact />
      </main>

      {/* Minimal Premium Footer */}
      <Footer />

      {/* Case Study Fullscreen Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Certificate Document Viewer Modal */}
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
