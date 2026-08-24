import React, { useState } from 'react';
import { Phone, Mail, Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear validation error when typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Mock submission latency
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">Have a project idea, question, or just want to connect? Hit me up!</p>

      <motion.div
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Contact Info (Left) */}
        <motion.div className="contact-info" variants={itemVariants}>
          <div className="glass-card contact-card">
            <div className="contact-icon-wrapper">
              <Phone size={20} />
            </div>
            <div>
              <p className="contact-detail-title">Call Me</p>
              <a href="tel:8152906969" className="contact-detail-value">+91 8152906969</a>
            </div>
          </div>

          <div className="glass-card contact-card contact-card-purple">
            <div className="contact-icon-wrapper">
              <Mail size={20} />
            </div>
            <div>
              <p className="contact-detail-title">Email Me</p>
              <a href="mailto:uniquesneha7453@gmail.com" className="contact-detail-value">uniquesneha7453@gmail.com</a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form (Right) */}
        <motion.div className="glass-card contact-form-wrapper" variants={itemVariants}>
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="form"
                className="contact-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`form-input ${errors.name ? 'form-input-error' : ''}`}
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`form-input ${errors.email ? 'form-input-error' : ''}`}
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className={`form-input ${errors.message ? 'form-input-error' : ''}`}
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleInputChange}
                    style={{ resize: 'vertical' }}
                  />
                  {errors.message && <span className="error-text">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ alignSelf: 'flex-start', marginTop: '10px' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                className="success-message"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <CheckCircle2 size={48} style={{ alignSelf: 'center', marginBottom: '8px' }} />
                <h3>Thank you!</h3>
                <p>Your message has been sent successfully. I will get back to you shortly.</p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="btn btn-secondary"
                  style={{ alignSelf: 'center', marginTop: '16px' }}
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
}
