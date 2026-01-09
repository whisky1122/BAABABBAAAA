// Sold Copy By Eliteblaze , dev: Prayag kaushik
import React, { useContext, useState, useEffect } from 'react'
import Nav from '../component/Nav'
import Sidebar from '../component/Sidebar'
import { authDataContext } from '../context/AuthContext'
import axios from 'axios'
import { SiEbox } from "react-icons/si"
import { toast } from 'react-toastify'

// Sold Copy By Eliteblaze , dev: Prayag kaushik
function Orders() {
  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  const [orders, setOrders] = useState([])
  const { serverUrl } = useContext(authDataContext)
  const [loading, setLoading] = useState(true)

  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  const fetchAllOrders = async () => {
    setLoading(true)
    try {
      const result = await axios.get(serverUrl + '/api/order/list', { withCredentials: true })
      setOrders(result.data.reverse())
    } catch (error) {
      console.log("Fetch orders error:", error.response?.data || error.message)
      toast.error(error.response?.data?.message || "Failed to load orders")
    } finally {
      setLoading(false)
    }
  }

  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  const statusHandler = async (e, orderId) => {
    try {
      // Sold Copy By Eliteblaze , dev: Prayag kaushik
      const result = await axios.post(serverUrl + '/api/order/status', { orderId, status: e.target.value }, { withCredentials: true })
      if (result.data) {
        await fetchAllOrders()
        toast.success("Order status updated successfully")
      }
    } catch (error) {
      console.log(error)
      toast.error("Failed to update order status")
    }
  }

  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  useEffect(() => {
    fetchAllOrders()
  }, [])

  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  return (
    <div className='min-h-screen bg-white text-black overflow-x-hidden relative font-serif'>
      <Nav />
      <Sidebar />

      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
      <main className='lg:ml-64 pt-[70px]'>

        {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
        <section className='py-12 sm:py-16 px-4 sm:px-6 bg-black text-white'>
          <div className='max-w-7xl mx-auto text-center'>
            <span className='text-xs font-light tracking-[0.4em] sm:tracking-[0.6em] uppercase text-gray-300 block mb-4'>
              Order Management
            </span>
            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <h1 className='text-3xl sm:text-5xl lg:text-6xl font-extralight tracking-tight mb-6'>
              ALL ORDERS
            </h1>
            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <div className='flex items-center justify-center mb-6'>
              <div className='w-8 h-px bg-white'></div>
              <div className='w-2 h-2 bg-white rounded-full mx-4'></div>
              <div className='w-8 h-px bg-white'></div>
            </div>
            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <p className='text-base sm:text-lg font-light text-gray-300 max-w-2xl mx-auto px-4'>
              Manage and track all customer orders
            </p>
          </div>
        </section>

        {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
        <section className='py-12 sm:py-20 px-4 sm:px-6 bg-white'>
          <div className='max-w-7xl mx-auto'>

            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            {loading ? (
              <div className='text-center py-20'>
                <div className='w-12 h-12 border-4 border-stone-300 border-t-black rounded-full animate-spin mx-auto mb-4'></div>
                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                <p className='text-lg font-light text-gray-600'>Loading orders...</p>
              </div>
            ) : orders.length > 0 ? (
              <div className='space-y-8'>
                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                {orders.map((order, index) => (
                  <div key={order._id || index} className='bg-stone-50 border border-stone-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'>

                    {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                    <div className='p-8'>
                      <div className='flex flex-col lg:flex-row gap-8'>

                        {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                        <div className='flex-shrink-0'>
                          <div className='w-16 h-16 bg-black rounded-lg flex items-center justify-center'>
                            <SiEbox className='w-8 h-8 text-white' />
                          </div>
                        </div>

                        {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                        <div className='flex-1'>
                          <h3 className='text-xl font-light text-black mb-4 tracking-wide uppercase'>
                            Order Items
                          </h3>
                          {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                          <div className='space-y-2 mb-6'>
                            {order.items.map((item, idx) => (
                              <div key={idx} className='flex items-center gap-2 text-gray-700'>
                                <span className='font-medium uppercase text-sm'>{item.name}</span>
                                <span className='text-gray-500'>×</span>
                                <span className='font-medium'>{item.quantity}</span>
                                <span className='text-xs bg-stone-200 px-2 py-1 rounded'>{item.size}</span>
                                {idx !== order.items.length - 1 && <span className='text-gray-400'>,</span>}
                              </div>
                            ))}
                          </div>

                          {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                          <div className='bg-white border border-stone-200 p-4 rounded-lg'>
                            <h4 className='font-medium text-black mb-2 uppercase tracking-wide text-sm'>
                              Delivery Address
                            </h4>
                            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                            <div className='text-sm text-gray-600 space-y-1'>
                              <p className='font-medium'>{order.address.firstName} {order.address.lastName}</p>
                              <p>{order.address.street}</p>
                              <p>{order.address.city}, {order.address.state} {order.address.pinCode}</p>
                              <p>{order.address.country}</p>
                              <p className='font-medium pt-1'>📞 {order.address.phone}</p>
                            </div>
                          </div>
                        </div>

                        {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                        <div className='lg:w-80'>
                          <div className='bg-white border border-stone-200 p-6 rounded-lg space-y-4'>

                            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                            <div className='text-sm space-y-2'>
                              <div className='flex justify-between'>
                                <span className='text-gray-600'>Items:</span>
                                <span className='font-medium'>{order.items.length}</span>
                              </div>
                              {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                              <div className='flex justify-between'>
                                <span className='text-gray-600'>Payment:</span>
                                <span className='font-medium'>{order.paymentMethod}</span>
                              </div>
                              <div className='flex justify-between'>
                                <span className='text-gray-600'>Status:</span>
                                <span className={`font-medium ${order.payment ? 'text-green-600' : 'text-orange-600'}`}>
                                  {order.payment ? 'Paid' : 'Pending'}
                                </span>
                              </div>
                              {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                              <div className='flex justify-between'>
                                <span className='text-gray-600'>Date:</span>
                                <span className='font-medium'>{new Date(order.date).toLocaleDateString()}</span>
                              </div>
                            </div>

                            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                            <div className='border-t border-stone-200 pt-4'>
                              <div className='flex justify-between items-center'>
                                <span className='text-lg font-light text-gray-700'>Total:</span>
                                <span className='text-2xl font-light text-black'>&#8377;{order.amount}</span>
                              </div>
                            </div>

                            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                            <div className='border-t border-stone-200 pt-4'>
                              <label className='block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide'>
                                Order Status
                              </label>
                              {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                              <select
                                value={order.status}
                                onChange={(e) => statusHandler(e, order._id)}
                                className='w-full bg-white border border-stone-300 px-4 py-3 text-black focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-300'
                              >
                                <option value="Order Placed">Order Placed</option>
                                <option value="Packing">Packing</option>
                                <option value="Shipped">Shipped</option>
                                <option value="Out for delivery">Out for delivery</option>
                                <option value="Delivered">Delivered</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className='text-center py-20'>
                <div className='text-6xl mb-8'>📋</div>
                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                <h2 className='text-2xl font-light text-gray-600 mb-4'>No orders yet</h2>
                <p className='text-gray-500'>Orders will appear here when customers start purchasing</p>
              </div>
            )}

            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            {orders.length > 0 && (
              <div className='text-center mt-16 bg-stone-50 border border-stone-200 rounded-lg p-8'>
                <h3 className='text-xl font-light text-black mb-4 tracking-wide uppercase'>
                  Order Management
                </h3>
                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                <p className='text-gray-600 font-light mb-6'>
                  Refresh your orders list to see the latest updates
                </p>
                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                <button
                  onClick={fetchAllOrders}
                  disabled={loading}
                  className='bg-black text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed px-8 py-3 font-medium uppercase tracking-wide transition-colors duration-300'
                >
                  {loading ? 'Refreshing...' : 'Refresh Orders'}
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}

// Sold Copy By Eliteblaze , dev: Prayag kaushik
export default Orders
