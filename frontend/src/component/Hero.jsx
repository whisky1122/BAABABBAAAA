import React from 'react'
import { FaCircle } from "react-icons/fa"

function Hero({ heroData, heroCount, setHeroCount }) {
  return (
    <div className='w-full max-w-2xl'>
      
      {/* Hero Text */}
      <div className='mb-8'>
        <h1 className='text-white font-serif text-4xl md:text-6xl lg:text-7xl font-extralight leading-tight tracking-widest mb-4'>
          {heroData.text1}
        </h1>
        <h2 className='text-yellow-400 font-serif text-xl md:text-2xl lg:text-3xl font-light tracking-wide'>
          {heroData.text2}
        </h2>
      </div>

      {/* Navigation Dots */}
      <div className='flex items-center gap-3'>
        {[0, 1, 2, 3].map((index) => (
          <button
            key={index}
            onClick={() => setHeroCount(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 ${
              heroCount === index 
                ? 'bg-yellow-400 shadow-lg shadow-yellow-400/50' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Hero
