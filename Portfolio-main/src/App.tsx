/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import {
  Github,
  Linkedin,
  FileText,
  Mail,
  ExternalLink,
  Code2,
  BrainCircuit,
  Database,
  Terminal,
  Cpu,
  ChevronRight,
  Award,
  GraduationCap,
  Briefcase,
  ChevronDown,
  Menu,
  X,
  Send
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Academics', href: '#academics' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-base/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold tracking-tighter"
        >
          Portfolio
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium hover:text-accent-primary transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="https://github.com/Mannat-jain"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 glass-card hover:bg-white/10 transition-all text-sm font-medium flex items-center gap-2"
            >
              <FileText size={16} /> Resume
            </a>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-base border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a href="https://github.com/Mannat-jain" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-accent-primary font-medium">
                <FileText size={20} /> GitHub Profile
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const roles = ["AI/ML Developer", "Computer Vision Engineer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(currentRole.substring(0, isDeleting ? displayText.length - 1 : displayText.length + 1));
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-secondary/20 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accent-cyan font-mono text-sm tracking-widest uppercase mb-4 block">
            I teach machines to see, now see what I've built.
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tight">
            Mannat <span className="text-gradient">Jain</span>
          </h1>
          <div className="h-12 mb-8">
            <p className="text-xl md:text-3xl font-mono text-white/70">
              {displayText}<span className="animate-pulse">|</span>
            </p>
          </div>
          <p className="max-w-2xl mx-auto text-white/60 mb-10 text-lg leading-relaxed">
            Computer Science Engineering student specializing in AI and Machine Learning. I build intelligent systems by combining analytical thinking with practical implementation — from computer vision pipelines to predictive ML models — driven by curiosity and a passion for real-world impact.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-accent-primary hover:bg-accent-primary/90 rounded-full font-bold transition-all neon-glow flex items-center gap-2 group"
            >
              View Projects <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 glass-card hover:bg-white/10 rounded-full font-bold transition-all"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="text-white/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square glass-card p-4 relative z-10 overflow-hidden group cursor-pointer flex items-center justify-center bg-white/5">
              {/* Placeholder avatar since no photo provided */}
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-accent-primary/30 to-accent-secondary/30 flex items-center justify-center">
                <span className="text-8xl font-display font-bold text-white/20">MJ</span>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent-primary/30 rounded-2xl -z-0" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-secondary/30 blur-3xl rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
              About <span className="text-accent-primary">Me</span>
            </h2>
            <div className="space-y-6 text-white/70 text-lg leading-relaxed">
              <p>
                Computer Science Engineering student specializing in <span className="text-white font-medium">Artificial Intelligence & Machine Learning</span> at Lovely Professional University. I am passionate about building intelligent systems — from <span className="text-white font-medium">Computer Vision pipelines</span> to <span className="text-white font-medium">NLP applications</span> — grounded in a strong foundation in <span className="text-white font-medium">Python, C++, and Data Structures</span>.
              </p>
              <p>
                I approach every problem with analytical thinking and a drive to ship production-ready solutions. From filing a patent for an autonomous waste disposal system to achieving R²=0.91 in ML models, I strive for measurable impact. With each project, internship, and certification, I'm building toward becoming a specialized AI-ML engineer — eager to push the boundaries of what intelligent systems can do.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="glass-card p-4">
                  <h4 className="text-accent-cyan font-bold mb-1">Fast Learner</h4>
                  <p className="text-sm">Quickly picks up new technologies and adapts to evolving challenges.</p>
                </div>
                <div className="glass-card p-4">
                  <h4 className="text-accent-secondary font-bold mb-1">Highly Analytical</h4>
                  <p className="text-sm">Approaches complex problems with structured, data-driven thinking.</p>
                </div>
                <div className="glass-card p-4">
                  <h4 className="text-accent-primary font-bold mb-1">Team Player</h4>
                  <p className="text-sm">Collaborates effectively and thrives in cross-functional environments.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Terminal className="text-accent-primary" />,
      skills: ["Python", "C", "C++", "HTML", "CSS"]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Cpu className="text-accent-secondary" />,
      skills: ["TensorFlow", "OpenCV", "Tkinter", "Matplotlib", "scikit-learn"]
    },
    {
      title: "Tools & Platforms",
      icon: <Database className="text-accent-cyan" />,
      skills: ["Git", "GitHub", "VS Code", "Google Colab", "Jupyter Notebook"]
    },
    {
      title: "Core Concepts",
      icon: <BrainCircuit className="text-white" />,
      skills: ["Computer Vision", "NLP", "Machine Learning", "DSA", "IoT"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Technical <span className="text-accent-secondary">Arsenal</span></h2>
          <p className="text-white/50 max-w-xl mx-auto">A comprehensive overview of the technologies I use to bring ideas to life.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 hover:border-white/20 transition-all group"
            >
              <div className="mb-6 p-3 bg-white/5 rounded-xl w-fit group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-white/60">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Gesture Recognition",
      tagline: "Real-Time Computer Vision Interface",
      description: "A real-time gesture recognition system built during the CodeClause AI internship, achieving 85%+ accuracy using computer vision and deep learning.",
      tech: ["Python", "OpenCV", "TensorFlow", "Tkinter"],
      details: [
        "Developed a real-time gesture recognition AI prototype achieving 85%+ accuracy in hand gesture classification tasks.",
        "Implemented inference pipelines using OpenCV and TensorFlow, processing 30 frames/sec within a responsive Tkinter-based user interface.",
        "Directed full SDLC with 100% test coverage and standardized documentation for scalable deployment on GitHub."
      ],
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&auto=format&fit=crop",
      color: "accent-primary",
      date: "Aug 2025",
      github: "https://github.com/Mannat-jain"
    },
    {
      title: "Process Sync Analyzer",
      tagline: "Multi-threaded CPU Monitoring & Deadlock Detection",
      description: "A robust system-level tool for monitoring concurrent processes, detecting deadlocks, and visualizing memory behavior in real time.",
      tech: ["Python", "psutil", "Tkinter", "Matplotlib"],
      details: [
        "Engineered multi-threaded CPU monitoring via psutil, optimizing 50+ concurrent processes and reducing starvation by 40% through dynamic priorities.",
        "Architected queue-based deadlock detection algorithms, mitigating critical race conditions with sub-15ms latency to ensure 99.9% system stability.",
        "Integrated interactive Tkinter and Matplotlib dashboards, visualizing 10,000+ data points/min to pinpoint memory leaks 3x faster than logs."
      ],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop",
      color: "accent-secondary",
      date: "Apr 2025",
      github: "https://github.com/Mannat-jain"
    },
    {
      title: "House Price Prediction",
      tagline: "ML Pipeline with R² = 0.91",
      description: "A comprehensive machine learning system for predicting house prices, built during advanced Python training with multiple regression models and full feature engineering pipeline.",
      tech: ["Python", "scikit-learn", "XGBoost", "Random Forest", "pandas"],
      details: [
        "Formulated a house price prediction system using multiple ML models (Linear Regression, Random Forest, XGBoost), achieving a highest accuracy of R² = 0.91 with XGBoost.",
        "Embedded a complete ML pipeline including data cleaning, feature engineering, EDA, outlier handling, and hyperparameter tuning through Grid Search for optimal model performance.",
        "Designed a modular OOP architecture (encapsulation, inheritance, polymorphism) that streamlined component management, improved scalability, and accelerated experimentation by 30–40%."
      ],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop",
      color: "accent-cyan",
      date: "Aug 2025",
      github: "https://github.com/Mannat-jain"
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Featured <span className="text-accent-primary">Projects</span></h2>
            <p className="text-white/50 max-w-xl">Showcasing my technical depth through real-world applications.</p>
          </div>
          <a href="https://github.com/Mannat-jain" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-mono hover:text-accent-primary transition-colors">
            VIEW ALL ON GITHUB <ChevronRight size={16} />
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedProject(selectedProject === i ? null : i)}
            >
              <div className="glass-card overflow-hidden h-full flex flex-col hover:border-white/20 transition-all">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base to-transparent opacity-60" />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs font-mono text-white/70">
                    {project.date}
                  </div>
                </div>

                <div className="p-8 flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] font-mono px-2 py-0.5 border border-white/10 rounded uppercase">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                  <p className="text-accent-cyan text-sm font-medium mb-4">{project.tagline}</p>
                  <p className="text-white/60 text-sm mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-4 mt-auto">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="flex items-center gap-2 text-sm font-bold hover:text-accent-primary transition-colors">
                      <Github size={18} /> Code
                    </a>
                    <span className="text-xs text-white/40 font-mono ml-auto">Click for details →</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="glass-card max-w-2xl w-full max-h-[85vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <img
                  src={projects[selectedProject].image}
                  alt={projects[selectedProject].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-transparent to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <X size={20} />
                </button>
                <div className="absolute bottom-4 left-6">
                  <span className="px-3 py-1 bg-accent-primary/20 rounded-full text-xs font-mono text-accent-primary">
                    {projects[selectedProject].date}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-display font-bold mb-2">{projects[selectedProject].title}</h3>
                <p className="text-accent-cyan font-medium mb-6">{projects[selectedProject].tagline}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {projects[selectedProject].tech.map(t => (
                    <span key={t} className="text-xs font-mono px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="space-y-4 mb-8">
                  {projects[selectedProject].details.map((detail, idx) => (
                    <div key={idx} className="flex gap-3">
                      <div className="mt-2 w-1.5 h-1.5 bg-accent-primary rounded-full shrink-0" />
                      <p className="text-white/70 text-sm leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <a
                    href={projects[selectedProject].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-accent-primary hover:bg-accent-primary/90 rounded-full font-bold text-sm transition-all"
                  >
                    <Github size={18} /> View on GitHub
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-3 glass-card hover:bg-white/10 rounded-full font-bold text-sm transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-white/[0.02]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 text-center">Professional <span className="text-accent-secondary">Journey</span></h2>

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 border-l border-white/10"
          >
            <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] bg-accent-primary rounded-full neon-glow" />
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
              <h3 className="text-2xl font-bold">Artificial Intelligence Intern</h3>
              <span className="text-sm font-mono text-accent-cyan">Jul 2025 – Aug 2025</span>
            </div>
            <p className="text-accent-primary font-semibold mb-3">CodeClause</p>
            <p className="text-white/60 mb-4">
              Developed AI prototypes spanning Game Logic, Computer Vision, and NLP — all production-ready with real-time inference pipelines.
            </p>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="flex gap-2"><ChevronRight size={16} className="text-accent-primary shrink-0" /> Developed 3 AI prototypes achieving 85%+ accuracy in Gesture Recognition and Object Detection tasks.</li>
              <li className="flex gap-2"><ChevronRight size={16} className="text-accent-primary shrink-0" /> Implemented real-time inference pipelines using OpenCV and TensorFlow at 30 fps in responsive Tkinter UIs.</li>
              <li className="flex gap-2"><ChevronRight size={16} className="text-accent-primary shrink-0" /> Directed full SDLC for 3 GitHub repositories with 100% test coverage and standardized documentation.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 border-l border-white/10"
          >
            <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] bg-accent-secondary rounded-full" />
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
              <h3 className="text-2xl font-bold">Summer Training – Advanced Python for ML & AI</h3>
              <span className="text-sm font-mono text-accent-cyan">Jul 2025 – Aug 2025</span>
            </div>
            <p className="text-accent-secondary font-semibold mb-3">CSE Pathshala</p>
            <p className="text-white/60 mb-4">
              Intensive training program covering advanced Python, ML pipelines, and model optimization for production-grade AI systems.
            </p>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="flex gap-2"><ChevronRight size={16} className="text-accent-secondary shrink-0" /> Built a House Price Prediction system using Linear Regression, Random Forest, and XGBoost (R²=0.91).</li>
              <li className="flex gap-2"><ChevronRight size={16} className="text-accent-secondary shrink-0" /> Embedded full ML pipeline: EDA, feature engineering, outlier handling, and Grid Search hyperparameter tuning.</li>
              <li className="flex gap-2"><ChevronRight size={16} className="text-accent-secondary shrink-0" /> Designed a modular OOP architecture that accelerated experimentation by 30–40%.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CodingProfiles = () => {
  const profiles = [
    {
      name: "GeeksforGeeks",
      link: "https://www.geeksforgeeks.org/",
      color: "#2F8D46",
      stats: [
        { label: "Problems Solved", value: "300+" },
        { label: "Platform", value: "GFG" },
      ],
      highlight: "300+ Problems",
    },
    {
      name: "HackerRank",
      link: "https://www.hackerrank.com/",
      color: "#00EA64",
      stats: [
        { label: "C Rating", value: "4 Stars" },
        { label: "Python Rating", value: "4 Stars" },
      ],
      highlight: "4-Star Rated",
    },
  ];

  return (
    <section id="coding-profiles" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Coding <span className="text-accent-primary">Profiles</span></h2>
          <p className="text-white/50 max-w-xl mx-auto">Consistent problem solving across competitive programming platforms.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {profiles.map((profile, i) => (
            <motion.a
              key={profile.name}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 group hover:border-white/20 transition-all relative overflow-hidden block"
            >
              <div className="absolute top-0 left-0 right-0 h-1 opacity-60 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: profile.color }} />
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold">{profile.name}</h3>
                <ExternalLink size={16} className="text-white/30 group-hover:text-white/70 transition-colors" />
              </div>
              <div className="mb-5">
                <span className="text-2xl font-display font-bold" style={{ color: profile.color }}>
                  {profile.highlight}
                </span>
              </div>
              {profile.stats.length > 0 && (
                <div className="space-y-2 pt-4 border-t border-white/10">
                  {profile.stats.map((stat) => (
                    <div key={stat.label} className="flex justify-between items-center text-sm">
                      <span className="text-white/50">{stat.label}</span>
                      <span className="font-mono font-bold text-white/80">{stat.value}</span>
                    </div>
                  ))}
                </div>
              )}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity" style={{ backgroundColor: profile.color }} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Certificates = () => {
  const certificates = [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
      org: "Oracle",
      date: "Oct 2025",
      link: "https://www.linkedin.com/in/mannatjain14/",
      icon: Database,
      textColor: "text-accent-primary"
    },
    {
      title: "21 Projects, 21 Days: ML, Deep Learning & GenAI",
      org: "GeeksforGeeks",
      date: "Sep 2025",
      link: "https://www.linkedin.com/in/mannatjain14/",
      icon: BrainCircuit,
      textColor: "text-accent-secondary"
    },
    {
      title: "Advanced Python for ML & AI",
      org: "CSE Pathshala",
      date: "Jul 2025",
      link: "https://www.linkedin.com/in/mannatjain14/",
      icon: Cpu,
      textColor: "text-accent-cyan"
    }
  ];

  return (
    <section id="certificates" className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Certifications & <span className="text-accent-primary">Credentials</span></h2>
          <p className="text-white/50 max-w-xl mx-auto">Industry-recognized certifications validating my expertise.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card p-8 group hover:border-white/20 transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <cert.icon size={80} />
              </div>

              <div className="relative z-10">
                <div className="mb-6 p-3 bg-white/5 rounded-xl w-fit group-hover:scale-110 transition-transform">
                  <cert.icon size={28} className={cert.textColor} />
                </div>
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className={`${cert.textColor} text-sm font-medium mb-1`}>{cert.org}</p>
                <p className="text-xs text-white/40 font-mono mb-6">Completed: {cert.date}</p>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 bg-white/5 hover:bg-white/10 rounded-full text-sm font-medium transition-all group/link"
                >
                  <Award size={16} className={cert.textColor} />
                  Certificate
                  <ExternalLink size={14} className="opacity-50 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Education = () => {
  return (
    <section id="academics" className="py-24 bg-white/[0.02]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 text-center">Academic <span className="text-accent-cyan">Foundation</span></h2>

        <div className="space-y-6">
          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <GraduationCap size={120} />
            </div>
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                  <h3 className="text-2xl font-bold">B.Tech in Computer Science Engineering</h3>
                  <p className="text-accent-primary font-medium">Lovely Professional University</p>
                  <p className="text-white/50 text-sm mt-1">Specialization: Artificial Intelligence and Machine Learning</p>
                </div>
                <div className="text-right">
                  <span className="px-4 py-1 bg-accent-primary/20 rounded-full text-sm font-bold text-accent-primary">CGPA: 8.4/10</span>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
                <div>
                  <h5 className="text-xs font-mono text-white/40 uppercase mb-1">Location</h5>
                  <p className="text-sm font-medium">Phagwara, Punjab</p>
                </div>
                <div>
                  <h5 className="text-xs font-mono text-white/40 uppercase mb-1">Status</h5>
                  <p className="text-sm font-medium">Aug 2023 – Present</p>
                </div>
                <div>
                  <h5 className="text-xs font-mono text-white/40 uppercase mb-1">Key Focus</h5>
                  <p className="text-sm font-medium">AI/ML</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                  <h3 className="text-2xl font-bold">Senior Secondary (CBSE)</h3>
                  <p className="text-accent-primary font-medium">B.S.M. Public School</p>
                </div>
                <div className="text-right">
                  <span className="px-4 py-1 bg-accent-primary/20 rounded-full text-sm font-bold text-accent-primary">Percentage: 77%</span>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
                <div>
                  <h5 className="text-xs font-mono text-white/40 uppercase mb-1">Location</h5>
                  <p className="text-sm font-medium">New Delhi, India</p>
                </div>
                <div>
                  <h5 className="text-xs font-mono text-white/40 uppercase mb-1">Completed</h5>
                  <p className="text-sm font-medium">Mar 2023</p>
                </div>
                <div>
                  <h5 className="text-xs font-mono text-white/40 uppercase mb-1">Board</h5>
                  <p className="text-sm font-medium">CBSE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateName = (value: string) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(value.trim()) && value.trim().length >= 2;
  };

  const validateEmail = (value: string) => {
    const emailRegex = /^[A-Za-z0-9]+([._][A-Za-z0-9]+)*@[A-Za-z0-9]+([.-][A-Za-z0-9]+)*\.[A-Za-z]{2,}$/;
    return emailRegex.test(value.trim());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!name.trim() || !validateName(name)) newErrors.name = "Enter valid Name";
    if (!email.trim() || !validateEmail(email)) newErrors.email = "Enter valid E-mail";
    if (!message.trim()) newErrors.message = "Please enter a message";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: "YOUR_ACCESS_KEY_HERE",
            name: name.trim(),
            email: email.trim(),
            message: message.trim(),
            subject: `Portfolio Contact from ${name.trim()}`,
          }),
        });
        const result = await response.json();
        if (result.success) {
          setShowSuccess(true);
          setName(""); setEmail(""); setMessage("");
          setTimeout(() => setShowSuccess(false), 5000);
        } else {
          setErrors({ message: "Failed to send. Please try again." });
        }
      } catch {
        setErrors({ message: "Network error. Please try again." });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-primary/5 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-6xl font-display font-bold mb-8">
              Let's build something <span className="text-gradient">impactful</span> together.
            </h2>
            <p className="text-white/60 text-lg mb-12 max-w-md">
              I'm always open to discussing innovative projects, AI/ML research, or internship opportunities.
            </p>

            <div className="space-y-6">
              <a href="mailto:mannatjain1495@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 glass-card flex items-center justify-center group-hover:bg-accent-primary transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <h5 className="text-xs font-mono text-white/40 uppercase">Email</h5>
                  <p className="font-medium">mannatjain1495@gmail.com</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/mannatjain14/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 glass-card flex items-center justify-center group-hover:bg-accent-primary transition-colors">
                  <Linkedin size={20} />
                </div>
                <div>
                  <h5 className="text-xs font-mono text-white/40 uppercase">LinkedIn</h5>
                  <p className="font-medium">linkedin.com/in/mannatjain14</p>
                </div>
              </a>
              <a href="https://github.com/Mannat-jain" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 glass-card flex items-center justify-center group-hover:bg-accent-primary transition-colors">
                  <Github size={20} />
                </div>
                <div>
                  <h5 className="text-xs font-mono text-white/40 uppercase">GitHub</h5>
                  <p className="font-medium">github.com/Mannat-jain</p>
                </div>
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-white/40 uppercase ml-1">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => { setName(e.target.value); setErrors(prev => ({ ...prev, name: undefined })); }}
                    className={`w-full bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 focus:outline-none focus:border-accent-primary transition-colors`}
                    placeholder="John Doe"
                  />
                  <AnimatePresence>
                    {errors.name && (
                      <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="text-red-400 text-xs font-medium flex items-center gap-1 ml-1">
                        ⚠ {errors.name}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-white/40 uppercase ml-1">Email</label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setErrors(prev => ({ ...prev, email: undefined })); }}
                    className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 focus:outline-none focus:border-accent-primary transition-colors`}
                    placeholder="john@example.com"
                  />
                  <AnimatePresence>
                    {errors.email && (
                      <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="text-red-400 text-xs font-medium flex items-center gap-1 ml-1">
                        ⚠ {errors.email}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-white/40 uppercase ml-1">Message</label>
                <textarea
                  rows={5}
                  value={message}
                  onChange={(e) => { setMessage(e.target.value); setErrors(prev => ({ ...prev, message: undefined })); }}
                  className={`w-full bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 focus:outline-none focus:border-accent-primary transition-colors resize-none`}
                  placeholder="Tell me about your project..."
                />
                <AnimatePresence>
                  {errors.message && (
                    <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="text-red-400 text-xs font-medium flex items-center gap-1 ml-1">
                      ⚠ {errors.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-accent-primary hover:bg-accent-primary/90 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : <> Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>}
              </button>
            </form>

            <AnimatePresence>
              {showSuccess && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-center">
                  <p className="text-green-400 font-medium text-sm">✓ Message sent successfully!</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-white/40 text-sm">
          © {new Date().getFullYear()} Mannat Jain. All rights reserved.
        </p>
        <div className="flex items-center gap-8">
          <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">Privacy Policy</a>
          <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <CodingProfiles />
        <Certificates />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}