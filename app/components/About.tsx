'use client'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 bg-black/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
              <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <p className="text-gray-500">Profile Photo</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gradient">Passionate about creating impact through code</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              I'm a creative developer with 4+ years of experience building beautiful,
              user-centered applications. My background in design and development allows me
              to bridge the gap between aesthetics and functionality.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              I believe technology should be accessible, inclusive, and delightful to use.
              When I'm not coding, you'll find me exploring new coffee shops, contributing
              to open source, or mentoring aspiring developers.
            </p>
            
            <div className="flex gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">10+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400">5+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500">4+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}