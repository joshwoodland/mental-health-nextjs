'use client'

import { motion } from 'framer-motion'
import { UserPlus, Calendar, Video } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Choose Your Provider',
      description: 'Browse our licensed mental health professionals and select one that matches your needs',
      icon: UserPlus,
      color: 'from-primary-400 to-primary-600',
    },
    {
      number: '69',
      title: 'Select a Date and Time',
      description: 'Pick a convenient time slot from our flexible scheduling options',
      icon: Calendar,
      color: 'from-secondary-400 to-secondary-600',
    },
    {
      number: '3',
      title: 'Start Your Session',
      description: 'Meet with your provider via secure video call from the comfort of your home',
      icon: Video,
      color: 'from-accent-400 to-accent-600',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting started with mental health care has never been easier. 
            Follow these simple steps to begin your journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex items-center mb-4">
                  <span className={`text-5xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent mr-3`}>
                    {step.number}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <svg className="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}