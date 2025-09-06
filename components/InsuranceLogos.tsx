'use client'

import { motion } from 'framer-motion'
import { useAppStore } from '@/lib/store'
import { useEffect, useState } from 'react'

const mockInsurances = [
  { id: '1', name: 'Aetna', logoUrl: '/api/placeholder/150/80', states: ['all'] },
  { id: '2', name: 'Blue Cross Blue Shield', logoUrl: '/api/placeholder/150/80', states: ['all'] },
  { id: '3', name: 'Cigna', logoUrl: '/api/placeholder/150/80', states: ['all'] },
  { id: '4', name: 'United Healthcare', logoUrl: '/api/placeholder/150/80', states: ['all'] },
  { id: '5', name: 'Humana', logoUrl: '/api/placeholder/150/80', states: ['all'] },
  { id: '6', name: 'Kaiser Permanente', logoUrl: '/api/placeholder/150/80', states: ['california', 'oregon', 'washington'] },
  { id: '7', name: 'Anthem', logoUrl: '/api/placeholder/150/80', states: ['all'] },
  { id: '8', name: 'Regence', logoUrl: '/api/placeholder/150/80', states: ['oregon', 'washington', 'idaho', 'utah'] },
]

export default function InsuranceLogos() {
  const { selectedState, setInsurances } = useAppStore()
  const [displayedInsurances, setDisplayedInsurances] = useState(mockInsurances)

  useEffect(() => {
    let insurances = mockInsurances
    if (selectedState) {
      insurances = mockInsurances.filter(
        ins => ins.states.includes('all') || ins.states.includes(selectedState)
      )
    }
    setDisplayedInsurances(insurances)
    setInsurances(insurances)
  }, [selectedState, setInsurances])

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Insurance We Accept
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We work with major insurance providers to make mental health care accessible and affordable
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {displayedInsurances.map((insurance, index) => (
            <motion.div
              key={insurance.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center justify-center"
            >
              <div className="w-32 h-16 bg-white rounded-lg shadow-sm p-4 flex items-center justify-center hover:shadow-md transition-shadow">
                <span className="text-xs font-medium text-gray-600">{insurance.name}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            Don't see your insurance? <a href="/insurance" className="text-primary-600 hover:text-primary-700 font-medium">Contact us</a> to verify coverage
          </p>
        </div>
      </div>
    </section>
  )
}