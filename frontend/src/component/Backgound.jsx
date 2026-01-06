import React, { useEffect, useState, useCallback } from 'react'
import back1 from "../assets/back1.jpg"
import back2 from "../assets/back2.jpg"
import back3 from "../assets/back3.jpg"
import back4 from "../assets/back4.jpg"

function Background({ heroCount }) {
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [loadedCount, setLoadedCount] = useState(0)
  const [hasError, setHasError] = useState(false)
  
  const backgroundImages = [
    { src: back2, alt: "Luxury Fashion Collection 1", title: "Spring Collection" },
    { src: back1, alt: "Luxury Fashion Collection 2", title: "Summer Essentials" },
    { src: back3, alt: "Luxury Fashion Collection 3", title: "Autumn Elegance" },
    { src: back4, alt: "Luxury Fashion Collection 4", title: "Winter Luxury" }
  ]

  // Enhanced image preloading with progress tracking
  useEffect(() => {
    setLoadedCount(0)
    setHasError(false)
    
    const imagePromises = backgroundImages.map((img, index) => {
      return new Promise((resolve, reject) => {
        const image = new Image()
        
        image.onload = () => {
          setLoadedCount(prev => prev + 1)
          resolve(index)
        }
        
        image.onerror = () => {
          console.error(`Failed to load image: ${img.src}`)
          setHasError(true)
          reject(new Error(`Failed to load image ${index}`))
        }
        
        image.src = img.src
      })
    })

    Promise.allSettled(imagePromises)
      .then(() => {
        setTimeout(() => setImagesLoaded(true), 300) // Small delay for smooth transition
      })
  }, [])

  const currentImage = backgroundImages[heroCount] || backgroundImages[0]
  const loadingProgress = (loadedCount / backgroundImages.length) * 100

  return (
    <div className='w-full h-full relative overflow-hidden select-none font-serif'>
      
      {/* GUCCI Background Images */}
      {backgroundImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === heroCount ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <img
            src={img.src}
            alt={img.alt}
            title={img.title}
            className='w-full h-full object-cover pointer-events-none'
            loading='eager'
            draggable={false}
          />
        </div>
      ))}
      
      {/* GUCCI Minimal Loading State */}
      {!imagesLoaded && (
        <div className='absolute inset-0 bg-white flex items-center justify-center'>
          <div className='text-black text-center'>
            
            {/* GUCCI Brand Loading */}
            <div className='mb-8'>
              <h1 className='text-2xl font-normal tracking-[0.2em] text-black mb-4'>
                CALY COURTURE
              </h1>
            </div>
            
            {/* GUCCI Simple Loading Progress */}
            <div className='w-32 h-px bg-gray-300 mx-auto mb-4'>
              <div 
                className='h-full bg-black transition-all duration-300'
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
            
            <p className='text-sm font-light text-gray-600'>
              {hasError ? 'Loading...' : `${loadedCount}/${backgroundImages.length}`}
            </p>
          </div>
        </div>
      )}
      
      {/* GUCCI Minimal Overlay */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute inset-0 bg-black/10'></div>
      </div>

      {/* GUCCI Error Fallback */}
      {hasError && imagesLoaded && (
        <div className='absolute inset-0 bg-white flex items-center justify-center'>
          <div className='text-black text-center'>
            <h2 className='text-2xl font-normal mb-4 tracking-[0.2em]'>CALY COURTURE</h2>
            <p className='text-base font-light text-gray-600'>Images unavailable</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Background
