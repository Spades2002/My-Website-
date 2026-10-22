import React from 'react';
import { Globe, Music, Bike, HeartPulse, Cpu, Compass, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <Globe className="w-4 h-4 text-cyan-400" />,
      title: "Global Perspective",
      desc: "Lived & studied across India, Zambia (15 years), and the UK. Practical, resourceful engineering ethos."
    },
    {
      icon: <HeartPulse className="w-4 h-4 text-rose-400" />,
      title: "Medical & Healthcare Robotics",
      desc: "Passionate about soft tactile sensing, surgical systems, and assistive technologies that elevate human life."
    },
    {
      icon: <Cpu className="w-4 h-4 text-blue-400" />,
      title: "Industrial & Embedded Rigour",
      desc: "Proven track record with PLC automation, real-time control, folded-optics hardware, and deep learning."
    },
    {
      icon: <Music className="w-4 h-4 text-amber-400" />,
      title: "Discipline & Competition",
      desc: "Classical music training instills patience and precision; mountain biking and squash drive athletic focus."
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-950/60 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>BACKGROUND & PERSPECTIVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About Me
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Engineering solutions grounded in international experience, analytical discipline, and robotics craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Image with tech badges */}
          <div className="lg:col-span-5">
            <div className="mx-auto max-w-md">
              <div className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl group">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={PORTFOLIO_DATA.profile.aboutImage}
                    alt="Staines Rajith in lab"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-slate-900/95 border-t border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-white flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>BEng (Hons) & MSc Graduate</span>
                    </span>
                    <span className="text-cyan-400 font-mono text-[11px]">QMUL • London</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-slate-800/60">
                    <span>Robotics & AI Researcher</span>
                    <span className="text-slate-500">Autonomous Systems</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative paragraphs & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              {PORTFOLIO_DATA.profile.aboutParagraphs.map((para, i) => (
                <p key={i} className="text-slate-300">
                  {para}
                </p>
              ))}
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/90 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="p-1.5 rounded-lg bg-slate-800/80">
                      {h.icon}
                    </div>
                    <h3 className="font-semibold text-white text-sm">
                      {h.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-normal">
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
