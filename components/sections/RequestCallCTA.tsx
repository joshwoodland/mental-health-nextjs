'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'

export default function RequestCallCTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-sage-900/80 via-purple-900/70 to-sage-800/80"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-sage-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-lavender-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cream-300 rounded-full blur-2xl"></div>
      </div>

      {/* Placeholder for background image - in real implementation, this would be a proper image */}
      <div className="absolute inset-0 bg-gradient-to-r from-sage-600/20 to-purple-600/20"></div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-[family-name:var(--font-crimson)]">
              Need assistance?
              <br />
              <span className="text-sage-200 italic">Request a call now</span>
            </h2>
            
            <p className="text-lg text-sage-100 mb-8 leading-relaxed max-w-md">
              Get matched with a therapist who specializes in your exact concerns 
              and fits your style, schedule, & budget.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-sage-900 bg-sage-200 rounded-full hover:bg-sage-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-[family-name:var(--font-nunito)]"
            >
              <Phone className="mr-3 h-5 w-5" />
              Request a Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>

          {/* Visual Element - Person in comfortable setting */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              {/* Placeholder for person image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-sage-100/20 to-lavender-100/20 backdrop-blur-sm rounded-3xl border border-white/20">
                <div className="h-full flex items-center justify-center p-8">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm">
                      <Phone className="w-12 h-12 text-sage-200" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 font-[family-name:var(--font-crimson)]">
                      Personal Support
                    </h3>
                    <p className="text-sage-200 text-sm">
                      Speak with our care coordinators who will help you find the perfect match
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-sage-300/30 rounded-full blur-2xl animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-lavender-300/30 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}