import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { coreSolutions, industries, expectations } from '../data/solutionsData'

const SolutionsPage: React.FC = () => {
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
              <h1 className="text-4xl lg:text-5xl mb-8" style={{ color: '#454545' }}>
                Our Solutions
              </h1>
              <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#454545' }}>
                <p>
                  At Tosab Technologies, we build smart, scalable, and secure technology solutions that solve real 
                  business challenges. Whether you're migrating to the cloud, automating operations, launching 
                  digital products, or modernizing legacy systems — our end-to-end solutions are designed to help 
                  you move faster, work smarter, and grow with confidence.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <img
                  src="/idea.png"
                  alt="Light bulb emerging from open book representing innovative solutions"
                  className="w-full max-w-md lg:max-w-lg h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Introduction */}
      <section className="w-full py-16 px-6 lg:px-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl mb-6" style={{ color: '#454545' }}>
            Solutions
          </h2>
          <h3 className="text-xl lg:text-2xl mb-8" style={{ color: '#2E75B5' }}>
            Smart Technology. Real Impact.
          </h3>
          <p className="text-lg leading-relaxed" style={{ color: '#6B7280' }}>
            At Tosab Technologies, we deliver future-focused solutions that help businesses evolve, adapt, and lead in an increasingly digital 
            world. Whether you're moving to the cloud, optimizing workflows, or launching innovative software products, we bring the 
            technology and expertise to make it happen.
          </p>
        </div>
      </section>

      {/* Core Solutions */}
      <section className="w-full py-16 px-6 lg:px-20" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl " style={{ color: '#454545' }}>
              Our Core Solutions
            </h2>
          </div>

          <div className="space-y-12">
            {coreSolutions.map((solution, index) => (
              <div key={solution.id} className="space-y-4">
                <h3 className="text-xl lg:text-2xl " style={{ color: '#454545' }}>
                  {solution.title}
                </h3>
                <p className="text-base leading-relaxed max-w-5xl" style={{ color: '#6B7280' }}>
                  {solution.description}
                </p>
                {index < coreSolutions.length - 1 && (
                  <div className="pt-8">
                    <hr style={{ borderColor: '#E5E7EB' }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for Modern Industries */}
      <section className="w-full py-16 px-6 lg:px-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-3xl  mb-6" style={{ color: '#454545' }}>
            Built for Modern Industries
          </h2>
          <p className="text-lg leading-relaxed mb-8" style={{ color: '#6B7280' }}>
            We tailor solutions for a wide range of sectors including fintech, logistics, eCommerce, education, energy, and public services. 
            Wherever you are in your digital journey, we meet you there.
          </p>
        </div>
      </section>

      {/* What You Can Expect */}
      <section className="w-full py-16 px-6 lg:px-20" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-3xl mb-8" style={{ color: '#454545' }}>
            What You Can Expect
          </h2>
          <ul className="space-y-4">
            {expectations.map((expectation, index) => (
              <li
                key={index}
                className="flex items-start text-lg"
                style={{ color: '#6B7280' }}
              >
                <span className="text-2xl mr-3" style={{ color: '#E3AF59' }}>•</span>
                {expectation}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Let's Build the Right Solution */}
      <section className="w-full py-16 px-6 lg:px-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-3xl mb-6" style={{ color: '#454545' }}>
            Let's Build the Right Solution for You
          </h2>
          <p className="text-lg leading-relaxed mb-8" style={{ color: '#6B7280' }}>
            Whether you're a startup or an enterprise, Tosab Technologies is ready to partner with you. We combine innovation with 
            execution and we're just one conversation away.
          </p>
          
          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" style={{ color: '#2E75B5' }} fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <a 
                href="tel:+2347033197" 
                className="text-lg font-semibold hover:underline"
                style={{ color: '#2E75B5' }}
              >
                +2347033197
              </a>
            </div>
            <span className="hidden sm:block" style={{ color: '#6B7280' }}>|</span>
            <a 
              href="#" 
              className="text-lg font-semibold hover:underline"
              style={{ color: '#2E75B5' }}
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default SolutionsPage
