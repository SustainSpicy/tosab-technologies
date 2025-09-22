import React, {  useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import TosabLogo from './TosabLogo'
// import { navigationItems } from '../data/navigationData'

const Navigation: React.FC = () => {
  // const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // const handleMouseEnter = (itemLabel: string) => {
  //   if (hoverTimeoutRef.current) {
  //     clearTimeout(hoverTimeoutRef.current)
  //   }
  //   setHoveredItem(itemLabel)
  // }

  // const handleMouseLeave = () => {
  //   hoverTimeoutRef.current = setTimeout(() => {
  //     setHoveredItem(null)
  //   }, 150) // Small delay to allow moving to dropdown
  // }

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }
    }
  }, [])

  return (
    <nav className="relative flex items-center justify-between px-6 py-4 lg:px-20">
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