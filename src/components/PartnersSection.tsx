import React from 'react'
import { partners } from '../data/partnersData'

const PartnersSection: React.FC = () => {
  return (
    <div className="w-full" style={{ backgroundColor: '#646b70' }}>
      {/* Blue bar background matching the image */}
      <div 
        className="w-full py-6"
      >
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center justify-center transition-all duration-300 hover:scale-110 opacity-80 hover:opacity-100"
              >
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  className="h-8 md:h-10 lg:h-12 w-auto object-contain filter brightness-0 invert"
                  style={{
                    maxWidth: '120px'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PartnersSection
