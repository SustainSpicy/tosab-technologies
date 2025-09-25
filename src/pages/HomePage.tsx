import React from 'react'
import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'
import PartnersSection from '../components/PartnersSection'
import ServicesSection from '../components/ServicesSection'
import ProjectsSection from '../components/ProjectsSection'
import AnalyticsSection from '../components/AnalyticsSection'
import FeedbackSection from '../components/FeedbackSection'
import Footer from '../components/Footer'

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="relative min-h-screen" style={{
        background: `linear-gradient(to bottom right, #2E75B5, #1E5A8A, #454545)`
      }}>
        <HeroSection />
      </div>
      <PartnersSection />
      <ServicesSection />
      <ProjectsSection />
      <AnalyticsSection />
      <FeedbackSection />
      <Footer />
    </div>
  )
}

export default HomePage
