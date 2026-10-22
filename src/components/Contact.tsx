import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, Send, MapPin, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PORTFOLIO_DATA.profile.email}?subject=${encodeURIComponent(
      subject || 'Inquiry regarding Robotics / AI Engineering'
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-950/80 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
              <Mail className="w-3.5 h-3.5" />
              <span>COMMUNICATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              {PORTFOLIO_DATA.contact.heading}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl mx-auto">
              {PORTFOLIO_DATA.contact.content}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Left Column: Direct Info & Quick Copy */}
            <div className="md:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
                <h3 className="font-bold text-white text-base">
                  Contact Information
                </h3>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="flex items-center gap-2.5 text-slate-300">
                      <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span className="truncate max-w-[170px] font-mono text-xs">
                        {PORTFOLIO_DATA.profile.email}
                      </span>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                      title="Copy email to clipboard"
                    >
                      {copied ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  <a
                    href={PORTFOLIO_DATA.profile.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <Linkedin className="w-4 h-4 text-blue-400" />
                      <span>linkedin.com/in/stainesrajith</span>
                    </div>
                    <span className="text-slate-500 text-xs">↗</span>
                  </a>

                  <a
                    href={PORTFOLIO_DATA.profile.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <Github className="w-4 h-4 text-slate-300" />
                      <span>github.com/Spades2002</span>
                    </div>
                    <span className="text-slate-500 text-xs">↗</span>
                  </a>

                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 text-xs">
                    <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>London, United Kingdom</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800/80">
                  <div className="inline-flex items-center gap-2 text-xs text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Open to graduate engineering opportunities</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Direct Email Composer */}
            <div className="md:col-span-7">
              <form
                onSubmit={handleSendEmail}
                className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4"
              >
                <h3 className="font-bold text-white text-base">
                  Send a Message
                </h3>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Robotics Opportunity / Research Collaboration"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Hello Staines, I came across your portfolio and would like to discuss..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between gap-4">
                  <span className="text-[11px] text-slate-400">
                    Directly launches your default email client
                  </span>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold shadow-md shadow-cyan-600/20 transition-all hover:scale-[1.02] active:scale-95"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Email</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
