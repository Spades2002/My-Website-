import React from 'react';
import { Download, ArrowLeft, Printer, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface CvPageProps {
  onBack: () => void;
}

export const CvPage: React.FC<CvPageProps> = ({ onBack }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      {/* Top Floating Control Bar */}
      <div className="max-w-4xl mx-auto mb-8 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 font-medium text-sm shadow-sm transition-all hover:-translate-x-0.5"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </button>

        <div className="flex items-center gap-2.5">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-medium shadow-sm transition-colors"
            title="Print CV"
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Print CV</span>
          </button>

          <a
            href={PORTFOLIO_DATA.profile.cvUrl}
            download="Staines_Rajith_CV.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold shadow-md shadow-cyan-600/20 transition-all hover:scale-[1.02] active:scale-95"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download CV (PDF)</span>
          </a>
        </div>
      </div>

      {/* Main CV Sheet - Exact Layout & Information from Uploaded CV */}
      <main className="max-w-4xl mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-12 shadow-xl print:shadow-none print:border-none print:p-0 print:bg-transparent font-sans">
        
        {/* Header - Centered Title & Contact Line as in Uploaded CV */}
        <header className="text-center pb-6 border-b border-slate-300 dark:border-slate-700">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">
            Staines Rajith
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 mt-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <span>Mobile: <a href="tel:+447880804552" className="hover:text-cyan-600 dark:hover:text-cyan-400 font-mono">+447880804552</a></span>
            <span className="text-slate-400 dark:text-slate-600">•</span>
            <span>Email: <a href={`mailto:${PORTFOLIO_DATA.profile.email}`} className="hover:text-cyan-600 dark:hover:text-cyan-400 font-mono underline underline-offset-2">{PORTFOLIO_DATA.profile.email}</a></span>
            <span className="text-slate-400 dark:text-slate-600">•</span>
            <span>Address: London, United Kingdom</span>
            <span className="text-slate-400 dark:text-slate-600">•</span>
            <button 
              onClick={onBack}
              className="text-cyan-700 dark:text-cyan-400 hover:underline font-medium inline-flex items-center gap-1"
            >
              <span>Personal Website</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </header>

        {/* 1. EDUCATION */}
        <section className="pt-6">
          <h2 className="text-sm font-bold tracking-wider uppercase text-slate-900 dark:text-white border-b-2 border-slate-900 dark:border-slate-100 pb-1 mb-4">
            EDUCATION
          </h2>

          <div className="space-y-5">
            {/* Queen Mary University of London */}
            <div className="space-y-1.5 text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-slate-900 dark:text-white">
                <span className="text-sm sm:text-base">Queen Mary University of London</span>
                <span className="font-mono text-xs text-slate-600 dark:text-slate-400">Sep 2025 – Sep 2026</span>
              </div>
              <div className="flex items-center gap-2 italic text-slate-700 dark:text-slate-300">
                <span>Robotics and Artificial Intelligence MSc</span>
                <span className="not-italic text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-700/60">
                  Distinction
                </span>
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1 text-slate-700 dark:text-slate-300 leading-relaxed pt-1">
                <li>
                  <span className="font-semibold text-slate-900 dark:text-white">Key Modules:</span> Cognitive Robotics, Machine Learning and Artificial Intelligence, Medical Robotics and Surgical Techniques, Deep Learning for Data and Image Analysis
                </li>
                <li>
                  <span className="font-semibold text-slate-900 dark:text-white">Key Projects:</span> Electro-optical PPG system, Neural Network model predicting pedestrian behaviour, Few-Shot Learning in Medical Imaging
                </li>
              </ul>
            </div>

            {/* Loughborough University */}
            <div className="space-y-1.5 text-xs sm:text-sm pt-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-slate-900 dark:text-white">
                <span className="text-sm sm:text-base">Loughborough University</span>
                <span className="font-mono text-xs text-slate-600 dark:text-slate-400">Oct 2021 – Jun 2024</span>
              </div>
              <div className="italic text-slate-700 dark:text-slate-300">
                Robotics, Mechatronics and Control Engineering BEng (Hons)
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1 text-slate-700 dark:text-slate-300 leading-relaxed pt-1">
                <li>
                  <span className="font-semibold text-slate-900 dark:text-white">Key Modules:</span> State Space Control, Manufacturing Automation and Control Systems, Electronics, Programming, Interfacing with Mechatronics Systems.
                </li>
                <li>
                  <span className="font-semibold text-slate-900 dark:text-white">Key Projects:</span> Eco-Friendly Intra-Campus Monorail System Design, Gymnastics Stamp-bug and Rover, Vision-Based Robotic Arm Control, Roll-angle Measurement Device
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 2. TECHNICAL SKILLS */}
        <section className="pt-6">
          <h2 className="text-sm font-bold tracking-wider uppercase text-slate-900 dark:text-white border-b-2 border-slate-900 dark:border-slate-100 pb-1 mb-3">
            TECHNICAL SKILLS
          </h2>

          <div className="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
            <div>
              <span className="font-bold">Electrical & Control:</span>{' '}
              <span className="text-slate-700 dark:text-slate-300">
                Siemens PLC, CODESYS, Structured Text, Ladder Logic, EasyEDA, NI Multisim, Microcontrollers, Sensors and Actuators
              </span>
            </div>
            <div>
              <span className="font-bold">Programming:</span>{' '}
              <span className="text-slate-700 dark:text-slate-300">
                Arduino, HTML, Python, C++, ROS, MATLAB
              </span>
            </div>
            <div>
              <span className="font-bold">CAD:</span>{' '}
              <span className="text-slate-700 dark:text-slate-300">
                Fusion 360, Siemens NX, AutoCAD 2D, CATIA, Engineering Drawings
              </span>
            </div>
            <div>
              <span className="font-bold">Software:</span>{' '}
              <span className="text-slate-700 dark:text-slate-300">
                Simulink, Gazebo
              </span>
            </div>
          </div>
        </section>

        {/* 3. WORK EXPERIENCE */}
        <section className="pt-6">
          <h2 className="text-sm font-bold tracking-wider uppercase text-slate-900 dark:text-white border-b-2 border-slate-900 dark:border-slate-100 pb-1 mb-4">
            WORK EXPERIENCE
          </h2>

          <div className="space-y-5">
            {/* First Quantum Minerals - Intern */}
            <div className="space-y-1.5 text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-slate-900 dark:text-white">
                <span>First Quantum Minerals Ltd – Control Engineering Intern</span>
                <span className="font-mono text-xs text-slate-600 dark:text-slate-400">Jul 2022 – Aug 2022</span>
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1.5 text-slate-700 dark:text-slate-300 leading-relaxed">
                <li>
                  Developed and implemented PLC control logic using structured text and ladder logic in CODESYS, defining I/O behaviour and gaining practical experience in system control, automation and safe-state design.
                </li>
                <li>
                  Designed and tested a functional traffic light system, applying structured systems engineering methods and fault testing to meet requirements and deliver a working, repeatable prototype.
                </li>
              </ul>
            </div>

            {/* Trident College */}
            <div className="space-y-1.5 text-xs sm:text-sm pt-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-slate-900 dark:text-white">
                <span>Trident College – Teaching Assistant</span>
                <span className="font-mono text-xs text-slate-600 dark:text-slate-400">Jan 2021 – Mar 2021</span>
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1.5 text-slate-700 dark:text-slate-300 leading-relaxed">
                <li>
                  Supported students in lab-based learning, reinforcing engineering concepts and ensuring safe, structured experimentation.
                </li>
                <li>
                  Delivered tutoring and assisted teachers with grading, improving student engagement and developing clear technical communication skills.
                </li>
              </ul>
            </div>

            {/* First Quantum Minerals - Assistant */}
            <div className="space-y-1.5 text-xs sm:text-sm pt-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-slate-900 dark:text-white">
                <span>First Quantum Minerals Ltd – Technical Team Assistant</span>
                <span className="font-mono text-xs text-slate-600 dark:text-slate-400">Nov 2018 – Dec 2018</span>
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1.5 text-slate-700 dark:text-slate-300 leading-relaxed">
                <li>
                  Monitored and maintained machinery in copper smelting operations, optimising air cooler functionality and airflow efficiency to improve furnace performance and sustain 98% equipment uptime.
                </li>
                <li>
                  Identified and reported equipment abnormalities to supervisors, preventing operational disruptions through rigorous adherence to safety and maintenance protocols.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 4. PROJECTS */}
        <section className="pt-6">
          <h2 className="text-sm font-bold tracking-wider uppercase text-slate-900 dark:text-white border-b-2 border-slate-900 dark:border-slate-100 pb-1 mb-4">
            PROJECTS
          </h2>

          <div className="space-y-5">
            {/* Photoelastic Tactile Sensor */}
            <div className="space-y-1.5 text-xs sm:text-sm">
              <div className="font-bold text-slate-900 dark:text-white">
                Photoelastic Tactile Sensor for a Robotic Palm (Collaboration with Shadow Robotics)
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1.5 text-slate-700 dark:text-slate-300 leading-relaxed">
                <li>
                  Designed and built a standalone palm prototype combining a photoelastic membrane with a folded optical system to address robotic palm space constraints, then developed automated indentation and synchronised data collection for neural-network calibration.
                </li>
                <li>
                  Evaluated four machine learning architectures for force estimation and contact localisation, achieving a lowest normal-force MAE of 0.244 N and sub-millimetre localisation with separate models on held-out contact locations, demonstrating the prototype’s tactile sensing capability under controlled normal indentation.
                </li>
              </ul>
            </div>

            {/* Mars Rover */}
            <div className="space-y-1.5 text-xs sm:text-sm pt-2">
              <div className="font-bold text-slate-900 dark:text-white">
                Mars Rover for UKSEDS Olympus Rover Trials
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1.5 text-slate-700 dark:text-slate-300 leading-relaxed">
                <li>
                  Led the electrical subsystem as Vice Lead and Electrical Team Lead for a student-built Mars rover, coordinating hardware integration that contributed to the team placing 3rd overall in the UKSEDS Olympus Rover Trials Finals at RAL Space.
                </li>
                <li>
                  Designed power distribution and integrated Raspberry Pi 3 control, LoRa communications, dual 3S LiPo power management, IR obstacle detection, and a camera vision system into a robust, serviceable mobile robotic platform.
                </li>
                <li>
                  Conducted system-level integration, fault testing and validation, identifying and resolving hardware and communication issues to improve commissioning readiness and reliability during field testing and competition preparation, while contributing to the team receiving the Best Critical Design Review (CDR) Award.
                </li>
              </ul>
            </div>

            {/* Vision-Based Robotic Arm Control */}
            <div className="space-y-1.5 text-xs sm:text-sm pt-2">
              <div className="font-bold text-slate-900 dark:text-white">
                Vision-Based Robotic Arm Control
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1.5 text-slate-700 dark:text-slate-300 leading-relaxed">
                <li>
                  Engineered a physical robotic arm system for precision pick-and-place operations of coloured building blocks, using ROS on Linux to coordinate camera feedback and kinematic execution.
                </li>
                <li>
                  Implemented machine learning algorithms for the integrated vision system, training the network on an extensive dataset of colours and shades to ensure robust object recognition under varying lighting conditions.
                </li>
                <li>
                  Evaluated real-world system performance with Python by analysing kinematic positioning accuracy and visual classification metrics, validating both system reliability and environmental adaptability.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. CERTIFICATIONS */}
        <section className="pt-6">
          <h2 className="text-sm font-bold tracking-wider uppercase text-slate-900 dark:text-white border-b-2 border-slate-900 dark:border-slate-100 pb-1 mb-3">
            CERTIFICATIONS
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <div className="flex items-start gap-2">
              <span className="text-slate-900 dark:text-white">•</span>
              <span>Learning CATIA v5 – LinkedIn Learning</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-slate-900 dark:text-white">•</span>
              <span>C Programming for Embedded Applications – LinkedIn Learning</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-slate-900 dark:text-white">•</span>
              <span>EV Engineering Advanced Job Simulation – Forage (Ford)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-slate-900 dark:text-white">•</span>
              <span>C++ Programming – OpenEDG C++ Institute</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-slate-900 dark:text-white">•</span>
              <span>Programming with Python – OpenEDG Python Institute</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-slate-900 dark:text-white">•</span>
              <span>Career Essentials in Software Development – Microsoft</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-slate-900 dark:text-white">•</span>
              <span>AWS Release and Deploy – edX</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-slate-900 dark:text-white">•</span>
              <span>PLC Programming – Udemy</span>
            </div>
            <div className="flex items-start gap-2 sm:col-span-2">
              <span className="text-slate-900 dark:text-white">•</span>
              <span>Machine Learning at the Edge – Arm</span>
            </div>
          </div>
        </section>

        {/* 6. EXTRACURRICULARS */}
        <section className="pt-6">
          <h2 className="text-sm font-bold tracking-wider uppercase text-slate-900 dark:text-white border-b-2 border-slate-900 dark:border-slate-100 pb-1 mb-3">
            EXTRACURRICULARS
          </h2>

          <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <div>
              <span className="font-bold text-slate-900 dark:text-white">Volunteering:</span>{' '}
              <span>Coordinated annual day trips from Trident College to Maheba Refugee Camp (UNHCR) (2018–2019).</span>
            </div>
            <div>
              <span className="font-bold text-slate-900 dark:text-white">Activities:</span>{' '}
              <span>Cycling, Cross Country, Squash, Rugby, Cricket, Music.</span>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Actions */}
      <div className="max-w-4xl mx-auto mt-10 pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 print:hidden">
        <a
          href={PORTFOLIO_DATA.profile.cvUrl}
          download="Staines_Rajith_CV.pdf"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-base shadow-lg shadow-cyan-600/30 transition-all hover:scale-[1.02] active:scale-95 group"
        >
          <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          <span>Download CV (PDF)</span>
        </a>

        <button
          onClick={onBack}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 font-semibold text-sm shadow-sm transition-all hover:bg-slate-50 dark:hover:bg-slate-800"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Full Portfolio</span>
        </button>
      </div>
    </div>
  );
};
