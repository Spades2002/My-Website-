import React, { useState } from 'react';
import { Layers, Download, Github, Search, ArrowUpRight, ChevronLeft, ChevronRight, LayoutGrid, SlidersHorizontal, FileText, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  const [carouselIndex, setCarouselIndex] = useState(0);

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

  const nextSlide = () => {
    if (filteredProjects.length === 0) return;
    setCarouselIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevSlide = () => {
    if (filteredProjects.length === 0) return;
    setCarouselIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const currentProject = filteredProjects[carouselIndex] || filteredProjects[0];

  return (
    <section id="projects" className="py-24 bg-slate-100/60 dark:bg-slate-950/70 border-t border-slate-200 dark:border-slate-900 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 dark:bg-cyan-950/50 border border-slate-300 dark:border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-xs font-mono font-medium mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>FEATURED WORK</span>
            </div>
            {/* Davis Ryan styled title with period */}
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Projects.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Research dissertations, competition rovers, soft tactile palm sensors, and real-time computer vision models.
            </p>
          </div>

          {/* View Mode Toggle & Search */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Carousel vs Grid toggle */}
            <div className="inline-flex p-1 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <button
                onClick={() => setViewMode('carousel')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === 'carousel'
                    ? 'bg-cyan-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Showcase Slider</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === 'grid'
                    ? 'bg-cyan-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>All Grid</span>
              </button>
            </div>

            {/* Search Box */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCarouselIndex(0);
                }}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-cyan-500 shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700 dark:hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-slate-200 dark:border-slate-900">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                setSelectedCategory(c.id);
                setCarouselIndex(0);
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === c.id
                  ? 'bg-slate-900 dark:bg-cyan-500 text-white dark:text-slate-950 font-bold shadow-sm'
                  : 'bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-200 dark:border-slate-800 shadow-sm'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* CAROUSEL VIEW (Inspired by Davis Ryan's homepage slider) */}
        {viewMode === 'carousel' && currentProject && (
          <div className="space-y-6">
            <div className="relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden transition-colors">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                {/* Visual Image container */}
                <div
                  className="lg:col-span-7 relative aspect-[16/10] bg-slate-950 overflow-hidden cursor-pointer group"
                  onClick={() => onSelectProject(currentProject)}
                >
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60" />

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md text-cyan-300 font-mono text-xs font-semibold border border-slate-700/80">
                      {currentProject.categoryLabel}
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4">
                    <span className="px-3 py-1.5 rounded-xl bg-cyan-600/90 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg shadow-black/40">
                      <span>Inspect Project</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Information content */}
                <div className="lg:col-span-5 p-6 sm:p-10 space-y-5">
                  <div className="space-y-2">
                    <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold tracking-wider uppercase">
                      Featured Project • {carouselIndex + 1} of {filteredProjects.length}
                    </div>
                    {/* Title with period */}
                    <h3
                      onClick={() => onSelectProject(currentProject)}
                      className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer leading-tight"
                    >
                      {currentProject.title}.
                    </h3>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                    {currentProject.content}
                  </p>

                  {/* Highlights list */}
                  {currentProject.highlights && (
                    <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                      {currentProject.highlights.slice(0, 2).map((h, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400">
                          <span className="text-cyan-500 mt-0.5">•</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {currentProject.badges.map((b) => (
                      <span
                        key={b}
                        className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-700 dark:text-slate-400"
                      >
                        {b}
                      </span>
                    ))}
                  </div>

                  {/* Actions Bar (Davis Ryan styled "Learn More") */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => onSelectProject(currentProject)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold text-xs shadow-md transition-all hover:scale-105 active:scale-95"
                    >
                      <span>Learn More</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    {currentProject.featured && (
                      <a
                        href={currentProject.featured.link}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-500/30 font-semibold text-xs transition-colors hover:bg-cyan-100 dark:hover:bg-cyan-900/40"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>{currentProject.featured.name}</span>
                      </a>
                    )}

                    {currentProject.links?.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                        title="Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel navigation bar */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-1.5">
                {filteredProjects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCarouselIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      carouselIndex === idx
                        ? 'w-8 bg-cyan-600 dark:bg-cyan-400'
                        : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shadow-sm"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shadow-sm"
                  aria-label="Next project"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* GRID VIEW */}
        {(viewMode === 'grid' || !currentProject) && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="group rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/90 hover:border-cyan-500/40 hover:shadow-xl transition-all flex flex-col overflow-hidden shadow-sm"
              >
                {/* Thumbnail */}
                <div
                  className="relative aspect-video overflow-hidden bg-slate-950 cursor-pointer"
                  onClick={() => onSelectProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />

                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-[10px] font-mono font-medium text-cyan-300">
                      {project.categoryLabel}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="px-2.5 py-1 rounded-md bg-cyan-600 text-white text-[11px] font-semibold flex items-center gap-1 shadow-md">
                      <span>Learn More</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3
                      onClick={() => onSelectProject(project)}
                      className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors cursor-pointer line-clamp-2"
                    >
                      {project.title}.
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                      {project.content}
                    </p>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.badges.slice(0, 4).map((b) => (
                      <span
                        key={b}
                        className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400 font-mono"
                      >
                        {b}
                      </span>
                    ))}
                    {project.badges.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-[11px] text-slate-400 font-mono">
                        +{project.badges.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      {project.featured && (
                        <a
                          href={project.featured.link}
                          download
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400 hover:underline font-semibold"
                          title={project.featured.name}
                        >
                          <FileText className="w-3.5 h-3.5" />
                          <span className="truncate max-w-[130px]">
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
                          className="p-1.5 rounded text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                          title="GitHub"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      ))}
                    </div>

                    <button
                      onClick={() => onSelectProject(project)}
                      className="text-xs font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400"
                    >
                      Learn More →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 bg-white dark:bg-slate-900/30 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <p className="text-slate-500 dark:text-slate-400 text-sm">No projects matched your criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 px-4 py-1.5 rounded-lg bg-cyan-600 text-white text-xs font-semibold hover:bg-cyan-500"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
