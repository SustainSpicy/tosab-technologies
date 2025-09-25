import React from 'react'
import { Link } from 'react-router-dom'
import { services } from '../data/servicesData'

const ServicesSection: React.FC = () => {
  return (
    <section className="w-full py-16 px-6 lg:px-20" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl mb-4" style={{ color: '#454545' }}>
            Let's Solve It Together
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 text-center"
              style={{ border: '1px solid #E5E7EB' }}
            >
              {/* Service Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 flex items-center justify-center">
                  <img
                    src={service.icon}
                    alt={`${service.title} icon`}
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>

              {/* Service Title */}
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#454545' }}>
                {service.title}
              </h3>
              
              {/* Service Subtitle */}
              {service.subtitle && (
                <p className="text-sm font-medium mb-3" style={{ color: '#6B7280' }}>
                  {service.subtitle}
                </p>
              )}

              {/* Service Description */}
              {service.description && (
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                  {service.description}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Learn More Button */}
        <div className="text-center">
          <Link
            to="/services"
            className="inline-block px-8 py-3 rounded-lg font-semibold text-white transition-colors hover:opacity-90"
            style={{ backgroundColor: '#E3AF59' }}
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
