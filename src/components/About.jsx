import React from 'react';
import { GraduationCap, Heart, Compass, User, Brain } from 'lucide-react';
import { motion } from 'framer-motion';
import './About.css';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="about">
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">Discover my academic background, interests, and aspirations.</p>

      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div className="about-left" variants={itemVariants}>
          <div className="avatar-wrapper">
            <div className="avatar-content">
              <Brain className="avatar-icon" size={64} />
              <div style={{ textAlign: 'center' }}>
                <h3 className="avatar-name">Sneha S</h3>
                <p className="avatar-role">AI & Data Science Student</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="about-right" variants={itemVariants}>
          <p className="about-text">
            I am a highly motivated <strong>second-year B.Tech student in Artificial Intelligence and Data Science at Reva University</strong>. 
            My primary academic and technical focus is developing intelligent, data-driven solutions and understanding how hardware and software integrate to automate tasks.
          </p>
          <p className="about-text">
            Driven by curiosity, I enjoy experimenting with IoT circuits, writing robust code, and diving into mathematical foundations of AI algorithms. I'm always looking for opportunities to grow, innovate, and contribute to cutting-edge technologies.
          </p>

          <div className="about-grid">
            <div className="glass-card about-info-card">
              <div className="info-card-header">
                <div className="info-card-icon">
                  <GraduationCap size={20} />
                </div>
                <h4 className="info-card-title">Education</h4>
              </div>
              <p className="info-card-desc">B.Tech in AI & Data Science (Year II) at Reva University</p>
            </div>

            <div className="glass-card glass-card-purple about-info-card">
              <div className="info-card-header">
                <div className="info-card-icon-purple">
                  <Brain size={20} />
                </div>
                <h4 className="info-card-title">Interests</h4>
              </div>
              <p className="info-card-desc">Machine Learning, Data Engineering, Web Dev & IoT automation</p>
            </div>

            <div className="glass-card glass-card-purple about-info-card">
              <div className="info-card-header">
                <div className="info-card-icon-purple">
                  <Compass size={20} />
                </div>
                <h4 className="info-card-title">Location</h4>
              </div>
              <p className="info-card-desc">Bengaluru, Karnataka, India</p>
            </div>

            <div className="glass-card about-info-card">
              <div className="info-card-header">
                <div className="info-card-icon">
                  <Heart size={20} />
                </div>
                <h4 className="info-card-title">Goals</h4>
              </div>
              <p className="info-card-desc">Applying AI to build impactful, scalable systems for global challenges</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
