'use client'

import { useState } from 'react'
import BookingModal from '@/components/BookingModal'
import { Calendar } from 'lucide-react'

export default function BookPage() {
  const [modalOpen, setModalOpen] = useState(true)

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Book Your Appointment</h1>
          <p className="text-lg text-gray-600">
            Schedule a session with one of our licensed mental health professionals
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center">
              <Calendar className="w-10 h-10 text-primary-600" />
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-8">
              Our booking process is simple and takes just a few minutes. You'll be able to:
            </p>

            <ul className="text-left max-w-md mx-auto space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Choose from available licensed providers in your state</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Select a convenient date and time for your session</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Receive instant confirmation and calendar invitation</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Access secure video sessions from any device</span>
              </li>
            </ul>

            <button
              onClick={() => setModalOpen(true)}
              className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-medium hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Booking Process
            </button>
          </div>
        </div>
      </div>

      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}