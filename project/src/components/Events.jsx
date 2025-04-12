import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users } from 'lucide-react';
import '../styles/Events.css';

function Events() {
  const events = [
    {
      title: "Summer Showcase Tournament",
      date: "July 15-17, 2024",
      location: "Phoenix Convention Center",
      description: "Annual 3-day tournament featuring top high school teams from the Southwest",
      participants: "32 teams"
    },
    {
      title: "College Scouts Camp",
      date: "August 5-6, 2024",
      location: "Grand Canyon University Arena",
      description: "Exposure event with college scouts from Division I, II, and III schools",
      participants: "100 players"
    },
    {
      title: "Holiday Basketball Classic",
      date: "December 26-28, 2024",
      location: "Talking Stick Resort Arena",
      description: "Winter break tournament with skills competition and all-star game",
      participants: "24 teams"
    }
  ];

  return (
    <section id="events" className="events">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        Upcoming Events
      </motion.h2>

      <div className="events-grid">
        {events.map((event, index) => (
          <motion.div
            key={event.title}
            className="event-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <h3>{event.title}</h3>
            <div className="event-details">
              <p><Calendar size={16} className="inline mr-2" />{event.date}</p>
              <p><MapPin size={16} className="inline mr-2" />{event.location}</p>
              <p><Users size={16} className="inline mr-2" />{event.participants}</p>
            </div>
            <p className="event-description">{event.description}</p>
            <motion.button
              className="event-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register Now
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Events;