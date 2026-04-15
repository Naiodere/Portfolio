'use client'
import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import Link from 'next/link'
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi'

export default function Projects() {
  const handleExternalLinkClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault()
    e.stopPropagation()
    window.open(url, '_blank')
  }

  return (
    <section id="work" className="py-24 bg-black/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my favorite projects that showcase my creative approach
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            className="group bg-black rounded-2xl overflow-hidden shadow-xl border border-gray-800 hover:border-orange-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]"
            >
              <Link href={`/project/${project.id}`}>
                <div>
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-500/10 group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full text-xs font-semibold text-white">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-gray-500 text-sm">Click for details</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-orange-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-xs px-2 py-1 bg-gray-700 rounded-full text-orange-300">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-gray-700 rounded-full text-orange-300">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between pt-2 border-t border-gray-700">
                      <div className="flex gap-3">
                        {project.liveUrl && project.liveUrl !== '#' && (
                          <button
                            onClick={(e) => handleExternalLinkClick(e, project.liveUrl!)}
                            className="text-gray-400 hover:text-orange-400 transition-colors"
                            aria-label="Live Demo"
                          >
                            <FiExternalLink size={18} />
                          </button>
                        )}
                        {project.githubUrl && project.githubUrl !== '#' && (
                          <button
                            onClick={(e) => handleExternalLinkClick(e, project.githubUrl!)}
                            className="text-gray-400 hover:text-orange-400 transition-colors"
                            aria-label="GitHub Repository"
                          >
                            <FiGithub size={18} />
                          </button>
                        )}
                      </div>
                      <span className="text-orange-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 text-sm">
                        Details <FiArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}