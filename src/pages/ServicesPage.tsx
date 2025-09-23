import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { detailedServices } from '../data/servicesPageData'

const ServicesPage: React.FC = () => {
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
              <h1 className="text-4xl lg:text-5xl  mb-8" style={{ color: '#454545' }}>
                Our Services
              </h1>
              <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#454545' }}>
                <p>
                  At Tosab Technologies, we deliver future-ready IT solutions that help businesses scale, 
                  innovate, and thrive in a digital-first world. Our services are built to solve real challenges, 
                  streamline operations, and unlock new growth opportunities.
                </p>
              </div>
            </div>

            {/* Right Image - Gears */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <img
                  src="/gear.png"
                  alt="Mechanical gears representing our integrated technology services"
                  className="w-full max-w-md lg:max-w-lg h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Solve It Together Section */}
      <section className="w-full py-16 px-6 lg:px-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl " style={{ color: '#454545' }}>
              Let's Solve It Together
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {detailedServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border"
                style={{ borderColor: '#E5E7EB' }}
              >
                {/* Service Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0">
                    <img
                      src={service.icon}
                      alt={`${service.title} icon`}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl mb-2" style={{ color: '#454545' }}>
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features List */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3" style={{ color: '#454545' }}>
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start text-sm"
                        style={{ color: '#6B7280' }}
                      >
                        <svg 
                          className="w-4 h-4 mt-0.5 mr-3 flex-shrink-0" 
                          style={{ color: '#2E75B5' }}
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                            clipRule="evenodd" 
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                {service.technologies && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-2" style={{ color: '#454545' }}>
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium rounded-full"
                          style={{
                            backgroundColor: '#E3F2FD',
                            color: '#2E75B5'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Button */}
                {/* <div className="pt-4">
                  <button
                    className="px-6 py-2 rounded-lg font-semibold text-sm transition-colors"
                    style={{
                      backgroundColor: '#E3AF59',
                      color: '#FFFFFF'
                    }}
                    onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#D49A3E'}
                    onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#E3AF59'}
                  >
                    Learn More
                  </button>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      {/* <section className="w-full py-16 px-6 lg:px-20" style={{ backgroundColor: '#2E75B5' }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Let's discuss how our comprehensive IT solutions can help your business achieve 
            its digital transformation goals and drive sustainable growth.
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
              Get Free Consultation
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
              View Case Studies
            </button>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default ServicesPage
