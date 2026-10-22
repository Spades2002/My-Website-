import React, { useState } from 'react';
import { Layers, Download, Github, Search, ArrowUpRight, Sparkles, FileText } from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Projects (9)' },
    { id: 'robotics', label: 'Robotics & Control' },
    { id: 'ai-ml', label: 'AI & Deep Learning' },
    { id: 'space', label: 'Space & Biomechatronics' },
    { id: 'systems', label: 'Systems & Instrumentation' },
  ];

  const filteredProjects = PORTFOLIO_DATA.projects.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.content.toLowerCase().includes(q) ||
      p.badges.some((b) => b.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-20 bg-slate-950/70 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>PORTFOLIO SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured Engineering Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Research dissertations, competition rovers, computer vision pipelines, and industrial automation designs.
            </p>
          </div>

          {/* Search box */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects by keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-slate-900">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === c.id
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm shadow-cyan-500/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700 hover:shadow-xl hover:shadow-cyan-950/20 transition-all flex flex-col overflow-hidden"
            >
              {/* Thumbnail Image Container */}
              <div
                className="relative aspect-video overflow-hidden bg-slate-950 cursor-pointer"
                onClick={() => onSelectProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/images/my-photo4.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-60" />

                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-[10px] font-mono font-medium text-cyan-300">
                    {project.categoryLabel}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="px-2.5 py-1 rounded-md bg-cyan-600/90 text-white text-[11px] font-semibold flex items-center gap-1 shadow-md">
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3
                    onClick={() => onSelectProject(project)}
                    className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors cursor-pointer line-clamp-2"
                  >
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                    {project.content}
                  </p>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.badges.slice(0, 4).map((b) => (
                    <span
                      key={b}
                      className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[11px] text-slate-400 font-mono"
                    >
                      {b}
                    </span>
                  ))}
                  {project.badges.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-[11px] text-slate-500 font-mono">
                      +{project.badges.length - 4}
                    </span>
                  )}
                </div>

                {/* Bottom Actions Row */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    {project.featured && (
                      <a
                        href={project.featured.link}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-semibold"
                        title={project.featured.name}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span className="truncate max-w-[130px] sm:max-w-[150px]">
                          {project.featured.name.replace('Download ', '')}
                        </span>
                      </a>
                    )}

                    {project.links?.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                        title="GitHub Repo"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="text-xs text-slate-400 hover:text-white font-medium"
                  >
                    Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 bg-slate-900/30 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">No projects matched your criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 px-4 py-1.5 rounded-lg bg-slate-800 text-xs text-cyan-400 font-semibold hover:bg-slate-700"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
