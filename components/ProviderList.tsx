'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Star, Calendar, Heart } from 'lucide-react'
import Link from 'next/link'
import { useAppStore } from '@/lib/store'

const mockProviders = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    title: 'PMHNP',
    specialty: 'Anxiety & Depression',
    states: ['california', 'oregon', 'washington'],
    imageUrl: '/api/placeholder/200/200',
    rating: 4.9,
    available: true,
    calendarId: 'sarah.johnson@mentalcare.com',
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    title: 'PMHNP',
    specialty: 'ADHD & Autism',
    states: ['new-york', 'new-jersey', 'connecticut'],
    imageUrl: '/api/placeholder/200/200',
    rating: 4.8,
    available: true,
    calendarId: 'michael.chen@mentalcare.com',
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    title: 'PMHNP',
    specialty: 'Trauma & PTSD',
    states: ['texas', 'florida', 'georgia'],
    imageUrl: '/api/placeholder/200/200',
    rating: 5.0,
    available: true,
    calendarId: 'emily.rodriguez@mentalcare.com',
  },
  {
    id: '4',
    name: 'Dr. James Wilson',
    title: 'PMHNP',
    specialty: 'Bipolar & Mood Disorders',
    states: ['illinois', 'michigan', 'ohio'],
    imageUrl: '/api/placeholder/200/200',
    rating: 4.7,
    available: true,
    calendarId: 'james.wilson@mentalcare.com',
  },
]

export default function ProviderList({ limit = 4, showAll = false }: { limit?: number, showAll?: boolean }) {
  const { selectedState, setProviders } = useAppStore()
  const [filteredProviders, setFilteredProviders] = useState(mockProviders)

  useEffect(() => {
    let providers = mockProviders
    if (selectedState && !showAll) {
      providers = mockProviders.filter(p => p.states.includes(selectedState))
    }
    setFilteredProviders(providers.slice(0, showAll ? providers.length : limit))
    setProviders(providers)
  }, [selectedState, limit, showAll, setProviders])

  return (
    <section className="py-20 bg-gradient-to-b from-cream-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-purple-900 mb-4 font-[family-name:var(--font-crimson)]">
            Our Mental Health Providers
          </h2>
          <p className="text-lg text-warmgray-600 max-w-2xl mx-auto">
            Connect with experienced, licensed professionals who are here to support your mental health journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProviders.map((provider, index) => (
            <motion.div
              key={provider.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-sage-100"
            >
              <div className="aspect-square bg-gradient-to-br from-sage-50 via-lavender-50 to-cream-100 flex items-center justify-center relative">
                <div className="absolute top-4 right-4">
                  <Heart className="w-5 h-5 text-sage-400" />
                </div>
                <div className="w-32 h-32 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center">
                  <span className="text-3xl font-semibold text-sage-600 font-[family-name:var(--font-crimson)]">
                    {provider.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-purple-900 mb-1 font-[family-name:var(--font-crimson)]">
                  {provider.name}
                </h3>
                <p className="text-sage-600 font-medium mb-2">{provider.title}</p>
                <p className="text-sm text-warmgray-600 mb-3">{provider.specialty}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-warmgray-600">{provider.rating}</span>
                  </div>
                  <div className="flex items-center text-sm text-warmgray-500">
                    <MapPin className="w-4 h-4 mr-1" />
                    {provider.states.length} states
                  </div>
                </div>
                
                <Link
                  href={`/book?provider=${provider.id}`}
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-sage-400 to-sage-500 text-white rounded-full hover:from-sage-500 hover:to-sage-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-[family-name:var(--font-nunito)] font-semibold text-sm"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Appointment
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {!showAll && filteredProviders.length >= limit && (
          <div className="text-center mt-12">
            <Link
              href="/providers"
              className="inline-flex items-center px-8 py-3 bg-white border-2 border-sage-300 text-sage-600 rounded-full hover:bg-sage-50 hover:border-sage-400 transition-all duration-200 font-medium"
            >
              See All Providers
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}