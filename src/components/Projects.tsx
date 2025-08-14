'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Project } from '@/types';
import projectsData from '@/lib/projects.json';

export const Projects = () => {
  const { projects } = projectsData;

  return (
    <section id="projects" className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="font-mono text-green-400 font-bold text-2xl md:text-3xl">
            <span className="text-yellow-400">{'>'}</span> projects
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project: Project, index: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: 'spring',
                stiffness: 100 
              }}
              className="group relative"
            >
              {/* Terminal Window */}
              <div className="bg-gray-800 border-2 border-green-400/30 hover:border-green-400 transition-all duration-300 overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center justify-between bg-gray-700 px-4 py-2 border-b border-green-400/20">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="font-mono text-xs text-gray-400">
                    {project.id}.app
                  </div>
                </div>

                {/* Project Image */}
                <div className="relative h-48 bg-gray-900 border-b border-green-400/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="font-mono text-green-400 text-center">
                      <div className="text-4xl mb-2">{'{'}</div>
                      <div className="text-sm">{project.name}</div>
                      <div className="text-xs text-gray-400 mt-1">[preview_loading...]</div>
                      <div className="text-4xl mt-2">{'}'}</div>
                    </div>
                  </div>
                  {/* Overlay for future image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-800/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Project Name */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="font-mono text-xl text-green-400 mb-3"
                  >
                    <span className="text-yellow-400">{'>'}</span> {project.name}
                  </motion.div>

                  {/* Project Description */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="font-mono text-sm text-gray-300 leading-relaxed mb-6"
                  >
                    {project.description}
                  </motion.p>

                  {/* Project Links */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex flex-col sm:flex-row gap-3"
                  >
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm bg-transparent border border-green-400 text-green-400 px-4 py-2 hover:bg-green-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center group"
                    >
                      <span className="group-hover:hidden">[live_demo]</span>
                      <span className="hidden group-hover:inline">[launching...]</span>
                    </a>
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-sm bg-transparent border border-yellow-400 text-yellow-400 px-4 py-2 hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center group"
                      >
                        <span className="group-hover:hidden">[source_code]</span>
                        <span className="hidden group-hover:inline">[accessing...]</span>
                      </a>
                    )}
                  </motion.div>
                </div>

                {/* Terminal Footer */}
                <div className="bg-gray-700 px-4 py-2 border-t border-green-400/20">
                  <div className="font-mono text-xs text-gray-400 flex items-center">
                    <span className="text-green-400 mr-2">$</span>
                    <span>deployment status: </span>
                    <span className="text-green-400 ml-1">active</span>
                    <div className="ml-auto flex space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
