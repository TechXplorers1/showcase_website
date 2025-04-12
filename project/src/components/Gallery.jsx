import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Gallery.css';

function Gallery() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=800",
      caption: "Elite Training Session"
    },
    {
      url: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=800",
      caption: "Youth Development Program"
    },
    {
      url: "https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?auto=format&fit=crop&q=80&w=800",
      caption: "State-of-the-art Facilities"
    },
    {
      url: "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&q=80&w=800",
      caption: "Professional Coaching"
    },
    {
      url: "https://images.unsplash.com/photo-1627627256672-027a4613d028?auto=format&fit=crop&q=80&w=800",
      caption: "Tournament Action"
    },
    {
      url: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?auto=format&fit=crop&q=80&w=800",
      caption: "Team Building"
    }
  ];

  return (
    <section id="gallery" className="gallery">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        Gallery
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="section-subtitle"
      >
        Experience the energy and dedication at SWBS
      </motion.p>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <motion.div
            key={image.url}
            className="gallery-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="image-wrapper">
              <img src={image.url} alt={image.caption} />
              <div className="image-overlay">
                <p>{image.caption}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;