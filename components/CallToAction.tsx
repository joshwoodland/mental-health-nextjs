'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Phone, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Take the First Step Towards Better Mental Health
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-10">
            You don't have to face your challenges alone. Our licensed professionals are here to support you every step of the way.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/book"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-primary-600 bg-white rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Book Your First Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <a
              href="tel:1-800-MENTAL"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-white border-2 border-white rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call 1-800-MENTAL
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white"
            >
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="text-primary-100">Support Available</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white"
            >
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-primary-100">Licensed Providers</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-white"
            >
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="text-primary-100">Confidential</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}