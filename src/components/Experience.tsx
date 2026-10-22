import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Hands-on industrial automation, mineral processing instrumentation, academic mentoring, and team operations.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-slate-800 ml-4 sm:ml-32 md:ml-40 space-y-12">
          {PORTFOLIO_DATA.experience.map((item, index) => (
            <div key={item.id} className="relative pl-6 sm:pl-8 group">
              {/* Timeline Marker */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-500 group-hover:scale-125 transition-transform" />

              {/* Date Badge (Desktop Left) */}
              <div className="hidden sm:block absolute -left-36 top-1 w-28 text-right text-xs font-mono text-cyan-400 font-semibold">
                {item.period}
              </div>

              {/* Main Card */}
              <div className="rounded-2xl bg-slate-900/60 border border-slate-800/90 p-5 sm:p-6 hover:border-slate-700/80 transition-all space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 border-b border-slate-800/80">
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {item.role}
                    </h3>
                    <div className="text-sm font-medium text-cyan-400">
                      {item.company}
                    </div>
                  </div>
                  <div className="sm:hidden inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 pt-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Bullets */}
                <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded-md bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-400"
                    >
                      {skill}
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
