import { create } from 'zustand'

export interface Provider {
  id: string
  name: string
  title: string
  specialty: string
  states: string[]
  imageUrl: string
  calendarId: string
  available: boolean
}

export interface Insurance {
  id: string
  name: string
  logoUrl: string
  states: string[]
}

interface AppState {
  selectedState: string | null
  providers: Provider[]
  insurances: Insurance[]
  selectedProvider: Provider | null
  bookingStep: number
  setSelectedState: (state: string | null) => void
  setProviders: (providers: Provider[]) => void
  setInsurances: (insurances: Insurance[]) => void
  setSelectedProvider: (provider: Provider | null) => void
  setBookingStep: (step: number) => void
  resetBooking: () => void
}

export const useAppStore = create<AppState>((set) => ({
  selectedState: null,
  providers: [],
  insurances: [],
  selectedProvider: null,
  bookingStep: 0,
  setSelectedState: (state) => set({ selectedState: state }),
  setProviders: (providers) => set({ providers }),
  setInsurances: (insurances) => set({ insurances }),
  setSelectedProvider: (provider) => set({ selectedProvider: provider }),
  setBookingStep: (step) => set({ bookingStep: step }),
  resetBooking: () => set({ selectedProvider: null, bookingStep: 0 }),
}))