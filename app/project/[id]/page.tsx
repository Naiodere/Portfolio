'use client'
import { useParams } from 'next/navigation'
import { projects } from '@/data/projects'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowLeft, FiExternalLink, FiGithub, FiCheck } from 'react-icons/fi'

export default function ProjectPage() {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gradient">Project not found</h1>
          <Link href="/#work" className="text-pink-400 hover:text-pink-300 transition-colors">
            Go back to projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="container-custom">
        {/* Back button */}
        <Link 
          href="/#work" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-pink-400 mb-8 transition-colors"
        >
          <FiArrowLeft /> Back to Projects
        </Link>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">{project.title}</span>
          </h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-full text-sm text-gray-300">
                {tech}
              </span>
            ))}
          </div>
          <p className="text-xl text-gray-300 max-w-3xl">{project.fullDescription}</p>
        </motion.div>

        {/* Project Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden mb-12 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-gray-500">Project Screenshot Coming Soon</p>
          </div>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          {project.liveUrl && project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-pink-500/30 transition-all"
            >
              Live Demo <FiExternalLink />
            </a>
          )}
          {project.githubUrl && project.githubUrl !== '#' && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 rounded-lg text-white font-semibold hover:bg-gray-700 transition-all"
            >
              View Code <FiGithub />
            </a>
          )}
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                <FiCheck className="text-pink-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Challenge & Solution */}
        {project.challenge && project.solution && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid md:grid-cols-2 gap-8 mb-12"
          >
            <div className="p-6 bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-2xl border border-red-500/20">
              <h3 className="text-xl font-bold mb-3 text-red-400">Challenge</h3>
              <p className="text-gray-300">{project.challenge}</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-green-900/20 to-teal-900/20 rounded-2xl border border-green-500/20">
              <h3 className="text-xl font-bold mb-3 text-green-400">Solution</h3>
              <p className="text-gray-300">{project.solution}</p>
            </div>
          </motion.div>
        )}

        {/* Tech Stack Detailed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700"
        >
          <h3 className="text-xl font-bold mb-4 text-gradient">Technologies Used</h3>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-4 py-2 bg-black/50 rounded-lg text-pink-400 font-mono text-sm border border-gray-700">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}