import React from 'react'
import { Link } from 'react-router-dom'
import TosabLogo from './TosabLogo'

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-12 px-6 lg:px-20" style={{ backgroundColor: '#F8F9FA' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10">
                <TosabLogo width='42' height='42' mainColor="#2E75B5" accentColor='#E3AF59' />
              </div>
              <div>
                <h3 className="text-xl font-bold" style={{ color: '#454545' }}>
                  Tosab Technologies
                </h3>
                <p className="text-sm" style={{ color: '#6B7280' }}>
                  Powering Africa's Digital Future
                </p>
              </div>
            </div>

            {/* Company Description */}
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: '#6B7280' }}>
              Tosab Technologies is a cloud and IT solutions company helping businesses across emerging 
              markets scale through modern infrastructure, custom software, DevOps, and digital transformation 
              services. We deliver smart, secure, and scalable tech built for the future.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              {/* Facebook */}
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:opacity-80"
            
                aria-label="Facebook"
              >
                <img src="/facebook.png" alt="Facebook" className="w-8 h-8 text-white" />
              </a>

              {/* Twitter/X */}
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:opacity-80"
             
                aria-label="Twitter/X"
              >
              <img src="/x.png" alt="Twitter/X" className="w-8 h-8 text-white" />
              </a>

              {/* Instagram */}
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:opacity-80"
             
                aria-label="Instagram"
              >
                <img src="/instagram.png" alt="Instagram" className="w-8 h-8 text-white" />
              </a>

              {/* TikTok */}
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:opacity-80"
            
                aria-label="TikTok"
              >
                <img src="/tiktok.png" alt="TikTok" className="w-8 h-8 text-white" />
              </a>

              {/* YouTube */}
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:opacity-80"
              
                aria-label="YouTube"
              >
                <img src="/youtube.png" alt="YouTube" className="w-8 h-8 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold" style={{ color: '#454545' }}>
              Quick Links
            </h4>
            <nav className="space-y-3">
              <a 
                href="#" 
                className="flex items-center text-sm transition-colors hover:text-blue-600"
                style={{ color: '#6B7280' }}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Home
              </a>
              <a 
                href="#" 
                className="flex items-center text-sm transition-colors hover:text-blue-600"
                style={{ color: '#6B7280' }}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Company
              </a>
              <a 
                href="#" 
                className="flex items-center text-sm transition-colors hover:text-blue-600"
                style={{ color: '#6B7280' }}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Services
              </a>
              <Link 
                to="/privacy-policy" 
                className="flex items-center text-sm transition-colors hover:text-blue-600"
                style={{ color: '#6B7280' }}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Privacy Policy
              </Link>
              <a 
                href="#" 
                className="flex items-center text-sm transition-colors hover:text-blue-600"
                style={{ color: '#6B7280' }}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Contact Us
              </a>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold" style={{ color: '#454545' }}>
              Contact Information
            </h4>
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-5 h-5" style={{ color: '#6B7280' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div className="text-sm" style={{ color: '#6B7280' }}>
                  3 Abubakar koko crescent<br />
                  Asokoro, Abuja
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5" style={{ color: '#6B7280' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <a 
                  href="mailto:info@tosabtechnologies.com" 
                  className="text-sm transition-colors hover:text-blue-600"
                  style={{ color: '#6B7280' }}
                >
                  info@tosabtechnologies.com
                </a>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5" style={{ color: '#6B7280' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div className="text-sm space-y-1" style={{ color: '#6B7280' }}>
                  <div>+23470313197</div>
                  <div>+23470313197</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0" style={{ borderColor: '#D1D5DB' }}>
          <p className="text-sm" style={{ color: '#6B7280' }}>
            © 2025 Tosab Media Tech Ltd
          </p>
          <p className="text-sm" style={{ color: '#6B7280' }}>
            All rights reserved.
          </p>
        </div>

        {/* Back to Top Button */}
        <div className="flex justify-end mt-6">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 rounded-lg flex items-center justify-center transition-all hover:scale-105"
            style={{ backgroundColor: '#2E75B5' }}
            aria-label="Back to top"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
