import React, { useState } from 'react';
import { Cpu, Terminal, Eye, Wrench, Shield, Search } from 'lucide-react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const SkillsMatrix: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const getCategoryIcon = (title: string) => {
    if (title.includes('Robotics')) return <Cpu className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />;
    if (title.includes('AI')) return <Eye className="w-4 h-4 text-purple-600 dark:text-purple-400" />;
    if (title.includes('Programming')) return <Terminal className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
    if (title.includes('Engineering')) return <Wrench className="w-4 h-4 text-amber-600 dark:text-amber-400" />;
    return <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
  };

  const filteredCategories = PORTFOLIO_DATA.skillCategories.map((cat) => ({
    ...cat,
    skills: cat.skills.filter((s) =>
      s.toLowerCase().includes(searchTerm.toLowerCase().trim())
    )
  })).filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 dark:bg-cyan-950/50 border border-slate-300 dark:border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-xs font-mono font-medium mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>TECHNICAL CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Skills & Engineering Stack.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
              Cross-disciplinary proficiency spanning hardware electronics, embedded control, and deep learning.
            </p>
          </div>

          {/* Quick Skill Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter skills (e.g., PLC, PyTorch)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors shadow-sm"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700 dark:hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <motion.div
              key={cat.title}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-slate-100 dark:border-slate-800/80">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/80">
                    {getCategoryIcon(cat.title)}
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 hover:border-cyan-500/40 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
