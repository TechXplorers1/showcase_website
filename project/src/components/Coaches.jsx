import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin } from 'lucide-react';
import '../styles/Coaches.css';

function Coaches() {
  const coaches = [
    {
      name: "Michael Thompson",
      role: "Head Coach & Director",
      experience: "Former NBA Player, 15+ years coaching",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      social: {
        twitter: "https://twitter.com/coachthompson",
        linkedin: "https://linkedin.com/in/coachthompson"
      }
    },
    {
      name: "Sarah Rodriguez",
      role: "Youth Development Coach",
      experience: "WNBA Veteran, 8+ years coaching",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300",
      social: {
        twitter: "https://twitter.com/coachsarah",
        linkedin: "https://linkedin.com/in/coachsarah"
      }
    },
    {
      name: "David Chen",
      role: "Performance Coach",
      experience: "D1 College Coach, 12+ years experience",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
      social: {
        twitter: "https://twitter.com/coachdchen",
        linkedin: "https://linkedin.com/in/coachdchen"
      }
    }
  ];

  return (
    <section id="coaches" className="coaches">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        Our Coaches
      </motion.h2>

      <div className="coaches-grid">
        {coaches.map((coach, index) => (
          <motion.div
            key={coach.name}
            className="coach-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="coach-image">
              <img src={coach.image} alt={coach.name} />
            </div>
            <div className="coach-info">
              <h3>{coach.name}</h3>
              <h4>{coach.role}</h4>
              <p>{coach.experience}</p>
              <div className="coach-social">
                <a href={coach.social.twitter} target="_blank" rel="noopener noreferrer">
                  <Twitter size={20} />
                </a>
                <a href={coach.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Coaches;