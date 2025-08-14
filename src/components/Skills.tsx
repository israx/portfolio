'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SkillIcon } from '@/types';

const skills: SkillIcon[] = [
  { name: 'React', path: '/assets/react.svg', alt: 'React' },
  { name: 'TypeScript', path: '/assets/typescript.svg', alt: 'TypeScript' },
  { name: 'JavaScript', path: '/assets/javascript.svg', alt: 'JavaScript' },
  { name: 'HTML5', path: '/assets/html.svg', alt: 'HTML5' },
  { name: 'CSS3', path: '/assets/css.svg', alt: 'CSS3' },
  { name: 'AWS', path: '/assets/aws.svg', alt: 'AWS' },
  { name: 'Git', path: '/assets/git.svg', alt: 'Git' },
  { name: 'GitHub', path: '/assets/github.svg', alt: 'GitHub' },
];

export const Skills = () => {
  return (
    <section id="skills" className="bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="font-mono text-green-400 font-bold text-2xl md:text-3xl">
            <span className="text-yellow-400">{'>'}</span> skills
          </h2>
        </motion.div>
  
        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100 
              }}
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Terminal Window */}
              <div className="bg-gray-900 border-2 border-green-400/30 hover:border-green-400 transition-all duration-300 p-6 relative">
                {/* Terminal Header */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="font-mono text-xs text-gray-400 ml-2">
                    {skill.name.toLowerCase()}.exe
                  </div>
                </div>

                {/* Icon */}
                <div className="flex justify-center items-center mb-4">
                  <div className="bg-white rounded-full p-3 shadow-lg">
                    <div className="w-16 h-16 relative">
                      <Image
                        src={skill.path}
                        alt={skill.alt}
                        fill
                        className="object-contain group-hover:brightness-110 transition-all duration-300"
                        sizes="(max-width: 768px) 64px, 64px"
                      />
                    </div>
                  </div>
                </div>

                {/* Skill Name */}
                <div className="font-mono text-green-400 text-center text-lg">
                  {skill.name}
                </div>

                {/* Terminal Output */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="font-mono text-xs text-gray-400 mt-2 text-center"
                >
                  [status: active]
                </motion.div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              {/* Terminal Cursor */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="absolute -bottom-2 -right-2 font-mono text-green-400 text-sm animate-pulse"
              >
                |
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
