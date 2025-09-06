import ProviderList from '@/components/ProviderList'

export default function ProvidersPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Mental Health Providers</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet our team of licensed professionals who are dedicated to providing compassionate, 
            evidence-based mental health care tailored to your unique needs.
          </p>
        </div>
        
        <ProviderList showAll={true} />
      </div>
    </div>
  )
}