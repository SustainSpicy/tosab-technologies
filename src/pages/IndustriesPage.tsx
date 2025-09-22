import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { industries } from '../data/industriesData'

const IndustriesPage: React.FC = () => {
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
                Industries
              </h1>
              <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#454545' }}>
                <p>
                  At Tosab Technologies, we deliver tailored IT and cloud solutions across key industries. 
                  From finance and logistics to education and retail, we help businesses in emerging 
                  markets leverage technology to solve real-world challenges and scale with confidence.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <img
                  src="/robot-arm.png"
                  alt="Industrial automation and robotics representing our technology solutions"
                  className="w-full max-w-md lg:max-w-lg h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Sections */}
      <div className="w-full">
        {industries.slice(1).map((industry, index) => (
          <section 
            key={industry.title}
            className="w-full py-16 px-6 lg:px-20" 
            style={{ 
              backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#F8F9FA' 
            }}
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className={`space-y-6 ${industry.position === 'right' ? 'order-1 lg:order-1' : 'order-2 lg:order-2'}`}>
                  <h2 className="text-3xl lg:text-4xl font-bold" style={{ color: '#454545' }}>
                    {industry.title}
                  </h2>
                  <p className="text-lg leading-relaxed" style={{ color: '#6B7280' }}>
                    {industry.description}
                  </p>
                  
                  {/* CTA Button */}
                  <div className="pt-4">
                    <button
                      className="px-8 py-3 rounded-lg font-semibold transition-colors"
                      style={{
                        backgroundColor: '#2E75B5',
                        color: '#FFFFFF'
                      }}
                      onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#1E5A8A'}
                      onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#2E75B5'}
                    >
                      Learn More
                    </button>
                  </div>
                </div>

                {/* Image */}
                <div className={`flex justify-center ${industry.position === 'right' ? 'order-2 lg:order-2' : 'order-1 lg:order-1'}`}>
                  <div className="relative">
                    <img
                      src={industry.image}
                      alt={`${industry.title} illustration`}
                      className="w-full max-w-sm lg:max-w-md h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Call to Action Section */}
      <section className="w-full py-16 px-6 lg:px-20" style={{ backgroundColor: '#2E75B5' }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Whatever your sector, we have the expertise and technology solutions to help you innovate, 
            scale, and succeed in today's digital landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-8 py-3 rounded-lg font-semibold transition-colors"
              style={{
                backgroundColor: '#E3AF59',
                color: '#FFFFFF'
              }}
              onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#D49A3E'}
              onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#E3AF59'}
            >
              Get Started Today
            </button>
            <button
              className="px-8 py-3 rounded-lg font-semibold transition-colors"
              style={{
                border: '2px solid #FFFFFF',
                backgroundColor: 'transparent',
                color: '#FFFFFF'
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLButtonElement
                target.style.backgroundColor = '#FFFFFF'
                target.style.color = '#2E75B5'
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLButtonElement
                target.style.backgroundColor = 'transparent'
                target.style.color = '#FFFFFF'
              }}
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default IndustriesPage
