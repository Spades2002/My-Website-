import React from 'react';
import { Download, ArrowDown, Github, Linkedin, Mail, Sparkles, Award, Cpu, ShieldCheck, GraduationCap, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenDocs: () => void;
  onViewCv?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDocs, onViewCv }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden transition-colors duration-300">
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/10 dark:bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Engineering grid texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and introduction */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Top university pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-cyan-950/60 border border-slate-200 dark:border-cyan-500/30 text-slate-800 dark:text-cyan-300 text-xs font-semibold tracking-wide shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>Queen Mary University of London & Loughborough Alum</span>
            </div>

            {/* Davis Ryan inspired bold typography */}
            <div className="space-y-2">
              <p className="text-cyan-600 dark:text-cyan-400 font-mono text-sm tracking-widest uppercase font-semibold">
                {PORTFOLIO_DATA.profile.intro}
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                Staines Rajith,
                <span className="block font-bold text-3xl sm:text-5xl lg:text-5xl mt-2 pb-2.5 leading-normal bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-600 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-400 bg-clip-text text-transparent">
                  a Robotics & AI Engineer.
                </span>
              </h1>

              {/* Distinction Subtitle Badge */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-600 dark:text-slate-400 text-sm font-medium pt-1.5">
                <GraduationCap className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span className="font-semibold text-slate-800 dark:text-slate-300">Graduated with Distinction</span>
                <span className="text-slate-400 dark:text-slate-600">•</span>
                <span>MSc Robotics & AI</span>
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {PORTFOLIO_DATA.profile.heroBio}
            </p>

            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 italic">
              Scroll below to see how I’m developing soft tactile sensors, autonomous rover subsystems, and deep learning vision pipelines.
            </p>

            {/* Quick highlights badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 shadow-sm">
                <Cpu className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                Soft Robotics & Tactile Sensing
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 shadow-sm">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                RAL Space Rover Award Winner
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                Industrial PLC & Automation
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-3">
              <a
                href="#projects"
                className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-sm shadow-md shadow-cyan-600/25 transition-all hover:scale-[1.02] active:scale-95"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              <button
                onClick={onViewCv}
                className="flex-1 sm:flex-initial justify-center inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 font-semibold text-sm shadow-sm transition-all hover:border-cyan-500/50"
              >
                <FileText className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>View CV</span>
              </button>

              <button
                onClick={onOpenDocs}
                className="flex-1 sm:flex-initial justify-center inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 font-medium text-sm shadow-sm transition-all"
              >
                <FileText className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Papers & PDFs</span>
              </button>
            </div>

            {/* Social Links Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-2 pt-2 text-slate-500 dark:text-slate-400 text-xs max-w-full">
              <span className="font-mono text-slate-400 dark:text-slate-500">Connect:</span>
              <a
                href={PORTFOLIO_DATA.profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-600 dark:hover:text-cyan-400 inline-flex items-center gap-1.5 transition-colors font-medium"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">•</span>
              <a
                href={PORTFOLIO_DATA.profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-600 dark:hover:text-cyan-400 inline-flex items-center gap-1.5 transition-colors font-medium"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">•</span>
              <a
                href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                className="hover:text-cyan-600 dark:hover:text-cyan-400 inline-flex items-center gap-1.5 transition-colors truncate max-w-[200px] sm:max-w-none font-medium"
                title={PORTFOLIO_DATA.profile.email}
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span className="truncate">{PORTFOLIO_DATA.profile.email}</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Profile Portrait Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group max-w-sm sm:max-w-md w-full">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500" />

              {/* Main Card */}
              <div className="relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 shadow-xl dark:shadow-2xl overflow-hidden transition-colors">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-950">
                  <img
                    src={PORTFOLIO_DATA.profile.heroImage}
                    alt={PORTFOLIO_DATA.profile.name}
                    className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />

                  {/* Floating Badge on Photo */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-700/60 text-xs">
                    <div className="flex items-center justify-between text-white">
                      <div>
                        <p className="font-bold text-white">Staines Rajith</p>
                        <p className="text-[11px] text-cyan-300 font-mono">BEng (Hons) • MSc Robotics & AI</p>
                      </div>
                      <span className="flex h-2.5 w-2.5 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Sub-card footer banner */}
                <div className="pt-3 px-2 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Available for Robotics Roles
                  </span>
                  <button
                    onClick={onOpenDocs}
                    className="text-cyan-600 dark:text-cyan-400 hover:underline font-semibold"
                  >
                    View Research Papers →
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-slate-200 dark:border-slate-800/80">
          {PORTFOLIO_DATA.stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -3 }}
              className="p-4 rounded-xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 shadow-sm transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent font-mono">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                {stat.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
