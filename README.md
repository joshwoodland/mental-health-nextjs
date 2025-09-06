# MentalCare - Next.js Mental Health Platform

A modern, enhanced React + Next.js version of a mental health services website, rebuilt from a WordPress site with improved features and performance.

## 🚀 Quick Start

```bash
# Navigate to project directory
cd "/Users/owner/LOCAL WP WEBSITE AUG '25/mental-health-nextjs"

# Run the development server
npm run dev
```

Open [http://localhost:4001](http://localhost:4001) in your browser.

## ✨ Features

### Enhanced User Experience
- **Modern React + Next.js Architecture**: Fast, responsive, and SEO-optimized
- **Beautiful Animations**: Smooth Framer Motion animations throughout
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **State Management**: Zustand for efficient state management
- **Type Safety**: Full TypeScript implementation

### Key Improvements Over WordPress Version
- **Faster Performance**: No jQuery, no WordPress overhead
- **Better UX**: Smooth transitions, modern UI components
- **Enhanced Booking Flow**: Multi-step wizard with real-time validation
- **State-Based Filtering**: Smart provider and insurance filtering
- **Improved Accessibility**: WCAG compliant components
- **Modern Stack**: Latest web technologies and best practices

### Core Features
- **Provider Selection**: Browse and filter mental health professionals by state
- **Online Booking System**: Multi-step appointment booking with calendar integration
- **Insurance Verification**: Dynamic insurance provider display based on location
- **State Selector**: Personalized content based on user's state
- **Testimonials**: Social proof section
- **Responsive Navigation**: Mobile-friendly menu system

## 📁 Project Structure

```
mental-health-nextjs/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with header/footer
│   ├── page.tsx           # Homepage
│   ├── book/              # Booking page
│   └── providers/         # Providers listing page
├── components/            # React components
│   ├── Hero.tsx          # Hero section
│   ├── Header.tsx        # Navigation header
│   ├── StateSelector.tsx # State selection modal
│   ├── ProviderList.tsx  # Provider cards grid
│   ├── BookingModal.tsx  # Multi-step booking wizard
│   └── ...               # Other components
├── lib/                   # Utilities and stores
│   ├── store.ts          # Zustand state management
│   └── utils.ts          # Helper functions
└── public/               # Static assets
```

## 🛠 Technologies Used

- **Next.js 15.5** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animations
- **Zustand** - State management
- **React Hook Form** - Form handling
- **Lucide React** - Icons
- **date-fns** - Date utilities

## 🚀 Deployment

Ready to deploy on Vercel, Netlify, or any Node.js hosting:

```bash
npm run build
npm start
```