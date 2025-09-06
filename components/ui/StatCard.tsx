'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface StatCardProps {
  number: string
  label: string
  animated?: boolean
  delay?: number
}

export default function StatCard({ number, label, animated = false, delay = 0 }: StatCardProps) {
  const [displayNumber, setDisplayNumber] = useState(animated ? '0' : number)
  
  useEffect(() => {
    if (animated && number) {
      const numericValue = parseInt(number)
      if (!isNaN(numericValue)) {
        const timer = setTimeout(() => {
          let current = 0
          const increment = numericValue / 30 // Animation duration of ~1 second
          const interval = setInterval(() => {
            current += increment
            if (current >= numericValue) {
              setDisplayNumber(number)
              clearInterval(interval)
            } else {
              setDisplayNumber(Math.floor(current).toString())
            }
          }, 33) // ~30fps
          
          return () => clearInterval(interval)
        }, delay)
        
        return () => clearTimeout(timer)
      }
    }
  }, [number, animated, delay])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay / 1000, duration: 0.6 }}
      className="text-center"
    >
      <div className="mb-2">
        <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-purple-900 font-[family-name:var(--font-crimson)]">
          {displayNumber}
        </span>
      </div>
      <p className="text-sm sm:text-base text-warmgray-600 font-medium">
        {label}
      </p>
    </motion.div>
  )
}