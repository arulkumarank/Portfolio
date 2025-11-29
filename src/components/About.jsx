import React from 'react';
import { Code, Cpu, Wifi, Terminal, Coffee } from 'lucide-react';
import { aboutMe, skills } from '../data/portfolioData';

const iconMap = {
  Cpu: Cpu,
  Wifi: Wifi,
  Code: Code,
  Terminal: Terminal,
  Coffee: Coffee
};

export default function About() {
  return (
    <section id="about" className="relative z-10 min-h-screen flex items-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-5xl md:text-6xl font-black mb-16 text-center">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {aboutMe.bio.map((paragraph, idx) => (
              <p key={idx} className="text-lg text-gray-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
            
            <div className="pt-6 space-y-4">
              {skills.map((skill, idx) => {
                const Icon = iconMap[skill.icon];
                return (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="font-semibold">{skill.name}</span>
                      </div>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 p-8 flex items-center justify-center">
              <div className="text-center space-y-8">
                <div className="text-6xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text">
                  {aboutMe.stats.experience}
                </div>
                <div className="text-xl text-gray-300">Years of Experience</div>
                
                <div className="relative">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400">{aboutMe.stats.projects}</div>
                    <div className="text-sm text-gray-400">Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}