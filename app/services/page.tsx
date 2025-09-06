import { Heart, Brain, Users, MessageCircle, Calendar, Shield } from 'lucide-react'

const services = [
  {
    icon: Brain,
    title: 'Individual Therapy',
    description: 'One-on-one sessions with licensed therapists to address your personal mental health needs.',
    features: ['Depression', 'Anxiety', 'PTSD', 'Stress Management']
  },
  {
    icon: Users,
    title: 'Couples Therapy',
    description: 'Strengthen your relationship with professional guidance for couples facing challenges.',
    features: ['Communication', 'Conflict Resolution', 'Intimacy', 'Trust Building']
  },
  {
    icon: Heart,
    title: 'Psychiatric Services',
    description: 'Medication management and psychiatric evaluation with board-certified psychiatrists.',
    features: ['Medication Management', 'Diagnosis', 'Treatment Planning', 'Follow-up Care']
  },
  {
    icon: MessageCircle,
    title: 'Group Therapy',
    description: 'Connect with others facing similar challenges in a supportive group environment.',
    features: ['Support Groups', 'Skills Training', 'Peer Support', 'Shared Experiences']
  },
  {
    icon: Calendar,
    title: 'Crisis Support',
    description: '24/7 crisis intervention and immediate support when you need it most.',
    features: ['Emergency Support', 'Crisis Intervention', 'Safety Planning', 'Immediate Care']
  },
  {
    icon: Shield,
    title: 'Specialized Programs',
    description: 'Targeted treatment programs for specific mental health conditions and populations.',
    features: ['ADHD', 'Autism Spectrum', 'Eating Disorders', 'Substance Abuse']
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive mental health services tailored to meet your unique needs. 
            Our evidence-based treatments are delivered by licensed professionals who care about your wellbeing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-primary-600" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-500">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-primary-50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-6">
              Take the first step towards better mental health. Our team is here to support you.
            </p>
            <a 
              href="/book"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors font-medium"
            >
              Book Your First Session
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}