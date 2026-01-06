import React from 'react'
import Title from '../component/Title'
import about from '../assets/about.jpg'
import NewLetterBox from '../component/NewLetterBox'

function About() {
  return (
    <div className='min-h-screen bg-white text-black overflow-x-hidden relative top-[70px] font-serif'>
      
     {/*Sold Copy By Eliteblaze , dev: Prayag kaushik*/}
      <section className='py-16 px-6 bg-black text-white'>
        <div className='max-w-7xl mx-auto text-center'>
          <span className='text-xs font-light tracking-[0.6em] uppercase text-gray-300 block mb-4'>
            Our Story
          </span>
          <h1 className='text-5xl lg:text-6xl font-extralight tracking-tight mb-6'>
            ABOUT CALY COURTURE
          </h1>
          <div className='flex items-center justify-center mb-6'>
            <div className='w-8 h-px bg-white'></div>
            <div className='w-2 h-2 bg-white rounded-full mx-4'></div>
            <div className='w-8 h-px bg-white'></div>
          </div>
          <p className='text-lg font-light text-gray-300 max-w-2xl mx-auto'>
            Where luxury meets innovation in every thread
          </p>
        </div>
      </section>

     {/*Sold Copy By Eliteblaze , dev: Prayag kaushik*/}
      <section className='py-20 px-6 bg-white'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
            
           {/*Sold Copy By Eliteblaze , dev: Prayag kaushik*/}
            <div className='order-2 lg:order-1'>
              <div className='bg-stone-100 p-8 border border-stone-200'>
                <img 
                  src={about} 
                  alt="About CALY COURTURE" 
                  className='w-full max-h-[500px] object-contain'
                />
              </div>
            </div>
            
          {/*Sold Copy By Eliteblaze , dev: Prayag kaushik*/}
            <div className='order-1 lg:order-2 space-y-8'>
              <div>
                <h2 className='text-3xl font-light text-black mb-6 tracking-wide'>
                  Our Heritage
                </h2>
                <p className='text-lg font-light text-gray-700 leading-relaxed mb-6'>
                  CALY COURTURE was born from a vision of smart, seamless shopping - created to deliver quality products, trending styles, and everyday essentials in one distinguished place.
                </p>
                <p className='text-lg font-light text-gray-700 leading-relaxed'>
                  With reliable service, fast delivery, and exceptional value, CALY COURTURE transforms your online shopping experience into something simple, satisfying, and stress-free.
                </p>
              </div>
              
              <div>
                <h3 className='text-2xl font-light text-black mb-4 tracking-wide'>
                  Our Mission
                </h3>
                <p className='text-lg font-light text-gray-700 leading-relaxed'>
                  Our mission is to redefine online shopping by delivering quality, affordability, and convenience. CALY COURTURE connects customers with trusted products and brands, offering a seamless, customer-focused experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/*Sold Copy By Eliteblaze , dev: Prayag kaushik*/}
      <section className='py-20 px-6 bg-stone-50'>
        <div className='max-w-7xl mx-auto'>
          
         {/*Sold Copy By Eliteblaze , dev: Prayag kaushik*/}
          <div className='text-center mb-16'>
            <span className='text-xs font-light tracking-[0.6em] uppercase text-gray-600 block mb-4'>
              Excellence
            </span>
            <h2 className='text-4xl lg:text-5xl font-extralight text-black mb-8 tracking-tight'>
              WHY CHOOSE US
            </h2>
            <div className='flex items-center justify-center mb-8'>
              <div className='w-8 h-px bg-black'></div>
              <div className='w-2 h-2 bg-black rounded-full mx-4'></div>
              <div className='w-8 h-px bg-black'></div>
            </div>
          </div>

        {/*Sold Copy By Eliteblaze , dev: Prayag kaushik*/}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            
          {/*Sold Copy By Eliteblaze , dev: Prayag kaushik*/}
            <div className='bg-white border border-stone-200 p-8 text-center group hover:shadow-lg transition-shadow duration-300'>
              <div className='mb-6'>
                <div className='w-16 h-16 bg-black mx-auto rounded-full flex items-center justify-center'>
                  <span className='text-white text-2xl'>✓</span>
                </div>
              </div>
              <h3 className='text-xl font-light text-black mb-4 tracking-wide'>
                QUALITY ASSURANCE
              </h3>
              <p className='text-gray-600 font-light leading-relaxed'>
                We guarantee quality through strict checks, reliable sourcing, and an unwavering commitment to customer satisfaction.
              </p>
            </div>

          {/*Sold Copy By Eliteblaze , dev: Prayag kaushik*/}
            <div className='bg-white border border-stone-200 p-8 text-center group hover:shadow-lg transition-shadow duration-300'>
              <div className='mb-6'>
                <div className='w-16 h-16 bg-black mx-auto rounded-full flex items-center justify-center'>
                  <span className='text-white text-2xl'>⚡</span>
                </div>
              </div>
              <h3 className='text-xl font-light text-black mb-4 tracking-wide'>
                CONVENIENCE
              </h3>
              <p className='text-gray-600 font-light leading-relaxed'>
                Shop effortlessly with fast delivery, intuitive navigation, secure checkout, and everything you need in one place.
              </p>
            </div>

         {/*Sold Copy By Eliteblaze , dev: Prayag kaushik*/}
            <div className='bg-white border border-stone-200 p-8 text-center group hover:shadow-lg transition-shadow duration-300'>
              <div className='mb-6'>
                <div className='w-16 h-16 bg-black mx-auto rounded-full flex items-center justify-center'>
                  <span className='text-white text-2xl'>★</span>
                </div>
              </div>
              <h3 className='text-xl font-light text-black mb-4 tracking-wide'>
                EXCEPTIONAL SERVICE
              </h3>
              <p className='text-gray-600 font-light leading-relaxed'>
                Our dedicated support team ensures quick responses, helpful solutions, and a smooth shopping experience every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*Sold Copy By Eliteblaze , dev: Prayag kaushik*/}
      <section className='py-20 px-6 bg-black text-white'>
        <div className='max-w-4xl mx-auto text-center'>
          
          <span className='text-xs font-light tracking-[0.6em] uppercase text-gray-300 block mb-4'>
            Stay Connected
          </span>
          <h2 className='text-4xl lg:text-5xl font-extralight text-white mb-8 tracking-tight'>
            JOIN OUR FAMILY
          </h2>
          <div className='flex items-center justify-center mb-12'>
            <div className='w-8 h-px bg-white'></div>
            <div className='w-2 h-2 bg-white rounded-full mx-4'></div>
            <div className='w-8 h-px bg-white'></div>
          </div>
          <p className='text-lg font-light text-gray-300 max-w-2xl mx-auto mb-12'>
            Be the first to know about new collections, exclusive offers, and luxury experiences
          </p>
          
          <div className='bg-gray-900 border border-gray-700 p-12 max-w-2xl mx-auto'>
            <NewLetterBox/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
