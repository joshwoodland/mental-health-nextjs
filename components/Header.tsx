'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Calendar, ChevronDown, Leaf } from 'lucide-react'
import { useAppStore } from '@/lib/store'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [stateMenuOpen, setStateMenuOpen] = useState(false)
  const { selectedState, setSelectedState } = useAppStore()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Providers', href: '/providers' },
    { name: 'Services', href: '/services' },
    { name: 'Insurance', href: '/insurance' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  const states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
    'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
  ]

  return (
    <header className="bg-cream-50/90 backdrop-blur-sm border-b border-sage-100 sticky top-0 z-40">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-sage-400 to-sage-500 rounded-2xl flex items-center justify-center shadow-md">
                <Leaf className="text-white h-6 w-6" />
              </div>
              <span className="text-2xl font-bold text-purple-900 font-[family-name:var(--font-crimson)]">
                MentalCare
              </span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-warmgray-600 hover:text-sage-600 hover:bg-sage-50 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200"
              >
                {item.name}
              </Link>
            ))}

            <div className="relative ml-2">
              <button
                onClick={() => setStateMenuOpen(!stateMenuOpen)}
                className="flex items-center text-warmgray-600 hover:text-sage-600 hover:bg-sage-50 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200"
              >
                {selectedState || 'Choose State'}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              <AnimatePresence>
                {stateMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl py-2 border border-sage-100"
                  >
                    {states.map((state) => (
                      <button
                        key={state}
                        onClick={() => {
                          setSelectedState(state.toLowerCase())
                          setStateMenuOpen(false)
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-warmgray-600 hover:bg-sage-50 hover:text-sage-600 transition-colors rounded-lg mx-2"
                      >
                        {state}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-3">
            <Link
              href="/book"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold rounded-full text-white bg-gradient-to-r from-sage-400 to-sage-500 hover:from-sage-500 hover:to-sage-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-[family-name:var(--font-nunito)]"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Book Now
            </Link>
            <a
              href="tel:1-800-MENTAL"
              className="inline-flex items-center px-5 py-2.5 border-2 border-sage-300 text-sm font-medium rounded-full text-sage-600 hover:bg-sage-50 hover:border-sage-400 transition-all duration-200"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </a>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-warmgray-600 hover:text-sage-600 p-2 rounded-lg hover:bg-sage-50 transition-colors"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream-50 border-t border-sage-100"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-base font-medium text-warmgray-600 hover:text-sage-600 hover:bg-sage-50 rounded-2xl transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 pb-2 border-t border-sage-100">
                <Link
                  href="/book"
                  className="block w-full text-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-sage-400 to-sage-500 rounded-full mb-3 shadow-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book Appointment
                </Link>
                <a
                  href="tel:1-800-MENTAL"
                  className="block w-full text-center px-6 py-3 text-sm font-medium text-sage-600 border-2 border-sage-300 rounded-full"
                >
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}