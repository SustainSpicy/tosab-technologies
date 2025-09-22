import React, { useState, useEffect } from 'react'
import HeroContent from './HeroContent'
import PuzzleGraphics from './PuzzleGraphics'
import { heroSections } from '../data/heroData'
import PartnersSection from './PartnersSection'

const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)

      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === heroSections.length - 1 ? 0 : prevIndex + 1
        )
        setIsVisible(true)
      }, 500) // Half of transition duration for smooth effect

    }, 5000) // Change content every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const currentHero = heroSections[currentIndex]

  return (
    <section className=" px-6 py-16 lg:px-20 lg:py-24 mt-[6rem]">
      <div className="relative flex items-center justify-between">
        <HeroContent
          topic={currentHero.topic}
          subTopic={currentHero.subTopic}
          body={currentHero.body}
          isVisible={isVisible}
        />
        <PuzzleGraphics
          image={currentHero.image}
          isVisible={isVisible}
        />
      </div>

    {/* Indicators */}
    <div className="absolute bottom-[80px] left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSections.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsVisible(false)
                setTimeout(() => {
                  setCurrentIndex(index)
                  setIsVisible(true)
                }, 500)
              }}
              className="w-3 h-3 rounded-full transition-all duration-300"
              style={{
                backgroundColor: index === currentIndex ? '#E3AF59' : 'rgba(255, 255, 255, 0.5)',
                transform: index === currentIndex ? 'scale(1.1)' : 'scale(1)'
              }}
              onMouseEnter={(e) => {
                if (index !== currentIndex) {
                  (e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.7)'
                }
              }}
              onMouseLeave={(e) => {
                if (index !== currentIndex) {
                  (e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.5)'
                }
              }}
            />
          ))}
    </div>
    </section>
  )
}

export default HeroSection
