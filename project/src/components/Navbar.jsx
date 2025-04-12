import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="navbar shadow-sm"
    >
      <div className="container-fluid d-flex align-items-center justify-content-between px-4 py-3 nav-bar">
        
        {/* Left Logo - 10% width */}
        <div className="navbar-logo d-flex align-items-center" style={{ width: '20%' }}>
          <motion.div
            className="logo-container d-flex align-items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={logo} alt="SWBS Logo" className="logo-img" />
            <div className="ms-2">
              
              <p className="mb-0 small-text ">Southwest Basketball Showcase</p>
            </div>
          </motion.div>
        </div>

        {/* Right Links - 90% width */}
        <div className="navbar-links-container d-flex justify-content-end align-items-center" style={{ width: '80%' }}>
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            {["home", "programs", "events", "coaches", "gallery", "contact"].map((link) => (
              <motion.a
                key={link}
                href={`#${link}`}
                className="nav-item"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </motion.a>
            ))}
          </div>

          {/* Hamburger Menu */}
          <motion.button
            className="mobile-menu-btn d-md-none ms-3"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
