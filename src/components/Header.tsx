'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatedName } from './AnimatedName';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { label: 'home', href: '#home' },
    { label: 'skills', href: '#skills' },
    { label: 'projects', href: '#projects' },
    { label: 'contact', href: '#contact' },
  ];

  return (
    <header className="relative min-h-screen bg-gray-900 text-green-400 overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-green-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="font-mono text-green-400 font-bold text-xl">
              <span className="text-yellow-400">{'>'}</span> israx.dev
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 items-center">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-mono text-gray-300 hover:text-green-400 transition-colors duration-200 relative group"
                >
                  <span className="text-yellow-400">{'>'}</span> {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-200 group-hover:w-full"></span>
                </a>
              ))}
              
              {/* Resume Button */}
              <a
                href="/assets/Resume.pdf"
                download="Israel_Arcos_Resume.pdf"
                className="font-mono bg-transparent border-2 border-blue-400 text-blue-400 px-4 py-2 hover:bg-blue-400 hover:text-gray-900 transition-all duration-300 group"
              >
                <span className="group-hover:hidden">[resume]</span>
                <span className="hidden group-hover:inline">[downloading...]</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden font-mono text-green-400 hover:text-yellow-400 transition-colors"
            >
              {isMenuOpen ? '[close]' : '[menu]'}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-800 border-t border-green-400/20"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block font-mono text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  <span className="text-yellow-400">{'>'}</span> {item.label}
                </a>
              ))}
              <a
                href="/assets/Resume.pdf"
                download="Israel_Arcos_Resume.pdf"
                className="block font-mono bg-transparent border-2 border-blue-400 text-blue-400 px-4 py-2 hover:bg-blue-400 hover:text-gray-900 transition-all duration-300 group text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="group-hover:hidden">[resume]</span>
                <span className="hidden group-hover:inline">[downloading...]</span>
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Animated Name */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-8"
          >
            <AnimatedName />
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="font-mono text-lg md:text-xl text-gray-300 mb-12 leading-relaxed"
          >
            <span className="text-yellow-400">{'>'}</span> Full Stack Developer with focus on front-end
            <br />
            <span className="text-yellow-400">{'>'}</span> Passionate about creating seamless user experiences
            <br />
            <span className="text-yellow-400">{'>'}</span> Building robust web applications with modern technologies
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#projects"
              className="font-mono bg-transparent border-2 border-green-400 text-green-400 px-6 py-3 rounded-none hover:bg-green-400 hover:text-gray-900 transition-all duration-300 group"
            >
              <span className="group-hover:hidden">[view_projects]</span>
              <span className="hidden group-hover:inline">[loading...]</span>
            </a>
            <a
              href="#contact"
              className="font-mono bg-transparent border-2 border-yellow-400 text-yellow-400 px-6 py-3 rounded-none hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 group"
            >
              <span className="group-hover:hidden">[contact_me]</span>
              <span className="hidden group-hover:inline">[connecting...]</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="font-mono text-sm text-gray-400">[scroll_down]</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-green-400 text-xl"
          >
            ↓
          </motion.div>
        </div>
      </motion.div>
    </header>
  );
};
