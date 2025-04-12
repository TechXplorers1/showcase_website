import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Target, Zap, Star, Calendar } from 'lucide-react';
import '../styles/Programs.css';

function Programs() {
  const programs = [
    {
      icon: <Trophy size={32} />,
      title: "Elite Training",
      description: "One-on-one training with professional coaches and former NBA players",
      price: "$299/month"
    },
    {
      icon: <Users size={32} />,
      title: "Team Development",
      description: "Group sessions focusing on team chemistry and advanced tactics",
      price: "$199/month"
    },
    {
      icon: <Target size={32} />,
      title: "Youth Academy",
      description: "Age-appropriate training for young athletes aged 8-14",
      price: "$149/month"
    },
    {
      icon: <Zap size={32} />,
      title: "Performance Camp",
      description: "Intensive 2-week camps during summer and winter breaks",
      price: "$599/camp"
    },
    {
      icon: <Star size={32} />,
      title: "College Prep",
      description: "Specialized training and exposure for college aspirants",
      price: "$349/month"
    },
    {
      icon: <Calendar size={32} />,
      title: "Weekend Clinics",
      description: "Focused skill development sessions every weekend",
      price: "$79/session"
    }
  ];

  return (
    <section id="programs" className="programs">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        Training Programs
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="section-subtitle"
      >
        Choose from our comprehensive range of basketball development programs
      </motion.p>
      
      <div className="programs-grid">
        {programs.map((program, index) => (
          <motion.div 
            key={program.title}
            className="program-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="icon-wrapper">
              {program.icon}
            </div>
            <h3>{program.title}</h3>
            <p>{program.description}</p>
            <div className="program-price">{program.price}</div>
            <motion.button
              className="program-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Programs;