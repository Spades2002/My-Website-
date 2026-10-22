import React from 'react';
import { GraduationCap, BookOpen, Layers, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-950/70 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education & Qualifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Rigorous training in modern robotics, machine learning theory, mechatronics, and closed-loop control engineering.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.education.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-slate-900/60 border border-slate-800/90 p-6 sm:p-8 hover:border-slate-700 transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-semibold text-cyan-400 mt-1">
                      {item.school}
                    </p>
                  </div>
                  <span className="shrink-0 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-300 font-semibold">
                    {item.period}
                  </span>
                </div>
              </div>

              {/* Key Projects */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono">
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Key Academic Projects</span>
                </div>
                <div className="space-y-1.5 pl-1">
                  {item.keyProjects.map((proj, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-cyan-400 mt-0.5">•</span>
                      <span>{proj}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Modules */}
              <div className="space-y-2 pt-4 border-t border-slate-800/80">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono">
                  <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                  <span>Core Modules</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {item.keyModules.map((mod, mIdx) => (
                    <span
                      key={mIdx}
                      className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-xs text-slate-300 font-medium"
                    >
                      {mod}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
