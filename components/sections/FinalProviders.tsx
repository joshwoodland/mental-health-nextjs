'use client'

import { motion } from 'framer-motion'
import ProviderCard from '@/components/ui/ProviderCard'

const featuredProviders = [
  {
    name: 'Josh Woodland',
    title: 'PMHNP',
    states: ['arizona', 'colorado', 'idaho', 'montana', 'utah', 'washington'],
    specialties: ['ADHD', 'Anxiety', 'Depression'],
    featured: true
  }
]

const additionalProviders = [
  {
    name: 'Dr. Sarah Chen',
    title: 'PMHNP',
    states: ['california', 'nevada', 'oregon'],
    specialties: ['Trauma', 'PTSD', 'Anxiety']
  },
  {
    name: 'Dr. Michael Torres',
    title: 'PMHNP',
    states: ['texas', 'new-mexico', 'oklahoma'],
    specialties: ['Depression', 'Bipolar', 'Relationships']
  },
  {
    name: 'Dr. Emily Rodriguez',
    title: 'PMHNP',
    states: ['florida', 'georgia', 'south-carolina'],
    specialties: ['Eating Disorders', 'Body Image', 'Anxiety']
  }
]

export default function FinalProviders() {
  return (
    <section className="py-20 bg-gradient-to-b from-sage-25 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-lavender-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-sage-200/15 rounded-full blur-3xl"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-900 mb-6 font-[family-name:var(--font-crimson)]">
            Our <span className="text-sage-500 italic">Providers</span>
          </h2>
          <p className="text-lg text-warmgray-600 max-w-2xl mx-auto">
            Meet our carefully selected team of licensed mental health professionals, 
            each bringing their unique expertise and compassionate approach to your care.
          </p>
        </motion.div>

        {/* Featured Provider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-12"
        >
          <div className="max-w-sm">
            {featuredProviders.map((provider, index) => (
              <ProviderCard
                key={index}
                name={provider.name}
                title={provider.title}
                states={provider.states}
                specialties={provider.specialties}
                featured={provider.featured}
              />
            ))}
          </div>
        </motion.div>

        {/* Additional Providers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {additionalProviders.map((provider, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <ProviderCard
                name={provider.name}
                title={provider.title}
                states={provider.states}
                specialties={provider.specialties}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-warmgray-600 mb-6">
            Can't find the right fit? Our care coordinators will help match you 
            with the perfect provider for your unique needs.
          </p>
          <div className="space-x-4">
            <a
              href="/providers"
              className="inline-flex items-center px-8 py-3 text-base font-semibold text-sage-700 bg-white border-2 border-sage-300 rounded-full hover:bg-sage-50 hover:border-sage-400 transition-all duration-200 shadow-md hover:shadow-lg font-[family-name:var(--font-nunito)]"
            >
              View All Providers
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-sage-400 to-sage-500 rounded-full hover:from-sage-500 hover:to-sage-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-[family-name:var(--font-nunito)]"
            >
              Get Matched
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}