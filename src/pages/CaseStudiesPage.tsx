import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { caseStudies } from '../data/caseStudiesData'

const CaseStudiesPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="w-full py-16 px-6 lg:px-20" style={{ backgroundColor: '#454545' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1 text-white">
              <h1 className="text-4xl lg:text-5xl mb-8">
                Case Studies
              </h1>
              <div className="space-y-6 text-lg leading-relaxed opacity-90">
                <p>
                  See how Tosab Technologies is driving real-world impact through technology. 
                  Our case studies showcase how we've helped businesses across industries solve 
                  complex problems, optimize operations, and accelerate digital transformation 
                  using cloud, DevOps, and custom software solutions. Each story highlights our 
                  strategic approach, technical execution, and the measurable results we deliver.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <img
                  src="/case-study/hero.png"
                  alt="Professional developer working on laptop representing our case studies"
                  className="w-full max-w-md lg:max-w-lg h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Sections */}
      <div className="w-full">
        {caseStudies.map((caseStudy, index) => (
          <section 
            key={caseStudy.id}
            className="w-full py-16 px-6 lg:px-20" 
            style={{ backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#F8F9FA' }}
          >
            <div className="max-w-7xl mx-auto">
              {/* Category Header */}
              <div className="mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold mb-4" style={{ color: '#2E75B5' }}>
                  {caseStudy.category}
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Content */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl lg:text-2xl  mb-6" style={{ color: '#454545' }}>
                      {caseStudy.title}
                    </h3>
                  </div>

                  {/* Project Overview */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4" style={{ color: '#454545' }}>
                      Project Overview
                    </h4>
                    <div className="space-y-3 text-sm" style={{ color: '#6B7280' }}>
                      <div className="flex">
                        <span className="font-medium w-32">Timeline:</span>
                        <span>{caseStudy.overview.timeline}</span>
                      </div>
                      <div className="flex">
                        <span className="font-medium w-32">Team Size:</span>
                        <span>{caseStudy.overview.teamSize}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row">
                        <span className="font-medium w-32 mb-1 sm:mb-0">Project Management:</span>
                        <span className="sm:ml-0">{caseStudy.overview.projectManagement}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row">
                        <span className="font-medium w-32 mb-1 sm:mb-0">Development Methodology:</span>
                        <span className="sm:ml-0">{caseStudy.overview.developmentMethodology}</span>
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4" style={{ color: '#454545' }}>
                      Tech Stack
                    </h4>
                    <div className="space-y-2 text-sm" style={{ color: '#6B7280' }}>
                      {caseStudy.techStack.frontend && (
                        <div className="flex flex-col sm:flex-row">
                          <span className="font-medium w-24 mb-1 sm:mb-0">Frontend:</span>
                          <span className="sm:ml-4">{caseStudy.techStack.frontend}</span>
                        </div>
                      )}
                      {caseStudy.techStack.backend && (
                        <div className="flex flex-col sm:flex-row">
                          <span className="font-medium w-24 mb-1 sm:mb-0">Backend:</span>
                          <span className="sm:ml-4">{caseStudy.techStack.backend}</span>
                        </div>
                      )}
                      {caseStudy.techStack.database && (
                        <div className="flex flex-col sm:flex-row">
                          <span className="font-medium w-24 mb-1 sm:mb-0">Database:</span>
                          <span className="sm:ml-4">{caseStudy.techStack.database}</span>
                        </div>
                      )}
                      {caseStudy.techStack.cloud && (
                        <div className="flex flex-col sm:flex-row">
                          <span className="font-medium w-24 mb-1 sm:mb-0">Cloud:</span>
                          <span className="sm:ml-4">{caseStudy.techStack.cloud}</span>
                        </div>
                      )}
                      {caseStudy.techStack.devops && (
                        <div className="flex flex-col sm:flex-row">
                          <span className="font-medium w-24 mb-1 sm:mb-0">DevOps:</span>
                          <span className="sm:ml-4">{caseStudy.techStack.devops}</span>
                        </div>
                      )}
                      {caseStudy.techStack.monitoring && (
                        <div className="flex flex-col sm:flex-row">
                          <span className="font-medium w-24 mb-1 sm:mb-0">Monitoring:</span>
                          <span className="sm:ml-4">{caseStudy.techStack.monitoring}</span>
                        </div>
                      )}
                      {caseStudy.techStack.security && (
                        <div className="flex flex-col sm:flex-row">
                          <span className="font-medium w-24 mb-1 sm:mb-0">Security:</span>
                          <span className="sm:ml-4">{caseStudy.techStack.security}</span>
                        </div>
                      )}
                      {caseStudy.techStack.microservices && (
                        <div className="flex flex-col sm:flex-row">
                          <span className="font-medium w-24 mb-1 sm:mb-0">Microservices:</span>
                          <span className="sm:ml-4">{caseStudy.techStack.microservices}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Images */}
                <div className="flex flex-wrap gap-4 items-center justify-center max-h-[33rem]">
                  {caseStudy.images.map((image, imageIndex) => {
                    const imageCount = caseStudy.images.length
                    let imageClass = ""
                    
                    // Dynamic sizing based on number of images
                    if (imageCount === 1) {
                      imageClass = "w-full max-w-xl"
                    } else if (imageCount === 2) {
                      imageClass = "w-full sm:w-[calc(50%-0.5rem)] max-w-sm"
                    } else if (imageCount === 3) {
                      imageClass = "w-full sm:w-[calc(50.333% - 0.75rem)] lg:w-[calc(50.333%-0.75rem)] max-w-xs"
                    } else {
                      imageClass = "w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(50%-0.5rem)] max-w-xs"
                    }

                    return (
                      <div 
                        key={imageIndex}
                        className={`relative rounded-lg overflow-hidden transition-shadow duration-300 ${imageClass}`}
                      >
                        <img
                          src={image}
                          alt={`${caseStudy.title} - Screenshot ${imageIndex + 1}`}
                          className="w-full h-auto object-contain p-4"
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Call to Action Section */}
      {/* <section className="w-full py-16 px-6 lg:px-20" style={{ backgroundColor: '#2E75B5' }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Every great solution starts with understanding your unique challenges. 
            Let's discuss how we can help transform your business with the right technology strategy.
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
              Start Your Project
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
              View More Cases
            </button>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default CaseStudiesPage
