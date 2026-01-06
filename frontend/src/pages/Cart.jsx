import React, { useContext, useEffect, useState } from 'react'
import Title from '../component/Title'
import { shopDataContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'
import { RiDeleteBin6Line } from "react-icons/ri"
import CartTotal from '../component/CartTotal'

function Cart() {
  const { products, currency, cartItem, updateQuantity } = useContext(shopDataContext)
  const [cartData, setCartData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const tempData = []
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        if (cartItem[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItem[items][item],
          })
        }
      }
    }
    setCartData(tempData)
  }, [cartItem])

  return (
    <div className='min-h-screen bg-white text-black overflow-x-hidden relative top-[70px] font-serif'>
      
      {/*Sold Copy By Eliteblaze , dev: Prayag kaushik*/}
      <section className='py-16 px-6 bg-black text-white'>
        <div className='max-w-7xl mx-auto text-center'>
          <span className='text-xs font-light tracking-[0.6em] uppercase text-gray-300 block mb-4'>
            Shopping
          </span>
          <h1 className='text-5xl lg:text-6xl font-extralight tracking-tight mb-6'>
            YOUR CART
          </h1>
          <div className='flex items-center justify-center mb-6'>
            <div className='w-8 h-px bg-white'></div>
            <div className='w-2 h-2 bg-white rounded-full mx-4'></div>
            <div className='w-8 h-px bg-white'></div>
          </div>
          <p className='text-lg font-light text-gray-300'>
            {cartData.length} {cartData.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>
      </section>

      <div className='max-w-7xl mx-auto px-6 py-12'>
        
        {cartData.length === 0 ? (
          /*Sold Copy By Eliteblaze , dev: Prayag kaushik*/
          <div className='text-center py-20'>
            <div className='text-gray-400 text-6xl mb-8'>🛍️</div>
            <h2 className='text-2xl font-light text-gray-600 mb-4'>Your cart is empty</h2>
            <p className='text-gray-500 mb-8'>Add some products to get started</p>
            <button 
              className='bg-black text-white px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors duration-300'
              onClick={() => navigate('/collection')}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          /*Sold Copy By Eliteblaze , dev: Prayag kaushik*/
          <div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
            
            {/*Sold Copy By Eliteblaze , dev: Prayag kaushik*/}
            <div className='lg:col-span-2 space-y-6'>
              {cartData.map((item, index) => {
                const productData = products.find(product => product._id === item._id)
                if (!productData) return null

                return (
                  <div key={index} className='bg-stone-50 border border-stone-200 p-6 flex items-center gap-6 relative group hover:shadow-md transition-shadow duration-300'>
                    
                    {/*Sold Copy By Eliteblaze , dev: Prayag kaushik*/}
                    <div className='w-24 h-24 bg-white border border-stone-200 flex-shrink-0'>
                      <img 
                        src={productData.image1} 
                        alt={productData.name}
                        className='w-full h-full object-cover'
                      />
                    </div>

                    {/*Sold Copy By Eliteblaze , dev: Prayag kaushik*/}
                    <div className='flex-1'>
                      <h3 className='text-lg font-light text-black mb-2'>
                        {productData.name}
                      </h3>
                      <div className='flex items-center gap-4 mb-4'>
                        <span className='text-lg font-medium text-black'>
                          {currency}{productData.price}
                        </span>
                        <div className='w-8 h-8 bg-white border border-stone-300 rounded flex items-center justify-center text-sm font-medium'>
                          {item.size}
                        </div>
                      </div>
                    </div>

                    {/*Sold Copy By Eliteblaze , dev: Prayag kaushik*/}
                    <div className='flex items-center gap-4'>
                      <div className='flex items-center'>
                        <span className='text-sm font-light text-gray-600 mr-2'>Qty:</span>
                        <input
                          type='number'
                          min={1}
                          value={item.quantity}
                          onChange={(e) => {
                            const value = parseInt(e.target.value)
                            if (value >= 1) {
                              updateQuantity(item._id, item.size, value)
                            }
                          }}
                          className='w-16 px-2 py-1 text-center border border-stone-300 bg-white text-black focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-300'
                        />
                      </div>
                      
                      {/*Sold Copy By Eliteblaze , dev: Prayag kaushik*/}
                      <button
                        onClick={() => updateQuantity(item._id, item.size, 0)}
                        className='p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded transition-all duration-300'
                      >
                        <RiDeleteBin6Line className='w-5 h-5'/>
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>

            {/*Sold Copy By Eliteblaze , dev: Prayag kaushik*/}
            <div className='lg:col-span-1'>
              <div className='bg-stone-50 border border-stone-200 p-6 sticky top-24'>
                <h3 className='text-xl font-light text-black mb-6 tracking-wide'>
                  ORDER SUMMARY
                </h3>
                
                <div className='mb-6'>
                  <CartTotal/>
                </div>

                <button
                  onClick={() => {
                    if (cartData.length > 0) {
                      navigate("/placeorder")
                    }
                  }}
                  className='w-full bg-black text-white py-4 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
                  disabled={cartData.length === 0}
                >
                  Proceed to Checkout
                </button>

                <button
                  onClick={() => navigate('/collection')}
                  className='w-full mt-3 border border-stone-300 text-black py-4 text-sm font-medium uppercase tracking-wide hover:bg-stone-100 transition-colors duration-300'
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
/*Sold Copy By Eliteblaze , dev: Prayag kaushik*/
export default Cart
