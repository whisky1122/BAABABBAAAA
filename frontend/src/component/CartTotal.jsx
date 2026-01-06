import React, { useContext } from 'react'
import { shopDataContext } from '../context/ShopContext'
import Title from './Title'

function CartTotal() {
  const { currency, delivery_fee, getCartAmount } = useContext(shopDataContext)
  
  const subtotal = getCartAmount()
  const total = subtotal === 0 ? 0 : subtotal + delivery_fee

  return (
    <div className='w-full'>
      
      {/* Cart Totals Header */}
      <div className='mb-6'>
        <Title text1={'CART'} text2={'TOTALS'} />
      </div>

      {/* Cart Summary Card */}
      <div className='bg-stone-50 border border-stone-200 rounded-lg overflow-hidden shadow-lg'>
        
        {/* Subtotal */}
        <div className='flex justify-between items-center p-6 border-b border-stone-200'>
          <span className='text-lg font-medium text-gray-700 uppercase tracking-wide'>
            Subtotal
          </span>
          <span className='text-lg font-light text-black'>
            {currency} {subtotal.toFixed(2)}
          </span>
        </div>

        {/* Shipping Fee */}
        <div className='flex justify-between items-center p-6 border-b border-stone-200'>
          <span className='text-lg font-medium text-gray-700 uppercase tracking-wide'>
            Shipping Fee
          </span>
          <span className='text-lg font-light text-black'>
            {currency} {delivery_fee.toFixed(2)}
          </span>
        </div>

        {/* Total */}
        <div className='bg-white border-t-2 border-black p-6'>
          <div className='flex justify-between items-center'>
            <span className='text-xl font-medium text-black uppercase tracking-wide'>
              Total
            </span>
            <span className='text-2xl font-light text-black'>
              {currency} {total.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Additional Info */}
        <div className='bg-stone-100 p-4 text-center'>
          <p className='text-xs text-gray-600 font-light uppercase tracking-wider'>
            {subtotal === 0 ? 'Your cart is empty' : 'Taxes calculated at checkout'}
          </p>
        </div>
      </div>

      {/* Luxury Decorative Element */}
      <div className='flex items-center justify-center mt-6'>
        <div className='w-8 h-px bg-stone-300'></div>
        <div className='w-2 h-2 bg-stone-300 rounded-full mx-4'></div>
        <div className='w-8 h-px bg-stone-300'></div>
      </div>
    </div>
  )
}

export default CartTotal
