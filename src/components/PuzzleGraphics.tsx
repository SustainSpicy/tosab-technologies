import React from 'react'

interface PuzzleGraphicsProps {
  image: string
  isVisible: boolean
}

const PuzzleGraphics: React.FC<PuzzleGraphicsProps> = ({ image, isVisible }) => {
  return (
    <div className="hidden lg:flex flex-1 justify-center items-center">
      <div className={`relative transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <img 
          src={image} 
          alt="Visual representation of our services and innovation" 
          className="w-106 h-106 object-contain"
        />
      </div>
    </div>
  )
}

export default PuzzleGraphics
