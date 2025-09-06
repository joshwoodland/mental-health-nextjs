'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Award, Heart, Users } from 'lucide-react'

export default function CuratedTeam() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-sage-25 to-lavender-25 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-lavender-200/15 rounded-full blur-3xl"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* Meeting scene mockup */}
              <div className="aspect-[4/3] bg-gradient-to-br from-sage-100 to-lavender-100 p-8">
                <div className="h-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 flex flex-col justify-center">
                  {/* Provider consultation scene */}
                  <div className="space-y-4">
                    {/* Three people in consultation */}
                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-sage-400 to-sage-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">Dr. A</span>
                      </div>
                      <div className="w-16 h-16 bg-gradient-to-br from-lavender-400 to-lavender-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">Dr. B</span>
                      </div>
                    </div>
                    
                    {/* Central figure representing curation */}
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Award className="w-10 h-10 text-white" />
                      </div>
                      <p className="text-warmgray-600 text-sm font-medium">Quality Review Process</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating quality badges */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-sage-200/30 rounded-full blur-2xl animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-lavender-200/30 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-sage-700 bg-sage-100 border border-sage-200">
                <Award className="w-4 h-4 mr-2" />
                ONLY THE BEST MAKE THE CUT
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-900 mb-6 font-[family-name:var(--font-crimson)]">
              A carefully{' '}
              <span className="text-sage-500 italic">curated</span>
              <br />
              team
            </h2>
            
            <p className="text-lg text-warmgray-600 mb-8 leading-relaxed">
              Forget sifting through lists and reading reviews. We've already done 
              the hard part — choosing providers who are not just brilliant, 
              but genuinely easy to talk to.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-sage-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Users className="h-5 w-5 text-sage-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-purple-900 mb-1">Rigorous Screening Process</h3>
                  <p className="text-warmgray-600 text-sm">Every provider undergoes thorough credential verification and quality assessments</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-sage-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Heart className="h-5 w-5 text-sage-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-purple-900 mb-1">Compassion & Expertise</h3>
                  <p className="text-warmgray-600 text-sm">Selected for both clinical excellence and genuine empathy for their patients</p>
                </div>
              </div>
            </div>

            <Link
              href="/providers"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-sage-700 bg-white border-2 border-sage-300 rounded-full hover:bg-sage-50 hover:border-sage-400 transition-all duration-300 shadow-md hover:shadow-lg font-[family-name:var(--font-nunito)]"
            >
              Find a Provider
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}