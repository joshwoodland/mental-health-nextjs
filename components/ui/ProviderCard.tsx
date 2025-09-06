'use client'

import { motion } from 'framer-motion'
import { MapPin, Calendar } from 'lucide-react'
import Link from 'next/link'

interface ProviderCardProps {
  name: string
  title: string
  image?: string
  states: string[]
  specialties?: string[]
  featured?: boolean
}

export default function ProviderCard({ 
  name, 
  title, 
  image, 
  states, 
  specialties = [],
  featured = false 
}: ProviderCardProps) {
  const initials = name.split(' ').map(n => n[0]).join('')
  
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`group ${featured ? 'lg:scale-110' : ''}`}
    >
      <div className={`bg-white rounded-3xl shadow-lg border overflow-hidden transition-all duration-300 hover:shadow-2xl ${
        featured ? 'border-sage-200 shadow-xl' : 'border-sage-100'
      }`}>
        {/* Provider Photo/Avatar */}
        <div className={`relative ${featured ? 'aspect-[3/2]' : 'aspect-square'} bg-gradient-to-br from-sage-50 via-lavender-50 to-cream-100`}>
          {image ? (
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="h-full flex items-center justify-center">
              <div className={`${featured ? 'w-32 h-32' : 'w-24 h-24'} bg-gradient-to-br from-sage-400 to-sage-500 rounded-full flex items-center justify-center shadow-lg`}>
                <span className={`text-white font-bold ${featured ? 'text-2xl' : 'text-xl'} font-[family-name:var(--font-crimson)]`}>
                  {initials}
                </span>
              </div>
            </div>
          )}
          
          {featured && (
            <div className="absolute top-4 right-4">
              <span className="bg-sage-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Provider Info */}
        <div className={`p-6 ${featured ? 'pb-8' : ''}`}>
          <div className="text-center mb-4">
            <h3 className={`${featured ? 'text-2xl' : 'text-xl'} font-bold text-purple-900 mb-1 font-[family-name:var(--font-crimson)]`}>
              {name}
            </h3>
            <p className="text-sage-600 font-medium text-lg">
              {title}
            </p>
          </div>

          {/* States */}
          <div className="flex items-center justify-center text-sm text-warmgray-500 mb-4">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="capitalize">
              {states.length === 1 
                ? states[0].replace('-', ' ')
                : `${states.length} states`
              }
            </span>
          </div>

          {/* Specialties (if provided and featured) */}
          {featured && specialties.length > 0 && (
            <div className="mb-6">
              <div className="flex flex-wrap justify-center gap-2">
                {specialties.slice(0, 3).map((specialty, index) => (
                  <span 
                    key={index}
                    className="text-xs bg-sage-100 text-sage-700 px-3 py-1 rounded-full"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Book Button */}
          <Link
            href={`/book?provider=${name.toLowerCase().replace(' ', '-')}`}
            className={`block w-full text-center ${featured ? 'py-3' : 'py-2.5'} text-sm font-semibold text-white bg-gradient-to-r from-sage-400 to-sage-500 rounded-full hover:from-sage-500 hover:to-sage-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-[family-name:var(--font-nunito)]`}
          >
            <Calendar className="inline w-4 h-4 mr-2" />
            Book Appointment
          </Link>
        </div>
      </div>
    </motion.div>
  )
}