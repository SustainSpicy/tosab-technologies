import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const PrivacyPolicyPage: React.FC = () => {
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
                Privacy Policy
              </h1>
              <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#454545' }}>
                <p>
                  Welcome to the Tosab Technologies Blog, your hub for expert insights, industry trends, and 
                  practical advice on cloud computing, DevOps, software development, digital transformation, 
                  and emerging tech in Africa and beyond.
                </p>
                <p>
                  Stay informed with thought leadership, case studies, and tech tips designed to help your 
                  business grow smarter and scale faster in the digital era.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <img
                  src="/privacy.png"
                  alt="Security shield representing privacy protection and data security"
                  className="w-full max-w-md lg:max-w-lg h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="w-full py-16 px-6 lg:px-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Introduction */}
          <div className="space-y-4">
            <p className="text-base leading-relaxed" style={{ color: '#6B7280' }}>
              Certainly! Below is a standard Privacy Policy tailored for Tosab Technologies, assuming you're collecting general website data such as contact form submissions, email sign-ups, 
              cookies, and possibly analytics tracking. It's professional, GDPR-compliant in tone, and ready for website use.
            </p>
            
            <div className="space-y-2">
              <h2 className="text-xl " style={{ color: '#454545' }}>Privacy Policy</h2>
              <p className="text-sm" style={{ color: '#6B7280' }}>Effective Date: [Insert Date]</p>
            </div>
            
            <p className="text-base leading-relaxed" style={{ color: '#6B7280' }}>
              Tosab Technologies ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy outlines how we collect, use, disclose, and protect 
              the information you provide when using our website and services.
            </p>
          </div>

          {/* 1. Information We Collect */}
          <div className="space-y-4">
            <h2 className="text-xl " style={{ color: '#454545' }}>1. Information We Collect</h2>
            <p className="text-base" style={{ color: '#6B7280' }}>We may collect the following types of information:</p>
            
            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="text-lg mr-2" style={{ color: '#2E75B5' }}>•</span>
                <span className="text-base" style={{ color: '#6B7280' }}>
                  <strong>Personal Information:</strong> Name, email address, phone number, company name, or other details you provide through contact forms or newsletter sign-ups.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-lg mr-2" style={{ color: '#2E75B5' }}>•</span>
                <span className="text-base" style={{ color: '#6B7280' }}>
                  <strong>Usage Data:</strong> Information about your interactions with our website such as IP address, browser type, device type, pages visited, and referring pages.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-lg mr-2" style={{ color: '#2E75B5' }}>•</span>
                <span className="text-base" style={{ color: '#6B7280' }}>
                  <strong>Cookies and Tracking:</strong> We use cookies and similar tracking technologies to enhance your experience, analyze site traffic, and improve our services.
                </span>
              </li>
            </ul>
          </div>

          {/* 2. How We Use Your Information */}
          <div className="space-y-4">
            <h2 className="text-xl " style={{ color: '#454545' }}>2. How We Use Your Information</h2>
            <p className="text-base" style={{ color: '#6B7280' }}>We may use the collected data to:</p>
            
            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="text-lg mr-2" style={{ color: '#2E75B5' }}>•</span>
                <span className="text-base" style={{ color: '#6B7280' }}>Respond to inquiries or provide customer support</span>
              </li>
              <li className="flex items-start">
                <span className="text-lg mr-2" style={{ color: '#2E75B5' }}>•</span>
                <span className="text-base" style={{ color: '#6B7280' }}>Improve our website and services</span>
              </li>
              <li className="flex items-start">
                <span className="text-lg mr-2" style={{ color: '#2E75B5' }}>•</span>
                <span className="text-base" style={{ color: '#6B7280' }}>Send newsletters, updates, or promotional content (only if you've opted in)</span>
              </li>
              <li className="flex items-start">
                <span className="text-lg mr-2" style={{ color: '#2E75B5' }}>•</span>
                <span className="text-base" style={{ color: '#6B7280' }}>Analyze user behavior to enhance user experience</span>
              </li>
              <li className="flex items-start">
                <span className="text-lg mr-2" style={{ color: '#2E75B5' }}>•</span>
                <span className="text-base" style={{ color: '#6B7280' }}>Maintain the security and integrity of our systems</span>
              </li>
            </ul>
          </div>

          {/* 3. Sharing Your Information */}
          <div className="space-y-4">
            <h2 className="text-xl " style={{ color: '#454545' }}>3. Sharing Your Information</h2>
            <p className="text-base" style={{ color: '#6B7280' }}>We do not sell, trade, or rent your personal information to third parties. We may share data with:</p>
            
            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="text-lg mr-2" style={{ color: '#2E75B5' }}>•</span>
                <span className="text-base" style={{ color: '#6B7280' }}>Trusted third-party service providers who assist in operating our website and services (e.g., hosting, analytics)</span>
              </li>
              <li className="flex items-start">
                <span className="text-lg mr-2" style={{ color: '#2E75B5' }}>•</span>
                <span className="text-base" style={{ color: '#6B7280' }}>Legal authorities when required to comply with applicable laws or regulations</span>
              </li>
            </ul>
          </div>

          {/* 4. Data Security */}
          <div className="space-y-4">
            <h2 className="text-xl " style={{ color: '#454545' }}>4. Data Security</h2>
            <p className="text-base" style={{ color: '#6B7280' }}>
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the 
              internet is 100% secure.
            </p>
          </div>

          {/* 5. Your Rights */}
          <div className="space-y-4">
            <h2 className="text-xl " style={{ color: '#454545' }}>5. Your Rights</h2>
            <p className="text-base" style={{ color: '#6B7280' }}>
              Depending on your location, you may have rights to access, correct, delete, or restrict the use of your personal data. To exercise these rights, contact us at [Insert Contact Email].
            </p>
          </div>

          {/* 6. Third-Party Links */}
          <div className="space-y-4">
            <h2 className="text-xl " style={{ color: '#454545' }}>6. Third-Party Links</h2>
            <p className="text-base" style={{ color: '#6B7280' }}>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites.
            </p>
          </div>

          {/* 7. Children's Privacy */}
          <div className="space-y-4">
            <h2 className="text-xl " style={{ color: '#454545' }}>7. Children's Privacy</h2>
            <p className="text-base" style={{ color: '#6B7280' }}>
              Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children.
            </p>
          </div>

          {/* 8. Changes to This Policy */}
          <div className="space-y-4">
            <h2 className="text-xl " style={{ color: '#454545' }}>8. Changes to This Policy</h2>
            <p className="text-base" style={{ color: '#6B7280' }}>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
            </p>
          </div>

          {/* 9. Contact Us */}
          <div className="space-y-4">
            <h2 className="text-xl " style={{ color: '#454545' }}>9. Contact Us</h2>
            <p className="text-base mb-4" style={{ color: '#6B7280' }}>
              If you have any questions or concerns about this Privacy Policy or your data, please contact us at:
            </p>
            
            <div className="space-y-3 ml-6">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" style={{ color: '#2E75B5' }} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span className="text-base " style={{ color: '#2E75B5' }}>[Insert Contact Email]</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" style={{ color: '#2E75B5' }} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2L3 7v11a1 1 0 001 1h3v-8h6v8h3a1 1 0 001-1V7l-7-5z"/>
                </svg>
                <a 
                  href="https://www.tosabtechnologies.com" 
                  className="text-base hover:underline"
                  style={{ color: '#2E75B5' }}
                >
                  www.tosabtechnologies.com
                </a>
              </div>
            </div>
          </div>

          {/* Last Updated */}
          <div className="pt-8 border-t" style={{ borderColor: '#E5E7EB' }}>
            <p className="text-sm" style={{ color: '#9CA3AF' }}>
              This Privacy Policy was last updated on [Insert Date]. Please review it periodically for any changes.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="w-full py-16 px-6 lg:px-20" style={{ backgroundColor: '#2E75B5' }}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl lg:text-4xl  mb-6">
            Questions About Your Privacy?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            We're committed to transparency and protecting your data. 
            If you have any questions about how we handle your information, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-8 py-3 rounded-lg  transition-colors"
              style={{
                backgroundColor: '#E3AF59',
                color: '#FFFFFF'
              }}
              onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#D49A3E'}
              onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#E3AF59'}
            >
              Contact Privacy Team
            </button>
            <button
              className="px-8 py-3 rounded-lg transition-colors"
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
              View Contact Info
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default PrivacyPolicyPage
