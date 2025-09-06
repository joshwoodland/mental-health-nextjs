'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const faqData = [
  {
    question: "Does insurance cover online therapy?",
    answer: "Yes, most major insurance plans cover telehealth services including online therapy and psychiatry visits. We accept Aetna, Blue Cross Blue Shield, Cigna, Regence, and many other major insurers. Our team will help verify your coverage and handle insurance billing for you."
  },
  {
    question: "Who is the right therapist for me?",
    answer: "Finding the right therapist depends on your specific needs, personality, and treatment goals. Our matching process considers your preferences, concerns, and therapeutic approach preferences. We'll help connect you with a provider who specializes in your areas of concern and whose style aligns with your needs."
  },
  {
    question: "What is the difference between therapy and psychiatry?",
    answer: "Therapy focuses on talk-based treatment and coping strategies, while psychiatry includes medication management along with therapeutic support. Our psychiatric nurse practitioners can provide both therapy and prescribe medications when needed. Many clients benefit from a combination of both approaches."
  },
  {
    question: "How do you vet your therapists?",
    answer: "All our providers are licensed mental health professionals with extensive experience. We carefully screen each provider for their credentials, specialties, approach, and commitment to quality care. Our team includes licensed therapists, psychiatric nurse practitioners, and other mental health specialists who meet our high standards for clinical excellence."
  },
  {
    question: "How do I get matched with a therapist?",
    answer: "Our matching process starts with a brief questionnaire about your concerns, preferences, and goals. Based on your responses, we'll recommend providers who specialize in your areas of need and whose approach aligns with your preferences. You can review their profiles and choose the best fit for you."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-cream-50 to-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-100 rounded-2xl mb-6">
            <HelpCircle className="w-8 h-8 text-sage-600" />
          </div>
          
          <span className="inline-block text-sm font-medium text-sage-700 bg-sage-100 px-4 py-2 rounded-full mb-4">
            GOT A QUESTION?
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-900 mb-6 font-[family-name:var(--font-crimson)]">
            Frequently Asked
            <br />
            <span className="text-sage-500 italic">Questions</span>
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-2xl border border-sage-100 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-sage-25 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-purple-900 pr-4 font-[family-name:var(--font-crimson)]">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 bg-sage-100 rounded-full flex items-center justify-center"
                  >
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 text-sage-600" />
                    ) : (
                      <Plus className="w-4 h-4 text-sage-600" />
                    )}
                  </motion.div>
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 border-t border-sage-50">
                      <p className="text-warmgray-600 leading-relaxed pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-lavender-200/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-sage-200/10 rounded-full blur-3xl -z-10"></div>
      </div>
    </section>
  )
}