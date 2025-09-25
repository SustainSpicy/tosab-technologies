import React, { useState, useEffect, useRef } from 'react'
import { statistics } from '../data/analyticsData'
import ShootingStar from './ShootingStar'

interface CounterProps {
  targetValue: number
  suffix?: string
  isVisible: boolean
}

const Counter: React.FC<CounterProps> = ({ targetValue, suffix = '', isVisible }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = targetValue / steps
    const stepTime = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      if (currentStep <= steps) {
        setCount(Math.floor(increment * currentStep))
      } else {
        setCount(targetValue)
        clearInterval(timer)
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [targetValue, isVisible])

  return (
    <span className="text-4xl lg:text-6xl font-bold text-white">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

const AnalyticsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 px-6 lg:px-20 overflow-hidden"
      style={{ backgroundColor: '#2E75B5' }}
    >
      {/* Floating Shooting Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Right Star */}
        <div className="absolute top-8 right-26 animate-pulse">
          <ShootingStar className="transform rotate-180 opacity-60" />
        </div>

        {/* Bottom Right Star */}
        <div className="absolute bottom-5 right-26 animate-pulse" style={{ animationDelay: '2s' }}>
          <ShootingStar className="transform rotate-270 opacity-40" />
        </div>

        {/* Top Left Star */}
        <div className="absolute top-2 left-26 animate-pulse" style={{ animationDelay: '1s' }}>
          <ShootingStar className="transform rotate-90 opacity-40" />
        </div>

        {/* Bottom Left Star */}
        <div className="absolute bottom-8 left-26 animate-pulse" style={{ animationDelay: '0.5s' }}>
          <ShootingStar className="transform rotate-360 opacity-40" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {statistics.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <Counter
                targetValue={parseInt(stat.value)}
                suffix={stat.suffix}
                isVisible={isVisible}
              />
              <p className="text-lg text-white mt-4 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AnalyticsSection
