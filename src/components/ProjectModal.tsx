import React from 'react';
import { X, ExternalLink, Download, Github, CheckCircle2, FileText, Layers } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 pr-8">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium">
            <Layers className="w-3.5 h-3.5" />
            <span>{project.categoryLabel}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            {project.title}
          </h2>
        </div>

        {/* Main Image */}
        <div className="rounded-xl overflow-hidden bg-slate-950 border border-slate-800 aspect-video max-h-72">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 font-mono">
            Project Overview
          </h3>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            {project.content}
          </p>
        </div>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 font-mono">
              Key Engineering Highlights
            </h3>
            <div className="space-y-1.5">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Badges / Tech Stack */}
        <div className="space-y-2 pt-2 border-t border-slate-800">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
            Technologies & Domains
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.badges.map((b) => (
              <span
                key={b}
                className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-xs text-slate-300"
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* Actions / Download Documents */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800">
          {project.featured && (
            <a
              href={project.featured.link}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold shadow-md shadow-cyan-600/20 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>{project.featured.name}</span>
            </a>
          )}

          {project.additionalDocs &&
            project.additionalDocs.map((doc) => (
              <a
                key={doc.name}
                href={doc.url}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>{doc.name}</span>
              </a>
            ))}

          {project.links &&
            project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
              >
                {link.icon === 'github' ? (
                  <Github className="w-4 h-4 text-slate-300" />
                ) : (
                  <ExternalLink className="w-4 h-4 text-slate-300" />
                )}
                <span>{link.label || 'View on GitHub'}</span>
              </a>
            ))}

          <button
            onClick={onClose}
            className="ml-auto px-4 py-2 text-xs text-slate-400 hover:text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
