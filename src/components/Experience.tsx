import React from 'react';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-cyan-950/50 border border-slate-200 dark:border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-xs font-mono font-medium mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Work Experience.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Hands-on industrial automation, mineral processing instrumentation, academic mentoring, and team operations.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-32 md:ml-40 space-y-12">
          {PORTFOLIO_DATA.experience.map((item) => (
            <div key={item.id} className="relative pl-6 sm:pl-8 group">
              {/* Timeline Marker */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-cyan-500 group-hover:scale-125 transition-transform shadow-xs" />

              {/* Date Badge (Desktop Left) */}
              <div className="hidden sm:block absolute -left-36 top-1.5 w-28 text-right text-xs font-mono text-cyan-700 dark:text-cyan-400 font-bold">
                {item.period}
              </div>

              {/* Main Card */}
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/90 p-6 hover:shadow-md transition-all space-y-4"
              >
                <div className="pb-3 border-b border-slate-200 dark:border-slate-800/80 space-y-1.5">
                  {/* Role Name (Left) & City/Country Location (Right-aligned, same line) */}
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {item.role}
                    </h3>
                    {item.location && (
                      <span className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 shrink-0 text-right">
                        {item.location}
                      </span>
                    )}
                  </div>

                  {/* Company Name as Hyperlink (Same color) */}
                  <div className="flex items-center justify-between gap-2">
                    {item.companyUrl ? (
                      <a
                        href={item.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-cyan-700 dark:text-cyan-400 hover:underline inline-flex items-center gap-1.5 transition-colors group/link"
                        title={`Visit ${item.company} website`}
                      >
                        <span>{item.company}</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover/link:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <div className="text-sm font-semibold text-cyan-700 dark:text-cyan-400">
                        {item.company}
                      </div>
                    )}
                    <div className="sm:hidden inline-flex items-center gap-1.5 text-xs font-mono text-cyan-700 dark:text-cyan-400 font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>
                  </div>
                </div>

                {/* Bullets */}
                <div className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {item.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5">
                      <span className="text-cyan-600 dark:text-cyan-400 font-bold mt-0.5">•</span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-700 dark:text-slate-400 shadow-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
