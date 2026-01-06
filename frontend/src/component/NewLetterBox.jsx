import React, { useState } from 'react'

function NewLetterBox() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      // Here you can add API call to subscribe user
      setTimeout(() => {
        setIsSubmitted(false)
        setEmail('')
      }, 3000)
    }
  }

  return (
    <div className='w-full py-12'>
      <div className='max-w-2xl mx-auto text-center'>
        
        {!isSubmitted ? (
          <>
            {/* Newsletter Header */}
            <div className='mb-8'>
              <h3 className='text-2xl lg:text-3xl font-light text-white mb-4 tracking-wide'>
                SUBSCRIBE & SAVE 20%
              </h3>
              <p className='text-lg font-light text-gray-300 leading-relaxed'>
                Join our exclusive circle for early access to collections, special offers, and insider updates
              </p>
            </div>

            {/* Subscription Form */}
            <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row gap-4 max-w-lg mx-auto'>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your email address'
                className='flex-1 px-6 py-4 bg-white border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all duration-300'
                required
              />
              <button
                type='submit'
                className='bg-white text-black px-8 py-4 text-sm font-medium uppercase tracking-wide hover:bg-gray-200 transition-colors duration-300 whitespace-nowrap'
              >
                Subscribe
              </button>
            </form>

            {/* Privacy Note */}
            <p className='text-xs text-gray-400 mt-6 max-w-md mx-auto leading-relaxed'>
              By subscribing, you agree to receive marketing emails. You can unsubscribe at any time. 
              <span className='underline cursor-pointer hover:text-gray-300'> Privacy Policy</span>
            </p>
          </>
        ) : (
          // Success Message
          <div className='py-8'>
            <div className='text-6xl mb-6'>✓</div>
            <h3 className='text-2xl font-light text-white mb-4'>
              Welcome to CALY COURTURE
            </h3>
            <p className='text-lg text-gray-300'>
              Thank you for subscribing! Your 20% discount code is on its way to your inbox.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default NewLetterBox
