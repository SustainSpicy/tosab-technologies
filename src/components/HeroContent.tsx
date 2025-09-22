import React from 'react'

interface HeroContentProps {
  topic: string
  subTopic: string
  body: string
  isVisible: boolean
}

const HeroContent: React.FC<HeroContentProps> = ({ topic, subTopic, body, isVisible }) => {
  return (
    <div className="flex-1 max-w-2xl">
      <div className={`transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: '#FFFFFF' }}>
          {topic}
        </h1>
        <h2 className="text-3xl lg:text-5xl font-bold leading-tight mb-8" style={{ color: '#E3AF59' }}>
          {subTopic}
        </h2>
        <p className="text-lg leading-relaxed mb-8 max-w-xl" style={{ color: '#F8FAFC' }}>
          {body}
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            className="px-8 py-3 rounded-lg font-semibold transition-colors"
            style={{ 
              backgroundColor: '#E3AF59',
              color: '#FFFFFF'
            }}
            onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#D49A3E'}
            onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#E3AF59'}
          >
            Explore
          </button>
          <button 
            className="px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
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
            Consult Us
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroContent
