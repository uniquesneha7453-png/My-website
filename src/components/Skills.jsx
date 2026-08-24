import React from 'react';
import { Terminal, Brain, HardDrive, Layout, Server, Database } from 'lucide-react';
import { motion } from 'framer-motion';
import './Skills.css';

const programmingSkills = [
  { name: 'Python', percentage: 85, icon: Brain },
  { name: 'C Programming', percentage: 80, icon: Terminal },
  { name: 'Web Development (HTML/CSS/JS)', percentage: 75, icon: Layout },
];

const hardwareDesignSkills = [
  { name: 'Internet of Things (IoT)', percentage: 80, icon: HardDrive },
  { name: 'System Design Basics', percentage: 70, icon: Server },
  { name: 'Data Structures & Algorithms', percentage: 75, icon: Database },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="skills">
      <h2 className="section-title">Technical Skills</h2>
      <p className="section-subtitle">Technical proficiencies across software development, data science, and hardware integration.</p>

      <motion.div
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Intro/Details Card */}
        <motion.div className="glass-card skills-intro-card" variants={cardVariants}>
          <div className="skills-detail-item">
            <h4 className="detail-item-title">AI & Data Science</h4>
            <p className="detail-item-desc">Knowledge in predictive models, regression analytics, and data plotting pipelines.</p>
          </div>
          <div className="skills-detail-item">
            <h4 className="detail-item-title">IoT Systems</h4>
            <p className="detail-item-desc">Designing circuit pathways, processing sensor feedback, and handling wireless modules.</p>
          </div>
          <div className="skills-detail-item">
            <h4 className="detail-item-title">Software Engineering</h4>
            <p className="detail-item-desc">Applying robust object-oriented patterns, algorithm optimization, and clean refactoring.</p>
          </div>
        </motion.div>

        {/* Column 1 - Programming Languages */}
        <div className="skills-column">
          {programmingSkills.map((skill, index) => {
            const IconComp = skill.icon;
            return (
              <motion.div
                key={index}
                className="glass-card skill-card"
                variants={cardVariants}
              >
                <div className="skill-header">
                  <div className="skill-info">
                    <IconComp size={18} className="skill-icon" />
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
                <div className="skill-bar-track">
                  <motion.div
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Column 2 - Hardware / Core Systems */}
        <div className="skills-column">
          {hardwareDesignSkills.map((skill, index) => {
            const IconComp = skill.icon;
            return (
              <motion.div
                key={index}
                className="glass-card skill-card"
                variants={cardVariants}
              >
                <div className="skill-header">
                  <div className="skill-info">
                    <IconComp size={18} className="skill-icon" />
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
                <div className="skill-bar-track">
                  <motion.div
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
