import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Events from './components/Events';
import Coaches from './components/Coaches';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <AnimatePresence>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Hero />
          <Programs />
          <Events />
          <Coaches />
          <Gallery />
          <Contact />
        </main>
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;