import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  const visualVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-subtitle" variants={itemVariants}>
          <Terminal size={18} />
          <span>Hello World, I'm</span>
        </motion.div>

        <motion.h1 className="hero-title" variants={itemVariants}>
          <span className="text-gradient">Sneha S</span>
        </motion.h1>

        <motion.h2 className="hero-tagline" variants={itemVariants}>
          B.Tech AI & Data Science Student
        </motion.h2>

        <motion.p className="hero-description" variants={itemVariants}>
          Passionate about building intelligent algorithms, parsing massive datasets, 
          and exploring the intersections of Internet of Things (IoT), System Design, and Modern Web Development.
        </motion.p>

        <motion.div className="hero-buttons" variants={itemVariants}>
          <button
            onClick={() => handleScrollTo('projects')}
            className="btn btn-primary"
          >
            <span>View Projects</span>
            <ArrowRight size={18} />
          </button>
          <button
            onClick={() => handleScrollTo('contact')}
            className="btn btn-secondary"
          >
            <span>Get in Touch</span>
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-visual"
        variants={visualVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="visual-sphere-container">
          <div className="visual-ring"></div>
          <div className="visual-ring-2"></div>
          <div className="visual-sphere">
            {/* Holographic matrix-like particles or glows */}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
