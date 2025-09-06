'use client'

import { motion } from 'framer-motion'
import { ArrowRight, LucideIcon } from 'lucide-react'
import Link from 'next/link'

interface SpecialtyCardProps {
  title: string
  icon: LucideIcon
  description?: string
  href: string
}

export default function SpecialtyCard({ title, icon: Icon, description, href }: SpecialtyCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group"
    >
      <Link href={href}>
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-sage-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center">
          {/* Icon container with organic shape */}
          <div className="relative mb-6">
            <div className="w-24 h-24 bg-gradient-to-br from-sage-100 to-lavender-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-10 h-10 text-sage-600" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-sage-200/50 rounded-full blur-sm group-hover:scale-125 transition-transform duration-300"></div>
          </div>
          
          <h3 className="text-xl font-bold text-purple-900 mb-3 font-[family-name:var(--font-crimson)] group-hover:text-sage-700 transition-colors duration-300">
            {title}
          </h3>
          
          {description && (
            <p className="text-sm text-warmgray-600 mb-4 leading-relaxed">
              {description}
            </p>
          )}
          
          <div className="mt-auto flex items-center text-sage-600 font-medium text-sm group-hover:text-sage-700 transition-colors duration-300">
            Read More
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}