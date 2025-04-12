import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import '../styles/Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        Contact Us
      </motion.h2>

      <div className="contact-container">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Get in Touch</h3>
          <div className="info-item">
            <Phone size={20} />
            <p>(555) 123-4567</p>
          </div>
          <div className="info-item">
            <Mail size={20} />
            <p>info@swbshowcase.com</p>
          </div>
          <div className="info-item">
            <MapPin size={20} />
            <p>123 Basketball Ave<br />Phoenix, AZ 85001</p>
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" required></textarea>
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;