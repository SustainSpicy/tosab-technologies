import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import TosabLogo from './TosabLogo'
import { navigationItems } from '../data/navigationData'

const Navigation: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (itemLabel: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    setHoveredItem(itemLabel)
  }

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredItem(null)
    }, 150) // Small delay to allow moving to dropdown
  }

  // Scroll detection for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 10) // Becomes sticky after scrolling 50px
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }
    }
  }, [])

  return (
    <nav 
      className={`${isScrolled ? 'fixed' : 'relative'} top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 lg:px-20 transition-all duration-300`}
      style={{
        background: isScrolled 
          ? `linear-gradient(to bottom right, rgba(46, 117, 181, 0.95), rgba(30, 90, 138, 0.95), rgba(69, 69, 69, 0.95))`
          : `linear-gradient(to bottom right, #2E75B5, #1E5A8A)`,
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none'
      }}>
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-3">
        <div className="w-8 h-8 flex items-center justify-center">
          <TosabLogo width='42' height='42' mainColor="#FFFFFF" accentColor='#E3AF59' />
        </div>
        <div style={{ color: '#FFFFFF' }}>
          <h1 className="text-xl font-bold">Tosab Technologies</h1>
          <p className="text-xs" style={{ color: '#F8FAFC' }}>Powering Africa's Digital Future</p>
        </div>
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-8">
        {navigationItems.map((item) => (
          <div
            key={item.label}
            className="relative"
            onMouseEnter={() => handleMouseEnter(item.label)}
            onMouseLeave={handleMouseLeave}
          >
            {item.dropdown ? (
              <>
                {/* Dropdown trigger - can be both link and dropdown */}
                {item.href ? (
                  <Link
                    to={item.href}
                    className="flex items-center transition-colors"
                    style={{ color: hoveredItem === item.label ? '#E3AF59' : '#FFFFFF' }}
                  >
                    {item.label}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                ) : (
                  <button 
                    className="flex items-center transition-colors" 
                    style={{ color: hoveredItem === item.label ? '#E3AF59' : '#FFFFFF' }}
                  >
                    {item.label}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
                {/* Dropdown menu */}
                {hoveredItem === item.label && (
                  <>
                    {/* Invisible bridge to prevent hover gap */}
                    <div className="absolute top-full left-0 w-80 h-2 bg-transparent z-40"></div>
                    <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                      <div className="px-4 py-2">
                        <h3 className="text-sm font-semibold mb-2" style={{ color: '#454545' }}>
                          {item.label}
                        </h3>
                        <div className="space-y-1">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.label}
                              to={dropdownItem.href}
                              className="block px-3 py-2 text-sm rounded-md transition-colors hover:bg-gray-50"
                              style={{ color: '#6B7280' }}
                              onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.color = '#2E75B5'}
                              onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.color = '#6B7280'}
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </>
            ) : (
              <Link
                to={item.href || '#'}
                className="transition-colors"
                style={{ color: hoveredItem === item.label ? '#E3AF59' : '#FFFFFF' }}
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}

        {/* Search Button */}
        <button
          className="transition-colors"
          style={{ color: '#FFFFFF' }}
          onMouseEnter={(e) => (e.target as HTMLButtonElement).style.color = '#E3AF59'}
          onMouseLeave={(e) => (e.target as HTMLButtonElement).style.color = '#FFFFFF'}
        >
          <Search size={20} />
        </button>
      </div>

      {/* Mobile menu button */}
      <button className="md:hidden" style={{ color: '#FFFFFF' }}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  )
}

export default Navigation