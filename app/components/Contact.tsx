'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="py-24 bg-black/20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-gray-200">Get in touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <FiMail className="text-orange-400 text-xl" />
                    <span>naomidereje1221@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <FiPhone className="text-amber-400 text-xl" />
                    <span>+251 961154066</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <FiMapPin className="text-yellow-500 text-xl" />
                    <span>Addis Ababa, Ethiopia</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-600/20 to-amber-600/20 rounded-2xl p-6 border border-orange-500/30">
                <h3 className="text-xl font-bold mb-2 text-gray-200">Available for work</h3>
                <p className="text-gray-300">
                  Currently accepting new projects and freelance opportunities. 
                  Let's create something amazing together!
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-700">
                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-gray-900 rounded-lg border border-gray-700 focus:border-orange-500 focus:outline-none transition-colors text-white placeholder-gray-500"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 bg-gray-900 rounded-lg border border-gray-700 focus:border-orange-500 focus:outline-none transition-colors text-white placeholder-gray-500"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-900 rounded-lg border border-gray-700 focus:border-orange-500 focus:outline-none transition-colors text-white placeholder-gray-500 resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full group px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Send Message <FiSend className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                  
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-green-400 text-center text-sm"
                    >
                      Message sent successfully! 🎉
                    </motion.div>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}