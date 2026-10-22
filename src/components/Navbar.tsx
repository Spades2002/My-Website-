import React, { useState, useEffect } from 'react';
import { Download, Github, Linkedin, Menu, X, FileText, ChevronDown } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  onOpenDocs: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDocs }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cvDropdownOpen, setCvDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 p-1.5 flex items-center justify-center transition-transform group-hover:scale-105">
              <img
                src={PORTFOLIO_DATA.profile.logoImage}
                alt="Staines Rajith Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = PORTFOLIO_DATA.profile.faviconImage;
                }}
              />
            </div>
            <div>
              <span className="text-base font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                Staines Rajith
              </span>
              <span className="hidden sm:block text-xs text-slate-400 font-mono">
                MSc Robotics & AI
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-cyan-400 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={onOpenDocs}
              className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 flex items-center gap-1.5"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Papers & PDFs</span>
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Social Icons */}
            <a
              href={PORTFOLIO_DATA.profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800/80 transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* CV Dropdown */}
            <div className="relative">
              <button
                onClick={() => setCvDropdownOpen(!cvDropdownOpen)}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold tracking-wide hover:from-cyan-400 hover:to-blue-500 transition-all shadow-md shadow-cyan-500/20 active:scale-95"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume / CV</span>
                <ChevronDown className="w-3 h-3 opacity-80" />
              </button>

              {cvDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-56 rounded-xl bg-slate-900 border border-slate-700 shadow-2xl py-2 z-50 text-xs animate-in fade-in slide-in-from-top-2"
                  onMouseLeave={() => setCvDropdownOpen(false)}
                >
                  <a
                    href={PORTFOLIO_DATA.profile.cvUrl}
                    download="Staines_Rajith_CV.pdf"
                    className="flex items-center gap-2.5 px-4 py-2.5 text-slate-200 hover:bg-slate-800 hover:text-cyan-400"
                    onClick={() => setCvDropdownOpen(false)}
                  >
                    <FileText className="w-4 h-4 text-cyan-400" />
                    <div>
                      <div className="font-semibold">Standard CV</div>
                      <div className="text-[10px] text-slate-400">PDF Document (55 KB)</div>
                    </div>
                  </a>
                  <a
                    href={PORTFOLIO_DATA.profile.stainesCvUrl}
                    download="Staines_Rajith_Extended_CV.pdf"
                    className="flex items-center gap-2.5 px-4 py-2.5 text-slate-200 hover:bg-slate-800 hover:text-cyan-400 border-t border-slate-800/80"
                    onClick={() => setCvDropdownOpen(false)}
                  >
                    <FileText className="w-4 h-4 text-blue-400" />
                    <div>
                      <div className="font-semibold">Comprehensive CV</div>
                      <div className="text-[10px] text-slate-400">Detailed PDF (169 KB)</div>
                    </div>
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-6 py-5 shadow-2xl space-y-4 animate-in slide-in-from-top-4">
          <div className="grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-slate-900 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDocs();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 text-xs font-medium text-slate-200"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Browse Technical Reports & Papers</span>
            </button>
            <div className="flex gap-2">
              <a
                href={PORTFOLIO_DATA.profile.cvUrl}
                download
                className="flex-1 text-center py-2 px-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold"
              >
                Download CV
              </a>
              <a
                href={PORTFOLIO_DATA.profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={PORTFOLIO_DATA.profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
