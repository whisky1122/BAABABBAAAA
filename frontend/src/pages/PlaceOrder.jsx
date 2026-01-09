// Sold Copy By Eliteblaze , dev: Prayag kaushik
import React, { useContext, useState } from 'react'
import CartTotal from '../component/CartTotal'
import razorpay from '../assets/Razorpay.jpg'
import { shopDataContext } from '../context/ShopContext'
import { authDataContext } from '../context/AuthContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Loading from '../component/Loading'

// Sold Copy By Eliteblaze , dev: Prayag kaushik
function PlaceOrder() {
  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  const [method, setMethod] = useState('razorpay')
  const navigate = useNavigate()
  const { cartItem, setCartItem, getCartAmount, delivery_fee, products } = useContext(shopDataContext)
  const { serverUrl } = useContext(authDataContext)
  const [loading, setLoading] = useState(false)

  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    pinCode: '',
    country: '',
    phone: ''
  })

  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  const onChangeHandler = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  const initPay = (order) => {
    // Sold Copy By Eliteblaze , dev: Prayag kaushik
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'ZOYA ELEGANCE Order Payment',
      description: 'Order Payment',
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        try {
          // Sold Copy By Eliteblaze , dev: Prayag kaushik
          const { data } = await axios.post(serverUrl + '/api/order/verifyrazorpay', response, { withCredentials: true })
          if (data) {
            navigate('/order')
            setCartItem({})
            toast.success('Payment successful! Order placed.')
          }
        } catch (error) {
          toast.error('Payment verification failed')
        }
      }
    }
    const rzp = new window.Razorpay(options)
    rzp.open()
  }

  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  const onSubmitHandler = async (e) => {
    // Sold Copy By Eliteblaze , dev: Prayag kaushik
    e.preventDefault()
    setLoading(true)

    try {
      // Sold Copy By Eliteblaze , dev: Prayag kaushik
      let orderItems = []
      for (const productId in cartItem) {
        for (const size in cartItem[productId]) {
          if (cartItem[productId][size] > 0) {
            // Sold Copy By Eliteblaze , dev: Prayag kaushik
            const itemInfo = structuredClone(products.find(p => p._id === productId))
            if (itemInfo) {
              itemInfo.size = size
              itemInfo.quantity = cartItem[productId][size]
              orderItems.push(itemInfo)
            }
          }
        }
      }

      // Sold Copy By Eliteblaze , dev: Prayag kaushik
      const orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee
      }

      // Sold Copy By Eliteblaze , dev: Prayag kaushik
      switch (method) {

        // Sold Copy By Eliteblaze , dev: Prayag kaushik
        case 'razorpay': {
          const resultRazorpay = await axios.post(serverUrl + '/api/order/razorpay', orderData, { withCredentials: true })
          if (resultRazorpay.data) {
            initPay(resultRazorpay.data)
          } else {
            toast.error('Payment initialization failed')
          }
          break
        }

        default:
          break
      }
    } catch (error) {
      console.error(error)
      toast.error('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  return (
    <div className='min-h-screen bg-white text-black overflow-x-hidden relative top-[70px] font-serif'>

      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
      <section className='py-16 px-6 bg-black text-white'>
        <div className='max-w-7xl mx-auto text-center'>
          <span className='text-xs font-light tracking-[0.6em] uppercase text-gray-300 block mb-4'>
            Secure Checkout
          </span>
          {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
          <h1 className='text-5xl lg:text-6xl font-extralight tracking-tight mb-6'>
            PLACE ORDER
          </h1>
          {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
          <div className='flex items-center justify-center mb-6'>
            <div className='w-8 h-px bg-white'></div>
            <div className='w-2 h-2 bg-white rounded-full mx-4'></div>
            <div className='w-8 h-px bg-white'></div>
          </div>
          {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
          <p className='text-lg font-light text-gray-300 max-w-2xl mx-auto'>
            Complete your order with secure payment options
          </p>
        </div>
      </section>

      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
      <section className='py-20 px-6 bg-white'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>

            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <div className='order-2 lg:order-1'>
              <div className='mb-12'>
                <h2 className='text-3xl font-light text-black mb-2 tracking-wide'>
                  DELIVERY INFORMATION
                </h2>
                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                <p className='text-gray-600 font-light'>
                  Please provide your delivery details
                </p>
              </div>

              {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
              <form onSubmit={onSubmitHandler} className='space-y-6'>

                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <input
                    type='text'
                    name='firstName'
                    placeholder='First name'
                    value={formData.firstName}
                    onChange={onChangeHandler}
                    required
                    className='w-full h-12 bg-stone-50 border border-stone-300 px-4 text-black placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-300'
                  />
                  {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                  <input
                    type='text'
                    name='lastName'
                    placeholder='Last name'
                    value={formData.lastName}
                    onChange={onChangeHandler}
                    required
                    className='w-full h-12 bg-stone-50 border border-stone-300 px-4 text-black placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-300'
                  />
                </div>

                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                <input
                  type='email'
                  name='email'
                  placeholder='Email address'
                  value={formData.email}
                  onChange={onChangeHandler}
                  required
                  className='w-full h-12 bg-stone-50 border border-stone-300 px-4 text-black placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-300'
                />

                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                <input
                  type='text'
                  name='street'
                  placeholder='Street address'
                  value={formData.street}
                  onChange={onChangeHandler}
                  required
                  className='w-full h-12 bg-stone-50 border border-stone-300 px-4 text-black placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-300'
                />

                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <input
                    type='text'
                    name='city'
                    placeholder='City'
                    value={formData.city}
                    onChange={onChangeHandler}
                    required
                    className='w-full h-12 bg-stone-50 border border-stone-300 px-4 text-black placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-300'
                  />
                  {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                  <input
                    type='text'
                    name='state'
                    placeholder='State'
                    value={formData.state}
                    onChange={onChangeHandler}
                    required
                    className='w-full h-12 bg-stone-50 border border-stone-300 px-4 text-black placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-300'
                  />
                </div>

                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <input
                    type='text'
                    name='pinCode'
                    placeholder='Pin code'
                    value={formData.pinCode}
                    onChange={onChangeHandler}
                    required
                    className='w-full h-12 bg-stone-50 border border-stone-300 px-4 text-black placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-300'
                  />
                  {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                  <input
                    type='text'
                    name='country'
                    placeholder='Country'
                    value={formData.country}
                    onChange={onChangeHandler}
                    required
                    className='w-full h-12 bg-stone-50 border border-stone-300 px-4 text-black placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-300'
                  />
                </div>

                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                <input
                  type='tel'
                  name='phone'
                  placeholder='Phone number'
                  value={formData.phone}
                  onChange={onChangeHandler}
                  required
                  className='w-full h-12 bg-stone-50 border border-stone-300 px-4 text-black placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-300'
                />

                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                <button
                  type='submit'
                  disabled={loading}
                  className='w-full h-12 bg-black text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 font-medium uppercase tracking-wide flex items-center justify-center gap-3'
                >
                  {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                  {loading ? (
                    <>
                      <Loading color="white" size="w-5 h-5" />
                      Processing...
                    </>
                  ) : (
                    'Place Order'
                  )}
                </button>
              </form>
            </div>

            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <div className='order-1 lg:order-2'>
              <div className='sticky top-24 space-y-8'>

                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                <div className='bg-stone-50 border border-stone-200 p-8'>
                  <CartTotal />
                </div>

                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                <div className='bg-stone-50 border border-stone-200 p-8'>
                  <h3 className='text-2xl font-light text-black mb-6 tracking-wide'>
                    PAYMENT METHOD
                  </h3>

                  {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                  <div className='space-y-4'>

                    {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                    <button
                      type='button'
                      onClick={() => setMethod('razorpay')}
                      className={`w-full p-4 border-2 rounded transition-all duration-300 ${method === 'razorpay'
                        ? 'border-black bg-white'
                        : 'border-stone-300 bg-white hover:border-gray-400'
                        }`}
                    >
                      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                      <div className='flex items-center gap-4'>
                        <div className='w-16 h-10 bg-white border border-stone-200 rounded overflow-hidden'>
                          <img
                            src={razorpay}
                            alt="Razorpay"
                            className='w-full h-full object-contain'
                          />
                        </div>
                        {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                        <span className='font-medium text-black'>Pay with Card / Online</span>
                      </div>
                    </button>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Sold Copy By Eliteblaze , dev: Prayag kaushik
export default PlaceOrder
