import React from 'react';
import { Github, Linkedin, Instagram } from './SocialIcons';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-text">
          &copy; {currentYear} Sneha S. Built with React & Framer Motion.
        </div>
        
        <div className="footer-socials">
          <a
            href="https://github.com/SnehaS-github"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link github"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/sneha-s"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link linkedin"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://instagram.com/sneha_s"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link instagram"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
