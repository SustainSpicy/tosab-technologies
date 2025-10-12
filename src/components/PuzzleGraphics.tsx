import React from 'react'

interface PuzzleGraphicsProps {
  image: string
  isVisible: boolean
}

const PuzzleGraphics: React.FC<PuzzleGraphicsProps> = ({ image, isVisible }) => {
  return (
    <div className="flex justify-center items-center w-full lg:w-auto">
      <div className={`relative transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <img 
          src={image} 
          alt="Visual representation of our services and innovation" 
          className="w-64 sm:w-80 lg:w-96 xl:w-[28rem] h-auto object-contain max-w-full"
        />
      </div>
    </div>
  )
}

export default PuzzleGraphics
