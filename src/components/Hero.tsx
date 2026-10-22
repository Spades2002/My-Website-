import React from 'react';
import { Download, ArrowRight, Github, Linkedin, Mail, Sparkles, Award, Cpu, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenDocs: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDocs }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Queen Mary University of London & Loughborough Alum</span>
            </div>

            <div className="space-y-2">
              <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase font-semibold">
                {PORTFOLIO_DATA.profile.intro}
              </p>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
                {PORTFOLIO_DATA.profile.name}
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">
                {PORTFOLIO_DATA.profile.title}
              </h2>
            </div>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {PORTFOLIO_DATA.profile.heroBio}
            </p>

            {/* Quick highlights badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs text-slate-300">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                Soft Robotics & Tactile Sensing
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs text-slate-300">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                RAL Space Rover Award Winner
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Industrial PLC & Automation
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-95"
              >
                <span>View Engineering Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_DATA.profile.cvUrl}
                download="Staines_Rajith_CV.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-semibold text-sm transition-all hover:border-cyan-500/50"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download CV</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-transparent hover:bg-slate-900 text-slate-300 hover:text-white text-sm font-medium transition-all"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact</span>
              </a>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-2 text-slate-400 text-xs">
              <span className="font-mono text-slate-500">Connect:</span>
              <a
                href={PORTFOLIO_DATA.profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 flex items-center gap-1.5 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={PORTFOLIO_DATA.profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 flex items-center gap-1.5 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                className="hover:text-cyan-400 flex items-center gap-1.5 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{PORTFOLIO_DATA.profile.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Profile Portrait Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm sm:max-w-md w-full">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-600 rounded-3xl blur-lg opacity-40 group-hover:opacity-65 transition duration-500" />

              {/* Main Card */}
              <div className="relative rounded-2xl bg-slate-900 border border-slate-800 p-3 shadow-2xl overflow-hidden">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-950">
                  <img
                    src={PORTFOLIO_DATA.profile.heroImage}
                    alt={PORTFOLIO_DATA.profile.name}
                    className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-75" />

                  {/* Floating Badge on Photo */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-700/60 text-xs">
                    <div className="flex items-center justify-between">
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
                <div className="pt-3 px-2 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Available for Engineering Roles
                  </span>
                  <button
                    onClick={onOpenDocs}
                    className="text-cyan-400 hover:text-cyan-300 font-semibold"
                  >
                    View Research Papers →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-slate-800/80">
          {PORTFOLIO_DATA.stats.map((stat, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/30 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-mono">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
