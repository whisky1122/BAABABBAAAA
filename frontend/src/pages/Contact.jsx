import React from 'react'
import Title from '../component/Title'
import contact from '../assets/contact.jpg'
import NewLetterBox from '../component/NewLetterBox'

function Contact() {
  return (
    <div className='min-h-screen bg-white text-black overflow-x-hidden relative top-[70px] font-serif'>
      
      {/*Sold Copy By Eliteblaze , dev: Prayag kaushik*/}
      <section className='py-16 px-6 bg-black text-white'>
        <div className='max-w-7xl mx-auto text-center'>
          <span className='text-xs font-light tracking-[0.6em] uppercase text-gray-300 block mb-4'>
            Get In Touch
          </span>
          <h1 className='text-5xl lg:text-6xl font-extralight tracking-tight mb-6'>
            CONTACT US
          </h1>
          <div className='flex items-center justify-center mb-6'>
            <div className='w-8 h-px bg-white'></div>
            <div className='w-2 h-2 bg-white rounded-full mx-4'></div>
            <div className='w-8 h-px bg-white'></div>
          </div>
          <p className='text-lg font-light text-gray-300 max-w-2xl mx-auto'>
            We'd love to hear from you. Reach out to us anytime
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
                  src={contact} 
                  alt="Contact ZOYA ELEGANCE" 
                  className='w-full max-h-[500px] object-contain'
                />
              </div>
            </div>
            
            {/*Sold Copy By Eliteblaze , dev: Prayag kaushik*/}
            <div className='order-1 lg:order-2 space-y-8'>
              
              {/*Sold Copy By Eliteblaze , dev: Prayag kaushik*/}
              <div>
                <h2 className='text-3xl font-light text-black mb-6 tracking-wide'>
                  OUR STORE
                </h2>
                <div className='space-y-3 text-lg font-light text-gray-700'>
                  <p>Safdalbagh Guru Govind Singh Marg</p>
                  <p>Lucknow 226001,Uttar Pradesh, India</p>
                </div>
              </div>

              {/*Sold Copy By Eliteblaze , dev: Prayag kaushik*/}
              <div>
                <h3 className='text-2xl font-light text-black mb-4 tracking-wide'>
                  REACH US
                </h3>
                <div className='space-y-3 text-lg font-light text-gray-700'>
                  <p>Tel: <span className='text-black'>+91-9454950104</span></p>
                  <p>Email: <span className='text-black'>zoyalegal@gmail.com</span></p>
                  <p>GST Number: <span className='text-black'>09BMMPK9252R3ZW </span></p>
                </div>
              </div>
              
              {/*Sold Copy By Eliteblaze , dev: Prayag kaushik*/}
              <div>
                <h3 className='text-2xl font-light text-black mb-4 tracking-wide'>
                  CAREERS AT ZOYA ELEGANCE
                </h3>
                <p className='text-lg font-light text-gray-700 leading-relaxed mb-6'>
                  Learn more about our teams and job openings. Join our mission to redefine luxury shopping.
                </p>
                <button className='bg-black text-white px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors duration-300'>
                  Explore Jobs
                </button>
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
              Customer Care
            </span>
            <h2 className='text-4xl lg:text-5xl font-extralight text-black mb-8 tracking-tight'>
              HOW WE HELP
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
                  <span className='text-white text-2xl'>📞</span>
                </div>
              </div>
              <h3 className='text-xl font-light text-black mb-4 tracking-wide'>
                CUSTOMER SUPPORT
              </h3>
              <p className='text-gray-600 font-light leading-relaxed mb-4'>
                Our dedicated team is available to assist you with any questions or concerns.
              </p>
              <p className='text-sm text-black font-medium'>Mon - Sat: 9AM - 8PM</p>
            </div>

            {/*Sold Copy By Eliteblaze , dev: Prayag kaushik*/}
            <div className='bg-white border border-stone-200 p-8 text-center group hover:shadow-lg transition-shadow duration-300'>
              <div className='mb-6'>
                <div className='w-16 h-16 bg-black mx-auto rounded-full flex items-center justify-center'>
                  <span className='text-white text-2xl'>🚚</span>
                </div>
              </div>
              <h3 className='text-xl font-light text-black mb-4 tracking-wide'>
                FAST DELIVERY
              </h3>
              <p className='text-gray-600 font-light leading-relaxed mb-4'>
                Quick and reliable delivery to your doorstep with real-time tracking.
              </p>
              <p className='text-sm text-black font-medium'>2-5 Business Days</p>
            </div>

            {/*Sold Copy By Eliteblaze , dev: Prayag kaushik*/}
            <div className='bg-white border border-stone-200 p-8 text-center group hover:shadow-lg transition-shadow duration-300'>
              <div className='mb-6'>
                <div className='w-16 h-16 bg-black mx-auto rounded-full flex items-center justify-center'>
                  <span className='text-white text-2xl'>↩️</span>
                </div>
              </div>
              <h3 className='text-xl font-light text-black mb-4 tracking-wide'>
                EASY RETURNS
              </h3>
              <p className='text-gray-600 font-light leading-relaxed mb-4'>
                Hassle-free returns and exchanges within 30 days of purchase.
              </p>
              <p className='text-sm text-black font-medium'>30-Day Policy</p>
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
            NEWSLETTER
          </h2>
          <div className='flex items-center justify-center mb-12'>
            <div className='w-8 h-px bg-white'></div>
            <div className='w-2 h-2 bg-white rounded-full mx-4'></div>
            <div className='w-8 h-px bg-white'></div>
          </div>
          <p className='text-lg font-light text-gray-300 max-w-2xl mx-auto mb-12'>
            Be the first to know about new collections and exclusive offers
          </p>
          
          <div className='bg-gray-900 border border-gray-700 p-12 max-w-2xl mx-auto'>
            <NewLetterBox/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
