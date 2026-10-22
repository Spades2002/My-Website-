export interface ProjectItem {
  id: string;
  title: string;
  category: 'robotics' | 'ai-ml' | 'space' | 'systems' | 'all';
  categoryLabel: string;
  content: string;
  image: string;
  badges: string[];
  featured?: {
    name: string;
    link: string;
  };
  links?: {
    icon: string;
    url: string;
    label?: string;
  }[];
  highlights?: string[];
  additionalDocs?: {
    name: string;
    url: string;
  }[];
}

export interface EducationItem {
  id: string;
  degree: string;
  school: string;
  period: string;
  keyProjects: string[];
  keyModules: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  bullets: string[];
  skills: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  category: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Staines Rajith",
    title: "MSc Robotics & Artificial Intelligence Graduate",
    intro: "Hi, my name is",
    tagline: "Bridging physical systems, autonomous control, and modern machine learning.",
    heroBio: "MSc graduate in Robotics and Artificial Intelligence with a passion for automation, robotics, and data-driven systems. Experienced in industrial PLCs, embedded programming, and real-time control systems.",
    heroImage: "/images/image1.JPG",
    aboutImage: "/images/my-photo4.jpg",
    logoImage: "/images/logo.png",
    faviconImage: "/fav.png",
    cvUrl: "/CV.pdf",
    stainesCvUrl: "/Staines CV.pdf",
    email: "stainesr.27@outlook.com",
    githubUrl: "https://github.com/Spades2002",
    linkedinUrl: "https://linkedin.com/in/stainesrajith",
    location: "London, United Kingdom",
    internationalRoots: "Experience across UK, Zambia, and India",
    aboutParagraphs: [
      "As a Robotics and Artificial Intelligence MSc graduate from Queen Mary University of London, with international experience across India, Zambia and the UK, I bring a broad perspective shaped by diverse cultural and technical environments. Spending 15 years in Zambia taught me the value of practical, resourceful solutions, strengthening my interest in engineering with real-world impact.",
      "My strengths lie in automation and robotics, supported by experience in industrial PLC programming and developing a photoelastic tactile sensor for a robotic palm. Alongside engineering, my classical music training has developed discipline and patience, while mountain biking and squash have strengthened my competitive drive.",
      "I am particularly interested in medical robotics and healthcare applications, and motivated to develop technologies that support people and improve everyday life."
    ]
  },

  stats: [
    { label: "Engineering Projects", value: "9+", detail: "Robotics, AI, Biomechatronics, Optics" },
    { label: "Technical Certifications", value: "9", detail: "Ford, Microsoft, Arm, edX, C++" },
    { label: "Degree Programs", value: "2", detail: "MSc (Distinction track) & BEng (Hons)" },
    { label: "Engineering & Academic Roles", value: "3", detail: "Control Engineering & Tutoring" }
  ],

  skillCategories: [
    {
      title: "Robotics & Control Systems",
      skills: ["Soft Robotics", "Tactile Sensing", "ROS (Robot Operating System)", "State Space Control", "PLC Systems", "Mechatronics", "Closed-Loop Feedback", "Variable-Impedance Actuation"]
    },
    {
      title: "AI, Vision & Machine Learning",
      skills: ["PyTorch", "YOLOv8", "OpenCV", "Deep Learning", "U-Net", "Reptile Meta-Learning", "Few-Shot Segmentation", "spaCy NLP", "KNN Classification"]
    },
    {
      title: "Programming & Automation",
      skills: ["Python", "C++", "MATLAB & Simulink", "Ladder Logic", "Structured Text (ST)", "CODESYS", "Siemens PLC", "Arduino", "Streamlit"]
    },
    {
      title: "Engineering Tools & Hardware",
      skills: ["Siemens NX", "CATIA", "AutoCAD 2D", "Webots Simulator", "Raspberry Pi", "Power Distribution Design", "Sagnac Optical Interferometry", "Electrical Debugging"]
    },
    {
      title: "Core Competencies",
      skills: ["Project Management", "Technical Feasibility Studies", "Subsystem Integration", "Root-cause Troubleshooting", "Cross-cultural Leadership", "System-level Testing"]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "tactile-sensor",
      title: "Photoelastic Tactile Sensor for a Robotic Palm",
      category: "robotics",
      categoryLabel: "Soft Robotics & AI",
      content: "Designed and built a compact photoelastic palm sensor in collaboration with Shadow Robotics, addressing space constraints through folded optics. Automated indentation and synchronised data collection to evaluate four learning architectures, achieving a lowest normal-force MAE of 0.244 N and sub-millimetre localisation with separate models at held-out contact locations.",
      image: "/images/Tactile Sensor.jpg",
      badges: ["Soft Robotics", "Tactile Sensing", "Computer Vision", "Deep Learning", "Shadow Robotics"],
      featured: {
        name: "Download Dissertation",
        link: "/Photoelastic Tactile Sensor.pdf"
      },
      links: [
        {
          icon: "github",
          url: "https://github.com/Spades2002/Photoelastic-Palm-Sensor",
          label: "View Repository"
        }
      ],
      highlights: [
        "Collaborated directly with Shadow Robotics on industrial hand packaging",
        "Folded optics path solved strict robotic palm clearance constraints",
        "Achieved 0.244 N normal-force MAE and sub-millimetre contact localisation"
      ]
    },
    {
      id: "medical-segmentation",
      title: "Few-Shot Medical Image Segmentation",
      category: "ai-ml",
      categoryLabel: "Deep Learning & Healthcare",
      content: "Collaborated on a group project investigating MRI segmentation with limited labelled data. Implemented and compared supervised U-Net and Reptile meta-learning approaches, combining binary cross-entropy and Dice loss. Evaluated adaptation across different support-set sizes using held-out Dice scores and visual comparisons to assess few-shot segmentation performance.",
      image: "/images/Deep-learning.jpg",
      badges: ["Medical Imaging", "U-Net", "Meta-Learning", "PyTorch", "Few-Shot"],
      links: [
        {
          icon: "github",
          url: "https://github.com/BrandonR77/Deep-Learning",
          label: "View Repository"
        }
      ],
      highlights: [
        "Compared supervised U-Net baseline vs. Reptile optimization meta-learning",
        "Formulated composite loss (Binary Cross-Entropy + Dice Loss)",
        "Assessed rapid domain adaptation across low-data clinical regimes"
      ]
    },
    {
      id: "olympus-rover",
      title: "UKSEDS Olympus Rover Trials",
      category: "space",
      categoryLabel: "Space Robotics & Avionics",
      content: "Led electrical subsystem development as Vice Lead and Electrical Team Lead for a competition rover. Designed power distribution and coordinated hardware integration, resolving faults through system-level testing. Contributed to the team placing third overall at the UKSEDS Olympus Rover Trials Finals at RAL Space and receiving the Best Critical Design Review Award.",
      image: "/images/Rover.jpg",
      badges: ["Project management", "Raspberry Pi", "Electrical Debugging", "Hardware Integration"],
      featured: {
        name: "Download Design Review",
        link: "/ORT - CDR.pdf"
      },
      links: [
        {
          icon: "github",
          url: "https://github.com/ORTadvance/Rover",
          label: "View Repository"
        }
      ],
      highlights: [
        "Placed 3rd Overall at national finals held at RAL Space (UK)",
        "Winner of the prestigious Best Critical Design Review (CDR) Award",
        "Architected complete power distribution and Raspberry Pi telemetry bus"
      ]
    },
    {
      id: "lunar-augmentation",
      title: "Modular Lunar Augmentation System",
      category: "space",
      categoryLabel: "Space & Biomechatronics",
      content: "Led a team to the finals of an Airbus-hosted design competition with a modular lunar mobility concept for prosthetic support and astronaut augmentation. Coordinated the technical feasibility study and business proposal, defining a variable-impedance knee and a modular manufacturing strategy. Delivered a concept-stage proposal addressing engineering feasibility and commercial viability.",
      image: "/images/Exoskeleton.jpg",
      badges: ["Airbus Competition", "Team Leadership", "Concept Design", "Space Robotics", "Biomechatronics"],
      featured: {
        name: "Download Technical Study",
        link: "/Technical Feasibility Study.pdf"
      },
      additionalDocs: [
        {
          name: "Download Business Report",
          url: "/Business Report.pdf"
        }
      ],
      highlights: [
        "Airbus-hosted national design competition finalist",
        "Engineered variable-impedance knee actuation for 1/6th lunar gravity",
        "Co-authored both rigorous technical feasibility analysis and business roll-out"
      ]
    },
    {
      id: "job-finder",
      title: "Engineering Job Finder",
      category: "systems",
      categoryLabel: "Software & NLP Automation",
      content: "Developed a Streamlit application to help engineering graduates find relevant entry-level roles. Integrated spaCy-based CV skills extraction with SerpApi job searches, enabling users to upload a PDF CV and retrieve matching UK vacancies with application links.",
      image: "/images/jobfinder.png",
      badges: ["Python", "NLP", "Web Scraping", "Streamlit", "spaCy"],
      links: [
        {
          icon: "github",
          url: "https://github.com/Spades2002/Other-Project-2",
          label: "View Repository"
        }
      ],
      highlights: [
        "Automated semantic keyword & entity extraction from uploaded PDF resumes",
        "Real-time SerpApi query builder targeting specialized UK engineering listings",
        "Intuitive interactive UI built with Python & Streamlit"
      ]
    },
    {
      id: "object-detection",
      title: "Real-time Colour and Object Detection",
      category: "ai-ml",
      categoryLabel: "Computer Vision & Robotics",
      content: "Developed a real-time robotics perception prototype combining YOLOv8 object detection with KNN colour classification trained on 865 named colours. Integrated both models with OpenCV webcam processing, enabling simultaneous object identification and colour labelling within a modular vision pipeline.",
      image: "/images/object detection.jpg",
      badges: ["OpenCV", "YOLOv8", "KNN", "Computer Vision"],
      links: [
        {
          icon: "github",
          url: "https://github.com/Spades2002/Other-Project-1",
          label: "View Repository"
        }
      ],
      highlights: [
        "Fused state-of-the-art YOLOv8 object inference with custom KNN color classifier",
        "Trained on comprehensive dataset of 865 distinct named color shades",
        "High-framerate video stream processing pipeline with OpenCV"
      ]
    },
    {
      id: "monorail-system",
      title: "Eco-Friendly Intra-Campus Monorail System Design",
      category: "systems",
      categoryLabel: "Sustainable Infrastructure & CAD",
      content: "Led the conceptual design of an eco-friendly campus monorail for WSP, addressing transport accessibility and sustainability. Analysed routes and developed carriage concepts incorporating energy-efficient systems and accessible features, delivering a proposal that balanced passenger needs with infrastructure and environmental constraints.",
      image: "/images/monorail.jpg",
      badges: ["CAD", "Automation", "Sustainable Design", "WSP Infrastructure"],
      featured: {
        name: "Download Monorail Report",
        link: "/Monorail project report.pdf"
      },
      highlights: [
        "Commissioned industry brief for global engineering consultancy WSP",
        "Designed accessible passenger cabins and eco-efficient power rail dynamics",
        "Multi-criteria route planning balancing campus topography and transit flow"
      ]
    },
    {
      id: "roll-angle",
      title: "Roll-angle Measurement Device",
      category: "systems",
      categoryLabel: "Optical Instrumentation & Sensors",
      content: "Developed a fibre-optic Sagnac interferometer to investigate roll-angle measurement. Captured and analysed oscilloscope data, integrating measured angular velocity to estimate angular displacement. Demonstrated angular-distance measurement and identified directional ambiguity as a limitation of the system.",
      image: "/images/roll-angle.png",
      badges: ["Sensors", "MATLAB", "Data Analysis", "Fiber Optics"],
      featured: {
        name: "Download Literature Review",
        link: "/Interferometer literature review.pdf"
      },
      links: [
        {
          icon: "github",
          url: "https://github.com/Spades2002/Sagnac-Interferometer",
          label: "View Repository"
        }
      ],
      highlights: [
        "Implemented high-sensitivity optical Sagnac interferometry setup",
        "Developed numerical integration algorithms in MATLAB for angular velocity",
        "Evaluated optical phase shifts and resolved limits of directional sensing"
      ]
    },
    {
      id: "stamp-bug",
      title: "Gymnastics Stamp-bug and Rover",
      category: "robotics",
      categoryLabel: "Mechatronics & Control Systems",
      content: "Led a team developing a robotic gymnastics rover to synchronise LED displays with live performances. Designed control algorithms and refined the mechanical design using Siemens NX, coordinating integration and iterative testing to deliver a responsive robotic performance system.",
      image: "/images/stamp-bug.jpg",
      badges: ["Robotics", "Control Systems", "Mechatronics", "Siemens NX"],
      featured: {
        name: "Download Datasheet",
        link: "/Datasheet for stampbug.pdf"
      },
      highlights: [
        "Iterative mechanical CAD modeling and chassis optimization in Siemens NX",
        "Real-time control algorithms synchronizing motor actuation with LED matrices",
        "Systematic electrical debugging resolving high-current transient spikes"
      ]
    }
  ] as ProjectItem[],

  experience: [
    {
      id: "fqm-intern",
      role: "Control Engineering Intern",
      company: "First Quantum Minerals Ltd",
      period: "Jul 2022 - Aug 2022",
      bullets: [
        "Optimised industrial equipment performance by collaborating with supervisors to maintain peak copper smelter efficiency.",
        "Engineered a fully functional traffic light system using Siemens PLC and ladder logic, demonstrating advanced automation skills.",
        "Mastered CODESYS programming using structured text and ladder logic to streamline industrial processes.",
        "Presented comprehensive project results to management, showcasing problem-solving and technical strengths in PLC systems."
      ],
      skills: ["Siemens PLC", "CODESYS", "Ladder Logic", "Structured Text", "Smelter Automation", "Industrial Controls"]
    },
    {
      id: "trident",
      role: "Teaching Assistant",
      company: "Trident College",
      period: "Jan 2021 - Mar 2021",
      bullets: [
        "Elevated A-level student performance through targeted one-to-one tutoring in mathematics and sciences.",
        "Designed and supervised laboratory experiments while enforcing strict safety standards.",
        "Collaborated with faculty to develop engaging lesson materials that improved classroom outcomes.",
        "Provided specialised music tutoring, helping students prepare for practical examinations."
      ],
      skills: ["STEM Tutoring", "Lab Safety & Supervision", "Curriculum Delivery", "Music Instruction"]
    },
    {
      id: "fqm-assistant",
      role: "Technical Team Assistant",
      company: "First Quantum Minerals Ltd",
      period: "Nov 2018 - Dec 2018",
      bullets: [
        "Improved machinery reliability through proactive monitoring and maintenance in copper smelting operations.",
        "Enhanced furnace performance by optimising air cooler functionality and increasing airflow efficiency.",
        "Prevented operational disruptions by identifying and reporting equipment abnormalities to supervisors.",
        "Maintained 98% equipment uptime through rigorous adherence to safety and maintenance protocols."
      ],
      skills: ["Preventive Maintenance", "Copper Smelting Ops", "Air Cooler Optimization", "Safety Protocols"]
    }
  ] as ExperienceItem[],

  education: [
    {
      id: "qmul",
      degree: "MSc Robotics and Artificial Intelligence",
      school: "Queen Mary University of London",
      period: "Sep 2025 - Sep 2026",
      keyProjects: [
        "Photoelastic tactile sensor for a robotic palm (collaboration with Shadow Robotics)",
        "Electro-optical PPG (photoplethysmography) system",
        "Neural Network model predicting pedestrian behaviour",
        "Few-Shot Learning in Medical Imaging (U-Net & Reptile Meta-Learning)"
      ],
      keyModules: [
        "Cognitive Robotics",
        "Machine Learning and Artificial Intelligence",
        "Medical Robotics and Surgical Techniques",
        "Deep Learning for Data and Image Analysis"
      ]
    },
    {
      id: "loughborough",
      degree: "BEng Robotics, Mechatronics & Control Engineering (Hons)",
      school: "Loughborough University",
      period: "Oct 2021 - Jun 2024",
      keyProjects: [
        "Eco-Friendly Intra-Campus Monorail System Design",
        "Gymnastics Stamp-bug and Rover",
        "Roll-angle Measurement Device (Sagnac Interferometer)"
      ],
      keyModules: [
        "State Space Control",
        "Manufacturing Automation and Control Systems",
        "Electronics & Circuit Design",
        "Computer Programming (Python/C++)",
        "Interfacing with Mechatronics Systems"
      ]
    }
  ] as EducationItem[],

  achievements: [
    { id: "ford", title: "EV Engineering Advanced Job Simulation", issuer: "Forage (Ford)", category: "Automotive & EV" },
    { id: "cpp", title: "C++ Programming", issuer: "OpenEDG C++ Institute", category: "Programming" },
    { id: "py", title: "Programming with Python", issuer: "OpenEDG Python Institute", category: "Programming" },
    { id: "msft", title: "Career Essentials in Software Development", issuer: "Microsoft", category: "Software" },
    { id: "autocad", title: "AutoCAD 2D", issuer: "CADD Centre Training Services", category: "CAD & Drafting" },
    { id: "croma", title: "Python Specialization", issuer: "Croma Campus Pvt. Ltd", category: "Data & Scripting" },
    { id: "aws", title: "AWS Release and Deploy", issuer: "edX", category: "Cloud & DevOps" },
    { id: "plc", title: "PLC Programming", issuer: "Udemy", category: "Industrial Automation" },
    { id: "arm", title: "Machine Learning at the Edge", issuer: "Arm", category: "Embedded AI" }
  ] as AchievementItem[],

  gallery: [
    { src: "/images/Tactile Sensor.jpg", title: "Photoelastic Tactile Sensor", subtitle: "Folded optics design for Shadow Robotics hand" },
    { src: "/images/Rover.jpg", title: "Olympus Rover Trials", subtitle: "Award-winning competition rover at RAL Space" },
    { src: "/images/Exoskeleton.jpg", title: "Lunar Augmentation System", subtitle: "Airbus competition finalist concept" },
    { src: "/images/image1.JPG", title: "Staines Rajith", subtitle: "Lead profile portrait" },
    { src: "/images/my-photo4.jpg", title: "Staines in the Lab", subtitle: "Hardware & robotics prototyping" },
    { src: "/images/monorail.jpg", title: "Intra-Campus Monorail", subtitle: "Sustainable transit CAD concept" },
    { src: "/images/stamp-bug.jpg", title: "Gymnastics Stamp-Bug", subtitle: "Autonomous mechatronic rover" },
    { src: "/images/roll-angle.png", title: "Sagnac Optical Interferometer", subtitle: "High precision roll-angle sensing" }
  ],

  contact: {
    heading: "Get In Touch",
    content: "My inbox is always open for collaboration, questions, or just a friendly chat! Whether you are interested in robotics engineering, research collaboration, or graduate engineering opportunities, feel free to reach out.",
    btnName: "Email Me",
    btnLink: "mailto:stainesr.27@outlook.com",
    email: "stainesr.27@outlook.com"
  }
};
