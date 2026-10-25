import React from 'react';
import { ArrowUp, Github, Linkedin, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onOpenDocs: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDocs }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 py-12 text-slate-600 dark:text-slate-400 text-xs transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Identity */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-[8px] overflow-hidden flex items-center justify-center shadow-xs border border-slate-200/70 dark:border-cyan-500/30 bg-white dark:bg-slate-900">
              <img
                src={PORTFOLIO_DATA.profile.logoImage}
                alt="Staines Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = PORTFOLIO_DATA.profile.faviconImage;
                }}
              />
            </div>
            <div>
              <p className="font-bold text-slate-900 dark:text-white text-sm">Staines Rajith</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-500">MSc Robotics & Artificial Intelligence Graduate</p>
            </div>
          </div>

          {/* Quick Footer Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-700 dark:text-slate-300 font-medium">
            <a href="#about" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#education" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Education</a>
            <button
              onClick={onOpenDocs}
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>Research Papers</span>
            </button>
            <a href="#contact" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors border border-slate-200 dark:border-slate-800"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors border border-slate-200 dark:border-slate-800"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1.5 border border-slate-200 dark:border-slate-800"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline text-[11px] font-semibold">Top</span>
            </button>
          </div>
        </div>

        {/* Clean Copyright (Without Hugo Profile and Made with Love) */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-900 text-center text-slate-500 dark:text-slate-500 text-xs">
          <p>© 2026 Staines Rajith. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
