import React from 'react';
import { Award, ShieldCheck, Briefcase, FileCode, Landmark } from 'lucide-react';
import { motion } from 'framer-motion';
import './Certifications.css';

const certificationsData = [
  {
    title: 'Python for Data Science',
    issuer: 'NPTEL / Cognitive Class',
    type: 'Technical Certification',
    icon: FileCode,
    glow: 'cyan',
  },
  {
    title: 'AI & Machine Learning Internship',
    issuer: '1 Stop AI',
    type: 'Industry Experience',
    icon: Briefcase,
    glow: 'purple',
  },
  {
    title: 'Wadhwani Entrepreneurship Course',
    issuer: 'Wadhwani Foundation',
    type: 'Professional Development',
    icon: Landmark,
    glow: 'cyan',
  },
  {
    title: 'Advanced Technical Training',
    issuer: 'Scaler Technology',
    type: 'Skill Acceleration',
    icon: Award,
    glow: 'purple',
  },
];

export default function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="certifications">
      <h2 className="section-title">Certifications</h2>
      <p className="section-subtitle">A collection of credentials and technical courses completed during my studies.</p>

      <motion.div
        className="certifications-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {certificationsData.map((cert, index) => {
          const IconComponent = cert.icon;
          return (
            <motion.div
              key={index}
              className={`glass-card ${cert.glow === 'purple' ? 'glass-card-purple' : ''} certification-card`}
              variants={cardVariants}
            >
              <div className="certification-tech-glow"></div>
              
              <div className="certification-icon">
                <IconComponent size={24} />
              </div>
              
              <div className="certification-badge">
                {cert.type}
              </div>
              
              <h3 className="certification-title">{cert.title}</h3>
              
              <div className="certification-issuer">
                <ShieldCheck size={16} style={{ color: cert.glow === 'purple' ? 'var(--accent-purple)' : 'var(--accent-cyan)' }} />
                <span>Issued by {cert.issuer}</span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
