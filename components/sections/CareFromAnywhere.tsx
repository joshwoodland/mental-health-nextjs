'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Heart, Shield, Clock } from 'lucide-react'

export default function CareFromAnywhere() {
  return (
    <section className="py-20 bg-gradient-to-br from-sage-50 via-cream-50 to-lavender-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-sage-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-lavender-200/15 rounded-full blur-3xl"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-sage-700 bg-sage-100 border border-sage-200">
                <Heart className="w-4 h-4 mr-2" />
                TELEHEALTH, TAILORED TO YOU
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-900 mb-6 font-[family-name:var(--font-crimson)]">
              Care from anywhere
              <br />
              <span className="text-sage-500 italic">— always online</span>
            </h2>
            
            <p className="text-lg text-warmgray-600 mb-8 leading-relaxed">
              Connect with your provider from the comfort of your home — all visits are 100% virtual.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-sage-100 rounded-full flex items-center justify-center">
                  <Shield className="h-4 w-4 text-sage-600" />
                </div>
                <span className="text-warmgray-700 font-medium">HIPAA-compliant secure video platform</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-sage-100 rounded-full flex items-center justify-center">
                  <Clock className="h-4 w-4 text-sage-600" />
                </div>
                <span className="text-warmgray-700 font-medium">Flexible scheduling that works with your life</span>
              </div>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-sage-400 to-sage-500 rounded-full hover:from-sage-500 hover:to-sage-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-[family-name:var(--font-nunito)]"
            >
              Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* Tablet mockup */}
              <div className="aspect-[4/3] bg-gradient-to-br from-sage-100 to-lavender-100 p-8">
                <div className="h-full bg-white rounded-2xl shadow-lg p-6 flex flex-col">
                  {/* Video call interface mockup */}
                  <div className="flex-1 bg-gradient-to-br from-warmgray-100 to-sage-50 rounded-xl p-4 relative overflow-hidden">
                    {/* Provider avatar */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-sage-200 to-sage-300 rounded-full flex items-center justify-center">
                      <span className="text-sage-700 font-semibold text-sm">Dr. S</span>
                    </div>
                    
                    {/* Main video area */}
                    <div className="h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-sage-400 to-sage-500 rounded-full flex items-center justify-center mb-3 mx-auto">
                          <Heart className="w-12 h-12 text-white" />
                        </div>
                        <p className="text-warmgray-600 text-sm">Secure Video Session</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Controls */}
                  <div className="mt-4 flex justify-center space-x-4">
                    <div className="w-8 h-8 bg-sage-100 rounded-full"></div>
                    <div className="w-8 h-8 bg-sage-500 rounded-full"></div>
                    <div className="w-8 h-8 bg-red-100 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-sage-200/30 rounded-full blur-2xl animate-float"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-lavender-200/30 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}