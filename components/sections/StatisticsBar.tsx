'use client'

import { motion } from 'framer-motion'
import StatCard from '@/components/ui/StatCard'

const stats = [
  { number: '10', label: 'Therapists' },
  { number: '59', label: 'Specialties' },
  { number: '23', label: 'Services' },
  { number: '5', label: 'Locations' }
]

export default function StatisticsBar() {
  return (
    <section className="py-16 bg-gradient-to-r from-sage-50 via-cream-50 to-lavender-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-sage-200/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-lavender-200/20 rounded-full blur-2xl"></div>
      
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex justify-center">
              <StatCard
                number={stat.number}
                label={stat.label}
                animated={true}
                delay={index * 200}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom border decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sage-200 to-transparent"></div>
    </section>
  )
}