import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { faqs } from '../data/faqData'

const FAQPage: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

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
                Frequently Asked Questions
              </h1>
              <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#6B7280' }}>
                <p>
                  Got questions? We've got answers. Here's everything you need to know about Tosab Technologies, 
                  our services, solutions, and how we help businesses grow with reliable cloud, DevOps, and digital 
                  transformation support. Whether you're exploring your first project or looking for a long-term tech 
                  partner, this section is designed to guide you.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <img
                  src="/faq.png"
                  alt="Frequently asked questions lightbulb with question mark"
                  className="w-full max-w-md lg:max-w-lg h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 px-6 lg:px-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md"
                style={{ borderColor: '#E5E7EB' }}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between transition-colors duration-300"
                  style={{
                    backgroundColor: openFAQ === faq.id ? '#F8F9FA' : '#FFFFFF'
                  }}
                  onMouseEnter={(e) => {
                    if (openFAQ !== faq.id) {
                      (e.target as HTMLElement).style.backgroundColor = '#F8F9FA'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (openFAQ !== faq.id) {
                      (e.target as HTMLElement).style.backgroundColor = '#FFFFFF'
                    }
                  }}
                >
                  <span className="flex items-center">
                    <span 
                      className="text-xl font-bold mr-4"
                      style={{ color: '#2E75B5' }}
                    >
                      {faq.id}.
                    </span>
                    <span 
                      className="text-lg font-semibold"
                      style={{ color: '#454545' }}
                    >
                      {faq.question}
                    </span>
                  </span>
                  <svg
                    className={`w-6 h-6 transition-transform duration-300 ${
                      openFAQ === faq.id ? 'rotate-180' : ''
                    }`}
                    style={{ color: '#2E75B5' }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Answer */}
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openFAQ === faq.id ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <div className="pt-2">
                    <p 
                      className="text-base leading-relaxed"
                      style={{ color: '#6B7280' }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="w-full py-16 px-6 lg:px-20" style={{ backgroundColor: '#2E75B5' }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Can't find the answer you're looking for? Our team is here to help. 
            Get in touch and we'll provide personalized answers to your specific questions.
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
              Contact Our Team
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
              Schedule a Call
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default FAQPage
