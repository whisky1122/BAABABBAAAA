import React from 'react'
import { RiExchangeFundsLine } from "react-icons/ri"
import { TbRosetteDiscountCheckFilled } from "react-icons/tb"
import { BiSupport } from "react-icons/bi"

function OurPolicy() {
  return (
    <div className='w-full py-16'>
      
      {/* Policy Features Grid */}
      <div className='max-w-7xl mx-auto px-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
          
          {/* Easy Exchange Policy */}
          <div className='text-center group hover:bg-stone-50 p-8 rounded-lg transition-colors duration-300'>
            <div className='mb-6 flex justify-center'>
              <div className='w-16 h-16 bg-black rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-300'>
                <RiExchangeFundsLine className='w-8 h-8 text-white'/>
              </div>
            </div>
            <h3 className='text-xl font-light text-black mb-4 tracking-wide'>
              EASY EXCHANGE
            </h3>
            <p className='text-gray-600 font-light leading-relaxed'>
              Exchange made easy with our quick, simple, and customer-friendly process
            </p>
          </div>

          {/* 7 Days Return Policy */}
          <div className='text-center group hover:bg-stone-50 p-8 rounded-lg transition-colors duration-300'>
            <div className='mb-6 flex justify-center'>
              <div className='w-16 h-16 bg-black rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-300'>
                <TbRosetteDiscountCheckFilled className='w-8 h-8 text-white'/>
              </div>
            </div>
            <h3 className='text-xl font-light text-black mb-4 tracking-wide'>
              7 DAYS RETURN
            </h3>
            <p className='text-gray-600 font-light leading-relaxed'>
              Shop with confidence knowing you have 7 days for easy returns and exchanges
            </p>
          </div>

          {/* Best Customer Support */}
          <div className='text-center group hover:bg-stone-50 p-8 rounded-lg transition-colors duration-300'>
            <div className='mb-6 flex justify-center'>
              <div className='w-16 h-16 bg-black rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-300'>
                <BiSupport className='w-8 h-8 text-white'/>
              </div>
            </div>
            <h3 className='text-xl font-light text-black mb-4 tracking-wide'>
              CUSTOMER SUPPORT
            </h3>
            <p className='text-gray-600 font-light leading-relaxed'>
              Dedicated support team committed to your satisfaction and peace of mind
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurPolicy
