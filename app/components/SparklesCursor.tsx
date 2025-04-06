'use client'
import React, { useEffect, useState } from 'react'

interface Sparkle {
  id: number
  x: number
  y: number
  createdAt: number
}

export default function SparklesCursor() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      // Create new sparkle
      const newSparkle = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        createdAt: Date.now()
      }

      setSparkles(prevSparkles => [...prevSparkles, newSparkle])
    }

    // Clean up old sparkles
    const cleanupInterval = setInterval(() => {
      setSparkles(prevSparkles => 
        prevSparkles.filter(sparkle => Date.now() - sparkle.createdAt < 1000)
      )
    }, 100)

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearInterval(cleanupInterval)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="absolute w-2 h-2 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: sparkle.x,
            top: sparkle.y,
          }}
        >
          <div className="animate-sparkle">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute"
            >
              <circle cx="4" cy="4" r="4" fill="url(#sparkleGradient)" />
              <defs>
                <radialGradient
                  id="sparkleGradient"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(4 4) rotate(90) scale(4)"
                >
                  <stop stopColor="#14b8a6" />
                  <stop offset="1" stopColor="#14b8a6" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      ))}
    </div>
  )
} 