import React from 'react'

function Title({ text1, text2 }) {
  return (
    <div className='text-center mb-12'>
      
      {/* Main Title */}
      <h2 className='text-3xl lg:text-4xl font-extralight tracking-tight mb-4'>
        <span className='text-cyan-600'>{text1}</span>
        {text2 && (
          <>
            {' '}
            <span className='text-teal-400 font-light'>{text2}</span>
          </>
        )}
      </h2>

      {/* Decorative Divider */}
      <div className='flex items-center justify-center mb-6'>
        <div className='w-8 h-px bg-cyan-400'></div>
        <div className='w-2 h-2 bg-cyan-400 rounded-full mx-4'></div>
        <div className='w-8 h-px bg-cyan-400'></div>
      </div>
    </div>
  )
}

export default Title
