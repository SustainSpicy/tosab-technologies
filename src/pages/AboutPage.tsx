import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import TeamSection from '../components/TeamSection'

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div style={{ background: `linear-gradient(to bottom right, #2E75B5, #1E5A8A, #454545)` }}>
        <Navigation />
      </div>

      {/* Hero Section */}
      <section className="w-full py-16 px-6 lg:px-20" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl lg:text-5xl font-bold mb-8" style={{ color: '#454545' }}>
                About US
              </h1>
              <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#454545' }}>
                <p>
                  Tosab Technologies is a forward-thinking technology company committed to 
                  empowering businesses through innovative digital solutions. We specialize in cloud 
                  services, software development, DevOps, and IT consulting, helping organizations 
                  modernize their infrastructure, streamline operations, and drive sustainable growth.
                </p>
                <p>
                  Our mission is to make advanced technology accessible and effective for African 
                  businesses and beyond. Whether we're deploying secure cloud environments, building 
                  scalable applications, or integrating complex systems, we focus on delivering solutions 
                  that are reliable, cost-efficient, and tailored to our clients' unique challenges.
                </p>
                <p>
                  With a growing team of engineers, architects, and digital strategists, Tosab Technologies is on 
                  a mission to become one of Africa's leading tech enablers. We're currently building 
                  strong partnerships with global cloud providers and investing in top talent to ensure we 
                  meet the evolving needs of modern enterprises.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <img
                  src="/sci-fi.png"
                  alt="Futuristic technology visualization representing innovation and digital transformation"
                  className="w-full max-w-md lg:max-w-lg h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="w-full py-16 px-6 lg:px-20" style={{ backgroundColor: '#2E75B5' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Our Mission */}
            <div className="text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-lg leading-relaxed opacity-90">
                To empower businesses across Africa with scalable cloud infrastructure, 
                cutting-edge software solutions, and end-to-end digital transformation 
                services that drive growth, efficiency, and innovation.
              </p>
            </div>

            {/* Our Vision */}
            <div className="text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Our Vision
              </h2>
              <p className="text-lg leading-relaxed opacity-90">
                To become a leading provider of cloud and IT solutions in emerging 
                markets, starting from Africa, by delivering world-class technology 
                services, fostering sustainable digital ecosystems, and building strategic 
                partnerships that shape the future of business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default AboutPage
