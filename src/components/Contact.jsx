import React, { useState, useRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import emailjs from 'emailjs-com';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {

  const form = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_xfsl2zg',
      'template_suqlnli',
      form.current,
      'od-R_yrbC55_cDu3P'
    ).then(
      () => {
        alert("Message sent successfully!");
        setFormData({ name: '', email: '', message: '' });
      },
      (error) => {
        alert("Failed to send message");
        console.error(error);
      }
    );
  };

  return (
    <section id="contact" className="relative z-10 min-h-screen flex items-center px-6 py-20">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-5xl md:text-6xl font-black mb-16 text-center">
          <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
            Let's Connect
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* LEFT INFO */}
          <div className="space-y-6">
            <p className="text-xl text-gray-300 leading-relaxed">
              Have a project in mind? Looking for a developer who understands 
              software and embedded systems? Let's build something great together.
            </p>

            <div className="space-y-4 pt-6">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 group">
                <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl group-hover:scale-110 transition">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-gray-300 group-hover:text-white">
                  {personalInfo.email}
                </span>
              </a>

              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl group-hover:scale-110 transition">
                  <Github className="w-6 h-6" />
                </div>
                <span className="text-gray-300 group-hover:text-white">
                  {personalInfo.github.replace('https://', '')}
                </span>
              </a>

              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl group-hover:scale-110 transition">
                  <Linkedin className="w-6 h-6" />
                </div>
                <span className="text-gray-300 group-hover:text-white">
                  {personalInfo.linkedin.replace('https://', '')}
                </span>
              </a>
            </div>
          </div>

          {/* FORM */}
          <form ref={form} onSubmit={sendEmail} className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              name="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white"
            />

            <input
              type="email"
              placeholder="Your Email"
              name="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              name="message"
              required
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white"
            />

            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-semibold hover:scale-105 transition"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}
