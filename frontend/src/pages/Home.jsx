// Sold Copy By Eliteblaze , dev: Prayag kaushik
import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Hero from '../component/Hero'
import Product from './Product'
import BestSeller from '../component/BestSeller'
import OurPolicy from '../component/OurPolicy'
import Footer from '../component/Footer'


// Sold Copy By Eliteblaze , dev: Prayag kaushik
function Home() {
  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  const navigate = useNavigate()
  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const sectionsRef = useRef([])

  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  let heroData = [
    { text1: "AUTUMN COLLECTION 2026", text2: "Crafted Excellence" },
    { text1: "HERITAGE & INNOVATION", text2: "Timeless Luxury" },
    { text1: "ZOYA ELEGANCE", text2: "Italian Craftsmanship" },
    { text1: "EXCLUSIVE PIECES", text2: "For the Discerning" }
  ]

  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  let [heroCount, setHeroCount] = useState(0)

  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  useEffect(() => {
    // Sold Copy By Eliteblaze , dev: Prayag kaushik
    let interval = setInterval(() => {
      setHeroCount(prevCount => (prevCount === 3 ? 0 : prevCount + 1));
    }, 4000);
    return () => clearInterval(interval)
  }, [])

  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Page load animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  const handleShopNow = () => {
    navigate('/collection')
  }

  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  return (
    <div className={`min-h-screen bg-white text-black overflow-x-hidden relative top-[70px] gucci-site ${isLoaded ? 'loaded' : ''}`}>

      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik - GUCCI HERO SECTION */}
      <section className='relative w-full h-screen bg-white flex items-center justify-center overflow-hidden'>

        {/* GUCCI Background Animation */}
        <div className='gucci-bg-animation'></div>

        {/* GUCCI Top Logo - Exact styling */}
        <div className='absolute top-6 left-1/2 transform -translate-x-1/2 z-50 animate-logo-entrance'>
          <div className='gucci-logo-text'>

          </div>
        </div>

        {/* GUCCI Main Content - Centered */}
        <div className='text-center max-w-6xl px-4 z-10 hero-content'>

          <div className='mb-12'>
            <h1 className='gucci-hero-title animate-text-reveal'>
              <span className='text-line'>{heroData[heroCount].text1}</span>
            </h1>
            <p className='gucci-hero-subtitle animate-subtitle-slide'>
              {heroData[heroCount].text2}
            </p>
          </div>

          {/* GUCCI CTA Button - Exact styling */}
          <div className='mb-16 animate-button-entrance'>
            <button
              onClick={handleShopNow}
              className='gucci-cta-button animate-luxury-hover'
            >
              <span className='btn-content'>
                <span className='btn-text'>SHOP NOW</span>
                <span className='btn-line'></span>
              </span>
            </button>
          </div>
        </div>

        {/* GUCCI Navigation Indicators */}
        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10 animate-dots-entrance'>
          {heroData.map((_, index) => (
            <button
              key={index}
              onClick={() => setHeroCount(index)}
              className={`gucci-indicator animate-dot ${index === heroCount ? 'active' : ''}`}
            />
          ))}
        </div>

        {/* GUCCI Scroll Indicator */}
        <div className='absolute bottom-20 right-8 z-10 animate-scroll-indicator'>
          <div className='gucci-scroll-hint'>
            <span className='scroll-text'>SCROLL</span>
            <div className='scroll-line'></div>
          </div>
        </div>
      </section>

      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik - GUCCI PRODUCTS SECTION */}
      <section
        ref={el => sectionsRef.current[0] = el}
        className='gucci-section section-animate'
      >
        <div className='max-w-6xl mx-auto px-4'>

          <div className='text-center mb-12 title-container'>
            <h2 className='gucci-section-title animate-title-entrance'>
              NEW ARRIVALS
            </h2>
            <div className='gucci-divider animate-divider-growth'></div>
            <p className='gucci-section-subtitle animate-subtitle-fade'>
              Discover the latest creations
            </p>
          </div>

          <div className='gucci-content-box animate-content-slide'>
            <Product />
          </div>
        </div>
      </section>

      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik - GUCCI FEATURED SECTION */}
      <section
        ref={el => sectionsRef.current[1] = el}
        className='gucci-section gucci-section-alt section-animate'
      >
        <div className='max-w-6xl mx-auto px-4'>

          <div className='text-center mb-12 title-container'>
            <h2 className='gucci-section-title animate-title-entrance'>
              FEATURED
            </h2>
            <div className='gucci-divider animate-divider-growth'></div>
            <p className='gucci-section-subtitle animate-subtitle-fade'>
              Signature pieces
            </p>
          </div>

          <div className='gucci-content-box animate-content-slide'>
            <BestSeller />
          </div>
        </div>
      </section>

      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik - GUCCI SERVICES */}
      <section
        ref={el => sectionsRef.current[2] = el}
        className='gucci-section section-animate'
      >
        <div className='max-w-5xl mx-auto px-4'>

          <div className='text-center mb-12 title-container'>
            <h2 className='gucci-section-title animate-title-entrance'>
              SERVICES
            </h2>
            <div className='gucci-divider animate-divider-growth'></div>
          </div>

          <div className='gucci-content-box animate-content-slide'>
            <OurPolicy />
          </div>
        </div>
      </section>

      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik - GUCCI FOOTER */}
      <footer className='bg-white'>
        <Footer />
      </footer>

      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}


      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik - ENHANCED GUCCI ANIMATIONS */}
      <style jsx>{`
        /* GUCCI Official Font Import */
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        
        .gucci-site {
          font-family: 'Playfair Display', 'Times New Roman', serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* GUCCI Page Load Animation */
        .gucci-site {
          opacity: 0;
          transition: opacity 1s ease;
        }

        .gucci-site.loaded {
          opacity: 1;
        }

        /* GUCCI Background Animation */
        .gucci-bg-animation {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, transparent 48%, rgba(0,0,0,0.02) 49%, rgba(0,0,0,0.02) 51%, transparent 52%);
          background-size: 30px 30px;
          animation: subtle-bg-move 20s linear infinite;
          opacity: 0.3;
        }

        /* GUCCI Logo Animation */
        .animate-logo-entrance {
          opacity: 0;
          transform: translateX(-50%) translateY(-20px);
          animation: logo-entrance 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s forwards;
        }

        .gucci-logo-text {
          font-family: 'Inter', 'Arial', sans-serif;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.5em;
          color: #000000;
          text-transform: uppercase;
          position: relative;
          overflow: hidden;
        }

        .gucci-logo-text::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: -100%;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, #000000, transparent);
          animation: logo-underline 2s ease-in-out 2s infinite;
        }

        /* GUCCI Hero Content Animations */
        .hero-content {
          opacity: 0;
          transform: translateY(30px);
          animation: hero-entrance 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s forwards;
        }

        .gucci-hero-title {
          font-family: 'Playfair Display', 'Times New Roman', serif;
          font-weight: 300;
          font-size: clamp(3rem, 8vw, 12rem);
          line-height: 0.85;
          letter-spacing: 0.02em;
          color: #000000;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
          overflow: hidden;
        }

        .animate-text-reveal .text-line {
          display: inline-block;
          transform: translateY(100%);
          animation: text-reveal 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.5s forwards;
        }

        .gucci-hero-subtitle {
          font-family: 'Playfair Display', 'Times New Roman', serif;
          font-weight: 400;
          font-size: 1.125rem;
          letter-spacing: 0.2em;
          color: #000000;
          text-transform: uppercase;
          opacity: 0;
          transform: translateX(-20px);
          animation: subtitle-slide 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 2s forwards;
        }

        /* GUCCI Button Animations */
        .animate-button-entrance {
          opacity: 0;
          transform: scale(0.9);
          animation: button-entrance 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 2.5s forwards;
        }

        .gucci-cta-button {
          font-family: 'Inter', 'Arial', sans-serif;
          font-weight: 600;
          font-size: 11px;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          background-color: #000000;
          color: #ffffff;
          border: none;
          padding: 16px 48px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .animate-luxury-hover {
          position: relative;
        }

        .animate-luxury-hover .btn-content {
          position: relative;
          z-index: 2;
        }

        .animate-luxury-hover .btn-line {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background-color: #ffffff;
          transition: width 0.4s ease;
        }

        .animate-luxury-hover:hover .btn-line {
          width: 100%;
        }

        .animate-luxury-hover::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.6s ease;
        }

        .animate-luxury-hover:hover::before {
          left: 100%;
        }

        .animate-luxury-hover:hover {
          transform: translateY(-2px);
          letter-spacing: 0.5em;
        }

        /* GUCCI Navigation Dots Animation */
        .animate-dots-entrance {
          opacity: 0;
          animation: dots-entrance 1s ease 3s forwards;
        }

        .gucci-indicator {
          width: 8px;
          height: 8px;
          background-color: #cccccc;
          border: none;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
        }

        .animate-dot {
          transform: scale(0);
          animation: dot-pop 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }

        .animate-dot:nth-child(1) { animation-delay: 3.1s; }
        .animate-dot:nth-child(2) { animation-delay: 3.2s; }
        .animate-dot:nth-child(3) { animation-delay: 3.3s; }
        .animate-dot:nth-child(4) { animation-delay: 3.4s; }

        .gucci-indicator.active {
          background-color: #000000;
          transform: scale(1.2);
        }

        .gucci-indicator:hover {
          background-color: #666666;
          transform: scale(1.1);
        }

        /* GUCCI Scroll Indicator */
        .animate-scroll-indicator {
          opacity: 0;
          animation: scroll-indicator-entrance 1s ease 3.5s forwards;
        }

        .gucci-scroll-hint {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .scroll-text {
          font-family: 'Inter', Arial, sans-serif;
          font-size: 10px;
          font-weight: 300;
          letter-spacing: 0.3em;
          color: #666666;
          text-transform: uppercase;
        }

        .scroll-line {
          width: 1px;
          height: 30px;
          background: linear-gradient(to bottom, #666666, transparent);
          animation: scroll-line-pulse 2s ease-in-out infinite;
        }

        /* GUCCI Section Animations */
        .section-animate {
          opacity: 0;
          transform: translateY(50px);
          transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .section-animate.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .title-container .animate-title-entrance {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transition-delay: 0.2s;
        }

        .section-animate.animate-in .animate-title-entrance {
          opacity: 1;
          transform: translateY(0);
        }

        .animate-divider-growth {
          width: 0;
          transition: width 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transition-delay: 0.4s;
        }

        .section-animate.animate-in .animate-divider-growth {
          width: 60px;
        }

        .animate-subtitle-fade {
          opacity: 0;
          transition: opacity 0.8s ease;
          transition-delay: 0.6s;
        }

        .section-animate.animate-in .animate-subtitle-fade {
          opacity: 1;
        }

        .animate-content-slide {
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transition-delay: 0.8s;
        }

        .section-animate.animate-in .animate-content-slide {
          opacity: 1;
          transform: translateY(0);
        }

        /* GUCCI Typography Styles */
        .gucci-section-title {
          font-family: 'Playfair Display', 'Times New Roman', serif;
          font-weight: 400;
          font-size: 2.5rem;
          letter-spacing: 0.15em;
          color: #000000;
          text-transform: uppercase;
          margin-bottom: 2rem;
          position: relative;
        }

        .gucci-section-subtitle {
          font-family: 'Inter', 'Arial', sans-serif;
          font-weight: 300;
          font-size: 0.875rem;
          letter-spacing: 0.25em;
          color: #000000;
          text-transform: uppercase;
          margin-top: 2rem;
        }

        .gucci-divider {
          height: 1px;
          background-color: #000000;
          margin: 0 auto;
        }

        /* GUCCI Sections */
        .gucci-section {
          padding: 80px 0;
          background-color: #ffffff;
          position: relative;
        }

        .gucci-section-alt {
          background-color: #f8f8f8;
        }

        /* GUCCI Content Boxes */
        .gucci-content-box {
          background-color: #f5f5f5;
          padding: 60px;
          border: 1px solid #e0e0e0;
          transition: all 0.4s ease;
        }

        .gucci-content-box:hover {
          background-color: #f0f0f0;
          border-color: #d0d0d0;
        }

        /* GUCCI Keyframe Animations */
        @keyframes subtle-bg-move {
          0% { background-position: 0 0; }
          100% { background-position: 30px 30px; }
        }

        @keyframes logo-entrance {
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        @keyframes logo-underline {
          0%, 100% { left: -100%; }
          50% { left: 100%; }
        }

        @keyframes hero-entrance {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes text-reveal {
          to {
            transform: translateY(0);
          }
        }

        @keyframes subtitle-slide {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes button-entrance {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes dots-entrance {
          to {
            opacity: 1;
          }
        }

        @keyframes dot-pop {
          to {
            transform: scale(1);
          }
        }

        @keyframes scroll-indicator-entrance {
          to {
            opacity: 1;
          }
        }

        @keyframes scroll-line-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        /* GUCCI Responsive Typography */
        @media (max-width: 768px) {
          .gucci-logo-text {
            font-size: 12px;
          }
          
          .gucci-hero-title {
            font-size: clamp(2rem, 10vw, 4rem);
          }
          
          .gucci-hero-subtitle {
            font-size: 1rem;
          }
          
          .gucci-section-title {
            font-size: 2rem;
          }
          
          .gucci-content-box {
            padding: 30px;
          }
        }

        /* Remove any unwanted styling */
        * {
          box-sizing: border-box;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  )
}

// Sold Copy By Eliteblaze , dev: Prayag kaushik
export default Home
