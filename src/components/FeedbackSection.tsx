import React, { useState, useEffect } from 'react'
import { testimonials } from '../data/testimonialsData'

const FeedbackSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 6000) // Change testimonial every 6 seconds

    return () => clearInterval(interval)
  }, [])

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
  }

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="w-full">
      {/* Blue Header */}
      <div className="w-full py-12 px-6 lg:px-20" style={{ backgroundColor: '#' }}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl  text-black">
            Don't Just Take Our Word For It
          </h2>
        </div>
      </div>

      {/* Testimonial Content */}
      <div className="w-full py-16 px-6 lg:px-20" >
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center group"
              style={{ color: '#2E75B5' }}
            >
              <svg 
                className="w-6 h-6 transform group-hover:scale-110 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center group"
              style={{ color: '#2E75B5' }}
            >
              <svg 
                className="w-6 h-6 transform group-hover:scale-110 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
           
            {/* Testimonial Card */}
            <div className="bg-[#F8F9FA] rounded-2xl p-8 lg:p-12 shadow-lg mx-4 lg:mx-12">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 lg:w-68 lg:h-80 rounded-2xl overflow-hidden ">
                    {currentTestimonial.avatar ? (
                      <img
                        src={currentTestimonial.avatar}
                        alt={`${currentTestimonial.author} avatar`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to initials if image fails to load
                          const target = e.target as HTMLImageElement
                          target.style.display = 'none'
                        }}
                      />
                    ) : null}
                    {/* Fallback initials */}
                    <div className="w-full h-full flex items-center justify-center text-2xl lg:text-3xl font-bold text-white bg-gradient-to-br from-blue-500 to-blue-600">
                      {currentTestimonial.author.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <svg 
                      className="w-12 h-12 mx-auto lg:mx-0" 
                      style={{ color: '#2E75B5' }}
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg lg:text-xl leading-relaxed mb-6" style={{ color: '#454545' }}>
                    "{currentTestimonial.quote}"
                  </blockquote>

                  {/* Author Info */}
                  <div>
                    <h4 className="text-xl font-bold mb-1" style={{ color: '#454545' }}>
                      {currentTestimonial.author}
                    </h4>
                    <p className="text-base" style={{ color: '#6B7280' }}>
                      {currentTestimonial.position}, {currentTestimonial.company}
                    </p>
                  </div>

                  {/* Quote Icon - Bottom Right */}
                  <div className="flex justify-end mt-6">
                    <svg 
                      className="w-12 h-12 transform rotate-180" 
                      style={{ color: '#2E75B5' }}
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'scale-125' 
                    : 'hover:scale-110'
                }`}
                style={{
                  backgroundColor: index === currentIndex ? '#E3AF59' : '#D1D5DB'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeedbackSection
