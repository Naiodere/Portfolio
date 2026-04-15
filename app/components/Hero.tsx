'use client'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FiArrowDown, FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)
    handleResize()
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Calculate mouse-following light position
  const lightX = (mousePosition.x / windowSize.width) * 100
  const lightY = (mousePosition.y / windowSize.height) * 100

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Dynamic gradient background that shifts - REDUCED OPACITY */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 via-amber-600/5 to-transparent animate-slow-drift" />
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/5 via-pink-600/5 to-orange-600/5 animate-slow-drift" style={{ animationDelay: '-5s' }} />
      </div>

      {/* Pulsing light orbs - REDUCED SIZE AND OPACITY */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500 rounded-full mix-blend-screen filter blur-3xl opacity-[0.08] animate-breathing" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-amber-500 rounded-full mix-blend-screen filter blur-3xl opacity-[0.06] animate-breathing" style={{ animationDelay: '-4s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-500 rounded-full mix-blend-screen filter blur-3xl opacity-[0.04] animate-breathing" style={{ animationDelay: '-2s' }} />
      </div>

      {/* Mouse-following spotlight effect - REDUCED OPACITY */}
      <div 
        className="absolute pointer-events-none"
        style={{
          left: `${lightX}%`,
          top: `${lightY}%`,
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, rgba(249,115,22,0) 70%)',
          transition: 'all 0.3s ease-out'
        }}
      />

      {/* Animated border gradient line that moves */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent animate-shimmer" />

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Creating digital{' '}
            <span className="text-gradient bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent">experiences</span>
            <br />
            that inspire
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          I'm Naomi Dereje — a creative developer who turns ideas into 
          beautiful, functional digital products
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#work"
            className="group relative px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full text-white font-semibold overflow-hidden transition-all duration-300 transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <FiArrowDown className="group-hover:translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          
          <div className="flex gap-3">
            {[FiGithub, FiLinkedin, FiTwitter, FiMail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-3 bg-gray-900 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-gray-300 hover:text-orange-400 border border-gray-800 group"
              >
                <Icon size={20} className="group-hover:rotate-12 transition-transform" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Animated scroll indicator with pulsing glow - REDUCED INTENSITY */}
      <motion.div
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-orange-500 rounded-full filter blur-xl opacity-20 animate-ping" />
          <FiArrowDown className="relative text-orange-400/50" />
        </div>
      </motion.div>
    </section>
  )
}