'use client'

import { motion } from 'framer-motion'
import { Heart, Users, Utensils, Brain, Zap, Shield, RefreshCw, HelpCircle, ArrowRight } from 'lucide-react'
import SpecialtyCard from '@/components/ui/SpecialtyCard'
import Link from 'next/link'

const specialties = [
  {
    title: 'Anxiety',
    icon: Heart,
    description: 'Evidence-based treatment for anxiety disorders and panic attacks',
    href: '/services/anxiety'
  },
  {
    title: 'Relationships',
    icon: Users,
    description: 'Couples therapy and relationship counseling for stronger connections',
    href: '/services/relationships'
  },
  {
    title: 'Eating Disorders',
    icon: Utensils,
    description: 'Specialized care for eating disorders and body image concerns',
    href: '/services/eating-disorders'
  },
  {
    title: 'Depression',
    icon: Brain,
    description: 'Comprehensive depression treatment and mood disorder support',
    href: '/services/depression'
  },
  {
    title: 'ADHD',
    icon: Zap,
    description: 'ADHD assessment, medication management, and coping strategies',
    href: '/services/adhd'
  },
  {
    title: 'Childhood Abuse',
    icon: Shield,
    description: 'Trauma-informed care for survivors of childhood abuse and neglect',
    href: '/services/childhood-abuse'
  },
  {
    title: 'OCD',
    icon: RefreshCw,
    description: 'Specialized OCD treatment including ERP and cognitive therapy',
    href: '/services/ocd'
  },
  {
    title: 'Trauma',
    icon: HelpCircle,
    description: 'EMDR and trauma-focused therapy for PTSD and complex trauma',
    href: '/services/trauma'
  }
]

export default function SpecialtiesGrid() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-cream-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-900 mb-6 font-[family-name:var(--font-crimson)]">
            Our <span className="text-sage-500 italic">Specialties</span>
          </h2>
          <p className="text-lg text-warmgray-600 max-w-3xl mx-auto">
            Our experienced providers specialize in a wide range of mental health conditions, 
            offering personalized care tailored to your unique needs.
          </p>
        </motion.div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <SpecialtyCard
                title={specialty.title}
                icon={specialty.icon}
                description={specialty.description}
                href={specialty.href}
              />
            </motion.div>
          ))}
        </div>

        {/* View All Services Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-sage-700 bg-white border-2 border-sage-300 rounded-full hover:bg-sage-50 hover:border-sage-400 transition-all duration-300 shadow-md hover:shadow-lg font-[family-name:var(--font-nunito)]"
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}