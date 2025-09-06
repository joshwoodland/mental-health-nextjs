import Hero from '@/components/Hero'
import InsuranceLogos from '@/components/InsuranceLogos'
import HowItWorks from '@/components/HowItWorks'
import CareFromAnywhere from '@/components/sections/CareFromAnywhere'
import CuratedTeam from '@/components/sections/CuratedTeam'
import SpecialtiesGrid from '@/components/sections/SpecialtiesGrid'
import Testimonials from '@/components/Testimonials'
import RequestCallCTA from '@/components/sections/RequestCallCTA'
import StatisticsBar from '@/components/sections/StatisticsBar'
import FAQ from '@/components/sections/FAQ'
import ComparisonTable from '@/components/sections/ComparisonTable'
import FinalProviders from '@/components/sections/FinalProviders'
import CallToAction from '@/components/CallToAction'

export default function Home() {
  return (
    <>
      <Hero />
      <InsuranceLogos />
      <HowItWorks />
      <CareFromAnywhere />
      <CuratedTeam />
      <SpecialtiesGrid />
      <Testimonials />
      <RequestCallCTA />
      <StatisticsBar />
      <FAQ />
      <ComparisonTable />
      <FinalProviders />
      <CallToAction />
    </>
  )
}