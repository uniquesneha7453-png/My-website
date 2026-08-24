import React from 'react';
import { ExternalLink, Volume2, Cpu, Edit3 } from 'lucide-react';
import { Github } from './SocialIcons';
import { motion } from 'framer-motion';
import './Projects.css';

const projectsData = [
  {
    title: 'AudioX Earbuds Showcase',
    desc: 'An immersive digital experience showcasing premium audio hardware features, full interactive sound specs, dynamic color changes, and 3D specs visualization.',
    tech: ['React.js', 'Framer Motion', 'Web Audio API', 'CSS Grid/Flexbox'],
    icon: Volume2,
    github: 'https://github.com/SnehaS-github/audiox-earbuds',
    demo: '#',
    glow: 'cyan',
  },
  {
    title: 'Clap Switch Automation IoT',
    desc: 'An IoT-enabled automation solution designed to control AC electrical appliances triggered by specific acoustic clap patterns. Built with robust noise filtering algorithms.',
    tech: ['Arduino C++', 'ESP8266 Wi-Fi', 'Relay Modules', 'Sound Sensor Board'],
    icon: Cpu,
    github: 'https://github.com/SnehaS-github/clap-switch-iot',
    demo: '#',
    glow: 'purple',
  },
  {
    title: '2D Graphics Editor in C',
    desc: 'A lightweight interactive desktop drawing program built from scratch in C, implementing graphics algorithms (Bresenham line, circle drawing) and standard file exports.',
    tech: ['C Programming', 'graphics.h', 'Data Structures', 'File Handling'],
    icon: Edit3,
    github: 'https://github.com/SnehaS-github/2d-graphics-editor',
    demo: '#',
    glow: 'cyan',
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="projects">
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-subtitle">A collection of engineering projects demonstrating hardware design, software development, and UI creation.</p>

      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {projectsData.map((project, index) => {
          const IconComponent = project.icon;
          return (
            <motion.div
              key={index}
              className={`glass-card ${project.glow === 'purple' ? 'glass-card-purple' : ''} project-card`}
              variants={cardVariants}
            >
              <div className="project-image-placeholder">
                <div className="project-image-glow"></div>
                <IconComponent size={48} strokeWidth={1.5} />
              </div>

              <div className="project-info">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                
                <div className="project-tech">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="tech-tag">{t}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a href={project.demo} className="project-link" onClick={(e) => { if(project.demo==='#') e.preventDefault(); }}>
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
