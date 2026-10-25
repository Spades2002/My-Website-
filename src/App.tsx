import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SkillsMatrix } from './components/SkillsMatrix';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { DocsLibrary } from './components/DocsLibrary';
import { CvPage } from './components/CvPage';
import { ProjectItem } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [docsModalOpen, setDocsModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'cv'>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      return (hash === '#cv' || hash === '#resume') ? 'cv' : 'home';
    }
    return 'home';
  });

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      const isCv = hash === '#cv' || hash === '#resume';
      setCurrentView(isCv ? 'cv' : 'home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateToCv = () => {
    window.location.hash = 'cv';
    setCurrentView('cv');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    if (window.location.hash === '#cv' || window.location.hash === '#resume') {
      history.pushState("", document.title, window.location.pathname + window.location.search);
    }
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-white overflow-x-hidden w-full max-w-full transition-colors duration-300">
        {/* Navigation */}
        <Navbar
          onOpenDocs={() => setDocsModalOpen(true)}
          onViewResume={navigateToCv}
          onGoHome={navigateToHome}
          isResumeView={currentView === 'cv'}
        />

        {/* Dynamic View: CV Page vs. Main Portfolio */}
        {currentView === 'cv' ? (
          <div className="pt-20 flex-1">
            <CvPage onBack={navigateToHome} />
          </div>
        ) : (
          <main className="flex-1 w-full max-w-full overflow-x-hidden">
            <Hero 
              onOpenDocs={() => setDocsModalOpen(true)} 
              onViewCv={navigateToCv}
            />
            <About />
            <SkillsMatrix />
            <Projects onSelectProject={(p) => setSelectedProject(p)} />
            <Experience />
            <Education />
            <Certifications />
            <Contact />
          </main>
        )}

        {/* Footer */}
        <Footer onOpenDocs={() => setDocsModalOpen(true)} />

        {/* Interactive Project Detail Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

        {/* Technical Documents & Reports Library Modal */}
        <DocsLibrary
          isOpen={docsModalOpen}
          onClose={() => setDocsModalOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}
