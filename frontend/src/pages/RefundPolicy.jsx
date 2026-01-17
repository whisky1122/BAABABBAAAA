import React from 'react'

function RefundPolicy() {
  return (
    <div className='pt-24 pb-12 px-4 sm:px-12 max-w-4xl mx-auto font-serif'>
      <h1 className='text-3xl md:text-4xl text-center mb-8 tracking-wider uppercase'>Refund & Return Policy</h1>
      
      <div className='space-y-6 text-gray-700 leading-relaxed font-light'>
        <p>
          At Zoya Elegance, we strive to ensure your complete satisfaction with every purchase. Given the exclusive nature of our collections, please review our policy below:
        </p>

        <h2 className='text-xl text-black mt-8 mb-2'>1. Returns</h2>
        <p>
          We accept returns within 7 days of delivery. The item must be unused, unwashed, and in its original condition with all tags intact. Customized or altered items are not eligible for return.
        </p>

        <h2 className='text-xl text-black mt-8 mb-2'>2. Refunds</h2>
        <p>
          Once your return is received and inspected, we will notify you of the approval or rejection of your refund. If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within 7-10 business days.
        </p>

        <h2 className='text-xl text-black mt-8 mb-2'>3. Exchanges</h2>
        <p>
          We only replace items if they are defective or damaged. If you need to exchange an item for the same article, please contact our support team.
        </p>

        <h2 className='text-xl text-black mt-8 mb-2'>4. Contact Us</h2>
        <p>
          For any questions related to refunds and returns, please reach out to us via our 'Contact Us' page.
        </p>
      </div>
    </div>
  )
}

export default RefundPolicy
