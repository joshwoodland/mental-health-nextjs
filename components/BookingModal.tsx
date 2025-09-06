'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Calendar, Clock, User } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { format, addDays, startOfWeek, isWeekend } from 'date-fns'
import { useAppStore } from '@/lib/store'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  providerId?: string
}

export default function BookingModal({ isOpen, onClose, providerId }: BookingModalProps) {
  const [step, setStep] = useState(0)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const { providers, selectedProvider, setSelectedProvider } = useAppStore()
  const { register, handleSubmit, formState: { errors } } = useForm()

  const timeSlots = {
    morning: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'],
    afternoon: ['14:00', '14:30', '15:00', '15:30', '16:00', '16:30'],
    evening: ['18:00', '18:30', '19:00', '19:30', '20:00', '20:30'],
  }

  const steps = [
    { title: 'Select Provider', icon: User },
    { title: 'Personal Information', icon: User },
    { title: 'Date & Time', icon: Calendar },
    { title: 'Confirmation', icon: Clock },
  ]

  const onSubmit = (data: any) => {
    console.log('Booking data:', { ...data, selectedDate, selectedTime, provider: selectedProvider })
    // Handle booking submission
    onClose()
  }

  const nextStep = () => {
    if (step === 0 && !selectedProvider) {
      alert('Please select a provider')
      return
    }
    if (step < steps.length - 1) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 0) setStep(step - 1)
  }

  const generateWeekDays = () => {
    const days = []
    const today = new Date()
    for (let i = 0; i < 14; i++) {
      const date = addDays(today, i)
      if (!isWeekend(date)) {
        days.push(date)
      }
    }
    return days
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
          >
            <div className="relative p-6 border-b border-gray-200">
              <button
                onClick={onClose}
                className="absolute right-6 top-6 text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
              
              <h2 className="text-2xl font-bold text-gray-900">Book Appointment</h2>
              
              <div className="flex items-center mt-4 space-x-2">
                {steps.map((s, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      index <= step ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-500'
                    }`}>
                      {index + 1}
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`w-12 h-1 mx-2 ${
                        index < step ? 'bg-primary-600' : 'bg-gray-200'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="p-6">
              <AnimatePresence mode="wait">
                {step === 0 && (
                  <motion.div
                    key="step0"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-semibold mb-4">Choose Your Provider</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {providers.slice(0, 4).map((provider) => (
                        <button
                          key={provider.id}
                          type="button"
                          onClick={() => setSelectedProvider(provider)}
                          className={`p-4 rounded-lg border-2 transition-all ${
                            selectedProvider?.id === provider.id
                              ? 'border-primary-600 bg-primary-50'
                              : 'border-gray-200 hover:border-primary-300'
                          }`}
                        >
                          <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-primary-100 flex items-center justify-center">
                            <span className="text-xl font-bold text-primary-600">
                              {provider.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <p className="font-medium text-gray-900">{provider.name}</p>
                          <p className="text-sm text-gray-600">{provider.specialty}</p>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-semibold mb-4">Your Information</h3>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          First Name
                        </label>
                        <input
                          {...register('firstName', { required: 'First name is required' })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                        {errors.firstName && (
                          <p className="mt-1 text-sm text-red-600">{errors.firstName.message as string}</p>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name
                        </label>
                        <input
                          {...register('lastName', { required: 'Last name is required' })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                        {errors.lastName && (
                          <p className="mt-1 text-sm text-red-600">{errors.lastName.message as string}</p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: 'Invalid email address'
                          }
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message as string}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        {...register('phone', { required: 'Phone number is required' })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{errors.phone.message as string}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Reason for Visit
                      </label>
                      <textarea
                        {...register('reason', { required: 'Please provide a reason for your visit' })}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                      {errors.reason && (
                        <p className="mt-1 text-sm text-red-600">{errors.reason.message as string}</p>
                      )}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-semibold mb-4">Select Date & Time</h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Available Dates
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {generateWeekDays().slice(0, 9).map((date) => (
                          <button
                            key={date.toISOString()}
                            type="button"
                            onClick={() => setSelectedDate(date)}
                            className={`p-3 rounded-lg border-2 text-center transition-all ${
                              selectedDate?.toDateString() === date.toDateString()
                                ? 'border-primary-600 bg-primary-50'
                                : 'border-gray-200 hover:border-primary-300'
                            }`}
                          >
                            <div className="text-xs text-gray-500">
                              {format(date, 'EEE')}
                            </div>
                            <div className="text-lg font-semibold">
                              {format(date, 'd')}
                            </div>
                            <div className="text-xs text-gray-500">
                              {format(date, 'MMM')}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    {selectedDate && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Available Times
                        </label>
                        
                        <div className="space-y-3">
                          {Object.entries(timeSlots).map(([period, slots]) => (
                            <div key={period}>
                              <h4 className="text-sm font-medium text-gray-600 capitalize mb-2">
                                {period}
                              </h4>
                              <div className="grid grid-cols-3 gap-2">
                                {slots.map((time) => (
                                  <button
                                    key={time}
                                    type="button"
                                    onClick={() => setSelectedTime(time)}
                                    className={`px-3 py-2 rounded-lg border-2 text-sm transition-all ${
                                      selectedTime === time
                                        ? 'border-primary-600 bg-primary-50 text-primary-700'
                                        : 'border-gray-200 hover:border-primary-300'
                                    }`}
                                  >
                                    {time}
                                  </button>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <h3 className="text-lg font-semibold mb-4">Confirm Your Appointment</h3>
                    
                    <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Provider:</span>
                        <span className="font-medium">{selectedProvider?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Date:</span>
                        <span className="font-medium">
                          {selectedDate && format(selectedDate, 'EEEE, MMMM d, yyyy')}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Time:</span>
                        <span className="font-medium">{selectedTime}</span>
                      </div>
                    </div>
                    
                    <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                      <p className="text-sm text-primary-700">
                        You will receive a confirmation email with your appointment details and a link to join the video session.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={step === 0}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-5 h-5 mr-1" />
                  Back
                </button>
                
                {step < steps.length - 1 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
                  >
                    Next
                    <ChevronRight className="w-5 h-5 ml-1" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="inline-flex items-center px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
                  >
                    Confirm Booking
                  </button>
                )}
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}