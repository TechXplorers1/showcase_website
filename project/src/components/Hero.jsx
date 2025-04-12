import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronRight } from 'lucide-react';
import '../styles/Hero.css';
import bg from '../assets/bg.mp4'; 

function Hero() {
  return (
    <section className="hero">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-video"
        src={bg}
      />
      <div className="hero-overlay" />
      <div className="hero-content">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-title"
        >
          Elevate Your Game at <span className="text-swbs-blue">SWBS</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-subtitle"
        >
          Join the Southwest's premier basketball development program
        </motion.p>
        
        <motion.div 
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button 
            className="cta-button primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Now <ChevronRight className="inline ml-2" />
          </motion.button>
          
          <motion.button 
            className="cta-button secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Schedule <Calendar className="inline ml-2" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;