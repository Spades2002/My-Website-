import React from 'react';
import { Award, CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>INDUSTRY RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Certifications & Training
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Professional specializations across industrial PLC controls, embedded ML, software architecture, and CAD.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PORTFOLIO_DATA.achievements.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/40 transition-all flex items-start gap-4 group"
            >
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-cyan-400 group-hover:text-cyan-300 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-5 h-5" />
              </div>

              <div className="space-y-1 flex-1">
                <div className="text-[11px] font-mono text-cyan-400 font-medium uppercase tracking-wider">
                  {item.category}
                </div>
                <h3 className="font-bold text-white text-sm sm:text-base leading-snug group-hover:text-cyan-200 transition-colors">
                  {item.title}
                </h3>
                <div className="text-xs text-slate-400 font-medium flex items-center gap-1.5 pt-1">
                  <span>Issued by</span>
                  <span className="text-slate-200 font-semibold">{item.issuer}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
