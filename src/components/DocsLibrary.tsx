import React from 'react';
import { X, FileText, Download, ExternalLink, Sparkles, BookOpen } from 'lucide-react';

interface DocsLibraryProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DocsLibrary: React.FC<DocsLibraryProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const documents = [
    {
      title: "Photoelastic Tactile Sensor for a Robotic Palm",
      category: "MSc Dissertation & Research",
      desc: "Comprehensive dissertation detailing folded-optics design, machine learning force regression (0.244 N MAE), and sub-millimetre contact localisation with Shadow Robotics.",
      url: "/Photoelastic Tactile Sensor.pdf",
      size: "7.6 MB"
    },
    {
      title: "UKSEDS Olympus Rover - Critical Design Review (CDR)",
      category: "Space Robotics Competition",
      desc: "Awarded 'Best Critical Design Review' at RAL Space finals. Covers power distribution, telemetry, Raspberry Pi integration, and fault tolerance.",
      url: "/ORT - CDR.pdf",
      size: "12.8 MB"
    },
    {
      title: "Modular Lunar Augmentation System - Technical Feasibility Study",
      category: "Airbus Competition Finalist",
      desc: "Detailed engineering analysis of variable-impedance knee actuation, biomechanical load transfer, and lunar regolith environmental constraints.",
      url: "/Technical Feasibility Study.pdf",
      size: "215 KB"
    },
    {
      title: "Modular Lunar Augmentation System - Business Report",
      category: "Airbus Competition Finalist",
      desc: "Commercial viability proposal, modular manufacturing supply chain, unit economics, and aerospace deployment roadmap.",
      url: "/Business Report.pdf",
      size: "331 KB"
    },
    {
      title: "Eco-Friendly Intra-Campus Monorail System Design",
      category: "WSP Industry Brief",
      desc: "Full engineering project report on route topography, automated vehicle carriage dynamics, and zero-emission transit infrastructure.",
      url: "/Monorail project report.pdf",
      size: "365 KB"
    },
    {
      title: "Roll-Angle Measurement Device - Literature Review",
      category: "Sensors & Optical Instrumentation",
      desc: "Theoretical review of Sagnac fiber-optic interferometry, oscilloscope data analysis, and angular velocity integration limits.",
      url: "/Interferometer literature review.pdf",
      size: "6.1 MB"
    },
    {
      title: "Gymnastics Stamp-Bug & Rover Datasheet",
      category: "Robotics & Embedded Systems",
      desc: "Hardware specifications, microcontroller pinouts, Siemens NX CAD models, and motor control telemetry parameters.",
      url: "/Datasheet for stampbug.pdf",
      size: "406 KB"
    },
    {
      title: "Staines Rajith - Curriculum Vitae (CV)",
      category: "Curriculum Vitae",
      desc: "Summary of robotics engineering experience, academic background, technical skills, and key projects.",
      url: "/CV.pdf",
      size: "56 KB"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-1 pr-8">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium">
            <BookOpen className="w-3.5 h-3.5" />
            <span>ORIGINAL TECHNICAL REPOSITORY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Engineering Reports, Papers & Dissertations
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Direct access to all 8 original research reports, competition review PDFs, and CV.
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {documents.map((doc, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-3 group"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400">
                  <span>{doc.category}</span>
                  <span className="text-slate-500">{doc.size}</span>
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {doc.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {doc.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white font-medium"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  <span>Open PDF</span>
                </a>

                <a
                  href={doc.url}
                  download
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-600/20 hover:bg-cyan-600 text-cyan-300 hover:text-white border border-cyan-500/30 text-xs font-semibold transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 font-semibold"
          >
            Close Document Library
          </button>
        </div>
      </div>
    </div>
  );
};
