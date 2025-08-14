'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export const Contact = () => {
  const contactInfo = [
    {
      label: 'Email',
      value: 'israel.arcos2595@gmail.com',
      href: 'mailto:israel.arcos2595@gmail.com',
      icon: '/assets/gmail.svg',
    },
    {
      label: 'LinkedIn',
      value: 'israel-a-175030204',
      href: 'https://www.linkedin.com/in/israel-a-175030204/',
      icon: '/assets/linkedin.svg',
    },
    {
      label: 'GitHub',
      value: 'israx',
      href: 'https://github.com/israx',
      icon: '/assets/github.svg',
    },
  ];

  return (
    <section id="contact" className="bg-gray-800 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="font-mono text-green-400 font-bold text-2xl md:text-3xl">
            <span className="text-yellow-400">{'>'}</span> contact
          </h2>
        </motion.div>

        {/* Contact Terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gray-900 border-2 border-green-400/50 shadow-2xl"
        >
          {/* Terminal Header */}
          <div className="flex items-center justify-between bg-gray-700 px-6 py-4 border-b border-green-400/30">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 rounded-full bg-red-500"></div>
              <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
            </div>
            <div className="font-mono text-sm text-gray-400">
              contact_manager.exe
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-8">
            {/* Opening Message */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="font-mono text-green-400 mb-8"
            >
              <div className="text-yellow-400">{'>'}</div>
              <div className="ml-4 mt-2">Connection established...</div>
              <div className="ml-4 text-gray-300">Available communication channels:</div>
            </motion.div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.2 }}
                  className="group"
                >
                  <div className="flex items-center space-x-4 p-4 border border-gray-600 hover:border-green-400/50 transition-all duration-300 bg-gray-800/50">
                    {/* Icon */}
                    <div className="w-8 h-8 relative flex-shrink-0">
                      <Image
                        src={contact.icon}
                        alt={contact.label}
                        fill
                        className="object-contain group-hover:brightness-110 transition-all duration-300"
                        sizes="32px"
                      />
                    </div>

                    {/* Contact Info */}
                    <div className="flex-1 min-w-0">
                      <div className="font-mono text-sm text-gray-400">
                        {contact.label}:
                      </div>
                      <a
                        href={contact.href}
                        target={contact.href.startsWith('mailto:') ? '_self' : '_blank'}
                        rel={contact.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                        className="font-mono text-green-400 hover:text-yellow-400 transition-colors duration-300 block truncate"
                      >
                        {contact.value}
                      </a>
                    </div>

                    {/* Terminal Indicator */}
                    <div className="font-mono text-gray-500 group-hover:text-green-400 transition-colors duration-300">
                      [connect]
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>


            {/* Terminal Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
              className="mt-8 pt-6 border-t border-gray-600"
            >
              <div className="font-mono text-sm text-gray-400 flex items-center">
                <span className="text-green-400 mr-2">$</span>
                <span>Ready to connect</span>
                <span className="text-green-400 ml-2 animate-pulse">|</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
