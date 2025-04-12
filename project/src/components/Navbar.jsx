import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import '../styles/Navbar.css';
import logo from '../assets/logo.png'; // <-- Import the local logo image

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="navbar"
    >
      <div className="navbar-container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img 
            src={logo} // <-- Use the imported image here
            alt="SWBS Logo" 
            className="h-12"
          />
          <div className="logo-text">
            <h1>SWBS</h1>
            <p>Southwest Basketball Showcase</p>
          </div>
        </motion.div>
        
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <motion.a href="#home" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Home</motion.a>
          <motion.a href="#programs" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Programs</motion.a>
          <motion.a href="#events" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Events</motion.a>
          <motion.a href="#coaches" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Coaches</motion.a>
          <motion.a href="#gallery" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Gallery</motion.a>
          <motion.a href="#contact" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Contact</motion.a>
        </div>
        
        <motion.button 
          className="mobile-menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>
    </motion.nav>
  );
}

export default Navbar;
