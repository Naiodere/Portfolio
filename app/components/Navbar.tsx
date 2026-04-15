'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['Work', 'Skills', 'About', 'Contact']

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-xl border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="container-custom py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gradient">
          Naomi.
        </Link>
        
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-orange-400 transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-gray-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/95 backdrop-blur-xl border-b border-gray-800"
        >
          <div className="container-custom py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`/#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-orange-400 py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  )
}