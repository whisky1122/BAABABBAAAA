// Sold Copy By Eliteblaze , dev: Prayag kaushik
import React, { useContext, useEffect, useState } from 'react'
import Title from '../component/Title'
import { shopDataContext } from '../context/ShopContext'
import { authDataContext } from '../context/AuthContext'
import axios from 'axios'
import { userDataContext } from '../context/UserContext'

// Sold Copy By Eliteblaze , dev: Prayag kaushik
function Order() {
  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  const [orderData, setOrderData] = useState([])
  const { currency } = useContext(shopDataContext)
  const { serverUrl } = useContext(authDataContext)

  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  const loadOrderData = async () => {
    try {
      // Sold Copy By Eliteblaze , dev: Prayag kaushik
      const result = await axios.post(serverUrl + '/api/order/userorder', {}, { withCredentials: true })
      if (result.data) {
        // Sold Copy By Eliteblaze , dev: Prayag kaushik
        let allOrdersItem = []
        result.data.forEach(order => {
          order.items.forEach(item => {
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date
            allOrdersItem.push(item)
          })
        })
        setOrderData(allOrdersItem.reverse())
      }
    } catch (error) {
      console.log(error)
    }
  }

  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  const { userData } = useContext(userDataContext)

  useEffect(() => {
    if (userData) {
      loadOrderData()
    }
  }, [userData])

  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  return (
    <div className='min-h-screen bg-white text-black overflow-x-hidden relative top-[70px] font-serif'>

      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
      <section className='py-16 px-6 bg-black text-white'>
        <div className='max-w-7xl mx-auto text-center'>
          <span className='text-xs font-light tracking-[0.6em] uppercase text-gray-300 block mb-4'>
            Order History
          </span>
          {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
          <h1 className='text-5xl lg:text-6xl font-extralight tracking-tight mb-6'>
            MY ORDERS
          </h1>
          {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
          <div className='flex items-center justify-center mb-6'>
            <div className='w-8 h-px bg-white'></div>
            <div className='w-2 h-2 bg-white rounded-full mx-4'></div>
            <div className='w-8 h-px bg-white'></div>
          </div>
          {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
          <p className='text-lg font-light text-gray-300 max-w-2xl mx-auto'>
            Track your orders and view purchase history
          </p>
        </div>
      </section>

      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
      <section className='py-20 px-6 bg-white'>
        <div className='max-w-7xl mx-auto'>

          {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
          {orderData.length === 0 ? (
            <div className='text-center py-20'>
              <div className='text-gray-400 text-6xl mb-8'>📦</div>
              {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
              <h2 className='text-2xl font-light text-gray-600 mb-4'>No orders yet</h2>
              <p className='text-gray-500 mb-8'>Start shopping to see your orders here</p>
              {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
              <button
                className='bg-black text-white px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors duration-300'
                onClick={() => window.location.href = '/collection'}
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <div className='space-y-6'>
              {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
              {orderData.map((item, index) => (
                <div key={index} className='bg-stone-50 border border-stone-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300'>

                  {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                  <div className='p-6'>
                    <div className='flex flex-col lg:flex-row lg:items-center gap-6'>

                      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                      <div className='flex-shrink-0'>
                        <div className='w-32 h-32 bg-white border border-stone-200 rounded-lg overflow-hidden'>
                          <img
                            src={item.image1}
                            alt={item.name}
                            className='w-full h-full object-cover'
                          />
                        </div>
                      </div>

                      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                      <div className='flex-1'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

                          {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                          <div className='space-y-2'>
                            <h3 className='text-xl font-light text-black mb-3'>
                              {item.name}
                            </h3>
                            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                            <div className='space-y-1 text-sm'>
                              <p className='text-gray-600'>
                                <span className='font-medium text-black'>Price:</span> {currency}{item.price}
                              </p>
                              {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                              <p className='text-gray-600'>
                                <span className='font-medium text-black'>Quantity:</span> {item.quantity}
                              </p>
                              <p className='text-gray-600'>
                                <span className='font-medium text-black'>Size:</span> {item.size}
                              </p>
                            </div>
                          </div>

                          {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                          <div className='space-y-2'>
                            <div className='space-y-1 text-sm'>
                              {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                              <p className='text-gray-600'>
                                <span className='font-medium text-black'>Order Date:</span> {' '}
                                {new Date(item.date).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric'
                                })}
                              </p>
                              {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                              <p className='text-gray-600'>
                                <span className='font-medium text-black'>Payment:</span> {item.paymentMethod}
                              </p>
                              {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                              <p className='text-gray-600'>
                                <span className='font-medium text-black'>Payment Status:</span> {' '}
                                <span className={`font-medium ${item.payment ? 'text-green-600' : 'text-orange-600'
                                  }`}>
                                  {item.payment ? 'Paid' : 'Pending'}
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                      <div className='flex flex-col items-center lg:items-end gap-4'>

                        {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                        <div className='flex items-center gap-2 bg-white border border-stone-300 px-4 py-2 rounded-full'>
                          <div className={`w-2 h-2 rounded-full ${item.status === 'Delivered' ? 'bg-green-500' :
                              item.status === 'Shipped' ? 'bg-blue-500' :
                                item.status === 'Out for delivery' ? 'bg-purple-500' :
                                  item.status === 'Packing' ? 'bg-yellow-500' :
                                    'bg-gray-500'
                            }`}></div>
                          {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                          <span className='text-sm font-medium text-black'>
                            {item.status}
                          </span>
                        </div>

                        {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                        <button
                          onClick={loadOrderData}
                          className='bg-black text-white px-6 py-2 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors duration-300 rounded'
                        >
                          Track Order
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
      {orderData.length > 0 && (
        <section className='py-16 px-6 bg-stone-50'>
          <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>

              {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
              <div className='bg-white border border-stone-200 p-6 text-center'>
                <div className='text-3xl font-light text-black mb-2'>
                  {orderData.length}
                </div>
                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                <p className='text-sm font-medium uppercase tracking-wide text-gray-600'>
                  Total Orders
                </p>
              </div>

              {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
              <div className='bg-white border border-stone-200 p-6 text-center'>
                <div className='text-3xl font-light text-black mb-2'>
                  {currency}{orderData.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}
                </div>
                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                <p className='text-sm font-medium uppercase tracking-wide text-gray-600'>
                  Total Spent
                </p>
              </div>

              {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
              <div className='bg-white border border-stone-200 p-6 text-center'>
                <div className='text-3xl font-light text-black mb-2'>
                  {orderData.filter(item => item.status === 'Delivered').length}
                </div>
                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                <p className='text-sm font-medium uppercase tracking-wide text-gray-600'>
                  Delivered
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

// Sold Copy By Eliteblaze , dev: Prayag kaushik
export default Order
