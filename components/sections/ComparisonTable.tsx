'use client'

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

const comparisonData = [
  {
    feature: "Carefully vetted, top-tier providers only",
    privatepractice: true,
    corporate: false
  },
  {
    feature: "Same provider every visit — no rotating faces",
    privatepractice: true,
    corporate: false
  },
  {
    feature: "Quick access — appointments often within a week",
    privatepractice: true,
    corporate: false
  },
  {
    feature: "Personalized care tailored to you, not protocols",
    privatePractice: true,
    corporate: false
  },
  {
    feature: "Accepts most major insurance plans",
    privateSuccess: true,
    corporate: false
  },
  {
    feature: "Longer sessions, with space to be heard and understood",
    privateUsage: true,
    corporate: false
  }
]

export default function ComparisonTable() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-sage-25">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-900 mb-6 font-[family-name:var(--font-crimson)]">
            Private Practice vs.{' '}
            <span className="text-sage-500 italic">Corporate</span> Psychiatry
          </h2>
          <p className="text-lg text-warmgray-600 max-w-2xl mx-auto">
            Experience the difference of personalized, private practice mental health care
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden border border-sage-100"
        >
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-r from-sage-50 to-lavender-50 border-b border-sage-100">
            <div></div>
            <div className="text-center">
              <div className="bg-sage-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <Check className="w-4 h-4" />
                  <span>PRIVATE PRACTICE</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <X className="w-4 h-4" />
                  <span>CORPORATE PROVIDERS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-sage-50">
            {comparisonData.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="grid grid-cols-3 gap-4 p-6 items-center hover:bg-sage-25/50 transition-colors duration-200"
              >
                <div className="font-medium text-warmgray-800 text-sm sm:text-base">
                  {row.feature}
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-sage-100 rounded-full">
                    <Check className="w-5 h-5 text-sage-600" />
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-red-100 rounded-full">
                    <X className="w-5 h-5 text-red-600" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center mt-8"
        >
          <p className="text-sm text-warmgray-500">
            * Based on industry standards and patient feedback across various mental health platforms
          </p>
        </motion.div>
      </div>
    </section>
  )
}