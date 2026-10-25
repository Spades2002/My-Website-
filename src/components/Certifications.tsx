import React, { useState } from 'react';
import { Award, ShieldCheck, Eye, ExternalLink, Download, X, FileCheck, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_DATA, AchievementItem } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<AchievementItem | null>(null);

  return (
    <section id="certifications" className="py-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-cyan-950/50 border border-slate-200 dark:border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-xs font-mono font-medium mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Certifications.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Professional specializations across industrial PLC controls, embedded systems, machine learning, and CAD. Click any tile to view the official verified certificate.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.achievements.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/90 hover:border-cyan-500/50 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform shadow-xs">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  {item.date && (
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 font-medium">
                      {item.date}
                    </span>
                  )}
                </div>

                <div className="space-y-1.5">
                  <div className="text-[11px] font-mono text-cyan-700 dark:text-cyan-400 font-bold uppercase tracking-wider">
                    {item.category}
                  </div>
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-base leading-snug group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {item.title}.
                  </h3>
                </div>

                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1.5 pt-1">
                  <span>Issued by</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">{item.issuer}</span>
                </div>
              </div>

              {/* View Certificate Button on each tile */}
              <div className="pt-5 mt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedCert(item)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold shadow-xs transition-all hover:scale-[1.02] active:scale-95"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Certificate</span>
                </button>

                <a
                  href={item.certificatePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500 transition-colors shadow-xs"
                  title="Open Certificate PDF in new tab"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Viewer Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl max-h-[92vh] overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-5 sm:p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-950/60">
                <div className="space-y-1 pr-6">
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase">
                    <FileCheck className="w-3.5 h-3.5" />
                    <span>{selectedCert.issuer}</span>
                    {selectedCert.date && <span>• {selectedCert.date}</span>}
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white leading-snug">
                    {selectedCert.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Embedded Certificate Viewer */}
              <div className="flex-1 min-h-[500px] bg-slate-100 dark:bg-slate-950 p-2 sm:p-4 overflow-hidden flex items-center justify-center">
                <iframe
                  src={`${selectedCert.certificatePdf}#toolbar=0`}
                  title={selectedCert.title}
                  className="w-full h-full min-h-[500px] rounded-xl border border-slate-200 dark:border-slate-800 bg-white"
                />
              </div>

              {/* Modal Footer Controls */}
              <div className="p-4 sm:p-5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Official Verified Completion Certificate</span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={selectedCert.certificatePdf}
                    download
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold shadow-xs transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </a>

                  <a
                    href={selectedCert.certificatePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 text-xs font-semibold transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open in New Tab</span>
                  </a>

                  <button
                    onClick={() => setSelectedCert(null)}
                    className="px-4 py-2 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
