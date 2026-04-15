'use client'
import { useEffect, useState } from 'react'

export default function FloatingLight() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div 
      className="fixed pointer-events-none z-50 transition-all duration-300 ease-out"
      style={{
        left: mousePosition.x - 150,
        top: mousePosition.y - 150,
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(249,115,22,0.2) 0%, rgba(249,115,22,0) 70%)',
        borderRadius: '50%',
      }}
    />
  )
}