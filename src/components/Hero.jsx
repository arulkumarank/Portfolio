import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="hero" className="relative z-10 min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <div className="mb-6 overflow-hidden">
          <h1 className="text-6xl md:text-8xl font-black mb-4 animate-[slideUp_0.8s_ease-out]">
            <span className="inline-block hover:scale-110 transition-transform duration-300">
              {personalInfo.tagline.split(' ')[0]}
            </span>{' '}
            <span className="inline-block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300">
              {personalInfo.tagline.split(' ')[1]}
            </span>
          </h1>
        </div>
        <p className="text-xl md:text-2xl text-gray-400 mb-8 animate-[slideUp_0.8s_ease-out_0.2s_both]">
          {personalInfo.title}
        </p>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12 animate-[slideUp_0.8s_ease-out_0.4s_both]">
          {personalInfo.description}
        </p>
        <div className="flex gap-4 justify-center animate-[slideUp_0.8s_ease-out_0.6s_both]">
          <a 
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
          >
            View Projects
          </a>
          <a 
            href="#contact"
            className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}