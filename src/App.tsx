import React, { useState } from 'react';
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
import { ProjectItem } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [docsModalOpen, setDocsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-white">
      {/* Navigation */}
      <Navbar onOpenDocs={() => setDocsModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenDocs={() => setDocsModalOpen(true)} />
        <About />
        <SkillsMatrix />
        <Projects onSelectProject={(p) => setSelectedProject(p)} />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Footer (with Made with ❤ and Hugo Profile removed) */}
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
  );
}
