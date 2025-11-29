import React from 'react';
import { useMousePosition, useScrollPosition } from './hooks/useMousePosition';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/animations.css';

export default function App() {
  const mousePos = useMousePosition();
  const scrollY = useScrollPosition();

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 opacity-30">
        <div 
          className="absolute w-96 h-96 rounded-full blur-3xl bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-1000 ease-out"
          style={{
            left: `${mousePos.x - 192}px`,
            top: `${mousePos.y - 192}px`,
            transform: `scale(${1 + scrollY / 5000})`
          }}
        />
        <div 
          className="absolute w-96 h-96 rounded-full blur-3xl bg-gradient-to-r from-purple-500 to-pink-600 transition-all duration-1000 ease-out"
          style={{
            left: `${window.innerWidth - mousePos.x - 192}px`,
            top: `${mousePos.y - 192 + scrollY / 3}px`,
            transform: `scale(${1 + scrollY / 5000})`
          }}
        />
      </div>

      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}