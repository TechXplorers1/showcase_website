import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>SWBS</h3>
          <p>Southwest Basketball Showcase - Where champions are made. Join us in our state-of-the-art facilities and train with the best.</p>
          <div className="social-links">
            <motion.a href="#" whileHover={{ scale: 1.2 }}><Facebook size={20} /></motion.a>
            <motion.a href="#" whileHover={{ scale: 1.2 }}><Twitter size={20} /></motion.a>
            <motion.a href="#" whileHover={{ scale: 1.2 }}><Instagram size={20} /></motion.a>
            <motion.a href="#" whileHover={{ scale: 1.2 }}><Youtube size={20} /></motion.a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#coaches">Coaches</a></li>
            <li><a href="#gallery">Gallery</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <div className="contact-info">
            <p><Phone size={16} /> (555) 123-4567</p>
            <p><Mail size={16} /> info@swbshowcase.com</p>
            <p><MapPin size={16} /> 123 Basketball Ave, Phoenix, AZ 85001</p>
          </div>
        </div>

        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>Subscribe to get updates about our programs and events.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </form>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Southwest Basketball Showcase. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;