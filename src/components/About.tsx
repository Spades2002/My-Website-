import React from 'react';
import { Globe, Music, Bike, HeartPulse, Cpu, Compass, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <Globe className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />,
      title: "Global Perspective",
      desc: "Lived & studied across India, Zambia (15 years), and the UK. Practical, resourceful engineering ethos."
    },
    {
      icon: <HeartPulse className="w-4 h-4 text-rose-500 dark:text-rose-400" />,
      title: "Medical & Healthcare Robotics",
      desc: "Passionate about soft tactile sensing, surgical systems, and assistive technologies that elevate human life."
    },
    {
      icon: <Cpu className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
      title: "Industrial & Embedded Rigour",
      desc: "Proven track record with PLC automation, real-time control, folded-optics hardware, and deep learning."
    },
    {
      icon: <Music className="w-4 h-4 text-amber-500 dark:text-amber-400" />,
      title: "Discipline & Competition",
      desc: "Classical music training instills patience and precision; mountain biking and squash drive athletic focus."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950/60 border-t border-slate-200 dark:border-slate-900 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-cyan-950/50 border border-slate-200 dark:border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-xs font-mono font-medium mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>BACKGROUND & PERSPECTIVE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Engineering solutions grounded in international experience, analytical discipline, and robotics craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: 3-Image Collage with tech badges */}
          <div className="lg:col-span-5">
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="mx-auto max-w-md"
            >
              <div className="rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl transition-colors">
                {/* 3-Photo Collage occupying the exact same visual footprint */}
                <div className="p-2 space-y-2 bg-slate-100/70 dark:bg-slate-950/50">
                  {/* Top Photo: Cycling Action Shot */}
                  <div className="relative h-48 sm:h-52 w-full rounded-xl overflow-hidden bg-slate-900 group">
                    <img
                      src="/images/my-photo4.jpg"
                      alt="Staines Rajith cycling competition"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Bottom Row: 2 Photos Side-by-Side */}
                  <div className="grid grid-cols-2 gap-2">
                    {/* Left: Mountain Summit */}
                    <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-900 group">
                      <img
                        src="/images/mountain-summit.jpeg"
                        alt="Staines Rajith at mountain summit"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = '/assets/aistudio/IMG_8704_c164b39d.jpeg';
                        }}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Right: Forest River Nature Trail */}
                    <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-900 group">
                      <img
                        src="/images/forest-trail.jpeg"
                        alt="Staines Rajith on nature trail"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = '/assets/aistudio/IMG_1539_8297cbc2.jpeg';
                        }}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-50 dark:bg-slate-900/95 border-t border-slate-200 dark:border-slate-800 space-y-1.5">
                  <div className="flex items-center text-xs">
                    <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>BEng (Hons) & MSc (Distinction)</span>
                    </span>
                  </div>
                  <div className="flex items-center text-[11px] text-slate-500 dark:text-slate-400 pt-1 border-t border-slate-200 dark:border-slate-800/60">
                    <span>Robotics & AI Researcher</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Narrative paragraphs & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              {PORTFOLIO_DATA.profile.aboutParagraphs.map((para, i) => (
                <p key={i}>
                  {para}
                </p>
              ))}
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -2 }}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800/90 shadow-sm transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="p-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs">
                      {h.icon}
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                      {h.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                    {h.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
