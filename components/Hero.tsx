'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Leaf, Heart, Sun, Cloud } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  const features = [
    { icon: Heart, text: 'Virtual visits' },
    { icon: Leaf, text: 'Insurance accepted' },
    { icon: Sun, text: 'Seen within 48 hours' },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cream-50 via-sage-50 to-lavender-50">
      {/* Organic shape background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-lavender-200/20 rounded-full blur-3xl"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-purple-900 leading-tight font-[family-name:var(--font-crimson)]">
              Psychiatry, on{' '}
              <span className="text-sage-500 italic">your</span>
              <br />
              terms
            </h1>
            
            <p className="mt-6 text-lg text-warmgray-600 leading-relaxed">
              From evaluation to prescription to ongoing care — choose from a carefully 
              selected team, all online. Insurance accepted.
            </p>

            <div className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-8 h-8 bg-sage-100 rounded-full flex items-center justify-center">
                    <feature.icon className="h-4 w-4 text-sage-600" />
                  </div>
                  <span className="text-warmgray-700 font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-sage-400 to-sage-500 rounded-full hover:from-sage-500 hover:to-sage-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-[family-name:var(--font-nunito)]"
              >
                Book Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/5] bg-gradient-to-br from-sage-100 to-lavender-100">
                {/* Placeholder for real image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="relative">
                      {/* Organic blob shape */}
                      <svg viewBox="0 0 200 200" className="w-full h-full max-w-md mx-auto">
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{stopColor:'#8FA68E', stopOpacity:0.8}} />
                            <stop offset="100%" style={{stopColor:'#D8DCFE', stopOpacity:0.8}} />
                          </linearGradient>
                        </defs>
                        <path fill="url(#gradient)" d="M40,-62.6C52.2,-56.2,62.4,-45.4,69.8,-32.2C77.2,-19,81.8,-3.5,79.7,11.1C77.6,25.7,68.8,39.3,57,50.3C45.2,61.3,30.4,69.7,14.3,73.3C-1.8,76.9,-19.2,75.7,-34.6,69.4C-50,63.1,-63.4,51.7,-71.7,37.2C-80,22.7,-83.2,5.2,-79.8,-10.9C-76.4,-27,-66.4,-41.7,-53.3,-47.8C-40.2,-53.9,-24.1,-51.5,-9.7,-46.8C4.8,-42.1,27.8,-69,40,-62.6Z" transform="translate(100 100)" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <h3 className="text-2xl font-bold text-purple-900 mb-2 font-[family-name:var(--font-crimson)]">
                            Compassionate Care
                          </h3>
                          <p className="text-warmgray-600">
                            Professional support when you need it most
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-sage-200/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-lavender-200/30 rounded-full blur-2xl"></div>
          </motion.div>
        </div>

        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 text-cream-100" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}