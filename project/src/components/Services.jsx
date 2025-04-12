import React from 'react';
import '../styles/Services.css';

function Services() {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        <div className="service-card">
          <h3>Web Development</h3>
          <p>Custom web solutions for your business</p>
        </div>
        <div className="service-card">
          <h3>Mobile Apps</h3>
          <p>Native and cross-platform mobile applications</p>
        </div>
        <div className="service-card">
          <h3>Cloud Solutions</h3>
          <p>Scalable cloud infrastructure and services</p>
        </div>
      </div>
    </section>
  );
}

export default Services;