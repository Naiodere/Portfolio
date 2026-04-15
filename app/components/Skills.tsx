'use client'
import { motion } from 'framer-motion'
import { FiCode, FiDatabase, FiLayout, FiCloud, FiShield, FiZap } from 'react-icons/fi'

export default function Skills() {
  const skills = [
    { name: 'Frontend Development', icon: FiCode, color: 'text-orange-400' },
    { name: 'UI/UX Design', icon: FiLayout, color: 'text-amber-400' },
    { name: 'Backend Development', icon: FiDatabase, color: 'text-yellow-500' },
    { name: 'Cloud Services', icon: FiCloud, color: 'text-blue-400' },
    { name: 'Performance Optimization', icon: FiZap, color: 'text-lime-400' },
    { name: 'Security Best Practices', icon: FiShield, color: 'text-green-400' },
  ]

  return (
    <section id="skills" className="py-24 bg-black/20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I specialize in
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 text-center group border border-gray-700 hover:border-orange-500/50"
            >
              <skill.icon className={`w-12 h-12 ${skill.color} mx-auto mb-4 group-hover:scale-110 transition-transform`} />
              <h3 className="text-lg font-semibold mb-2 text-gray-200">{skill.name}</h3>
              <p className="text-gray-400 text-sm">Expert in modern {skill.name.toLowerCase()} practices</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}