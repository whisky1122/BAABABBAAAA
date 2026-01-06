// Sold Copy By Eliteblaze , dev: Prayag kaushik
import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../component/Nav'
import Sidebar from '../component/Sidebar'
import { authDataContext } from '../context/AuthContext'
import axios from 'axios'

// Sold Copy By Eliteblaze , dev: Prayag kaushik
function Home() {
  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  const navigate = useNavigate()
  const [totalProducts, setTotalProducts] = useState(0)
  const [totalOrders, setTotalOrders] = useState(0)
  const [loading, setLoading] = useState(true)
  const { serverUrl } = useContext(authDataContext)

  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  const fetchCounts = async () => {
    // Sold Copy By Eliteblaze , dev: Prayag kaushik
    setLoading(true)
    try {
      // Sold Copy By Eliteblaze , dev: Prayag kaushik
      const products = await axios.get(`${serverUrl}/api/product/list`, {}, { withCredentials: true })
      setTotalProducts(products.data.length)

      // Sold Copy By Eliteblaze , dev: Prayag kaushik
      const orders = await axios.post(`${serverUrl}/api/order/list`, {}, { withCredentials: true })
      setTotalOrders(orders.data.length)
    } catch (err) {
      console.error("Failed to fetch counts", err)
    } finally {
      setLoading(false)
    }
  }

  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  useEffect(() => {
    fetchCounts()
  }, [])

  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  return (
    <div className='min-h-screen bg-white text-black overflow-x-hidden relative font-serif'>
      <Nav />
      <Sidebar />
      
      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
      <main className='ml-64 pt-[70px]'>
        
        {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
        <section className='py-16 px-6 bg-black text-white'>
          <div className='max-w-7xl mx-auto text-center'>
            <span className='text-xs font-light tracking-[0.6em] uppercase text-gray-300 block mb-4'>
              Admin Dashboard
            </span>
            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <h1 className='text-5xl lg:text-6xl font-extralight tracking-tight mb-6'>
              FROZELIA ADMIN
            </h1>
            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <div className='flex items-center justify-center mb-6'>
              <div className='w-8 h-px bg-white'></div>
              <div className='w-2 h-2 bg-white rounded-full mx-4'></div>
              <div className='w-8 h-px bg-white'></div>
            </div>
            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <p className='text-lg font-light text-gray-300 max-w-2xl mx-auto'>
              Store management and analytics overview
            </p>
          </div>
        </section>

        {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
        <section className='py-20 px-6 bg-white'>
          <div className='max-w-7xl mx-auto'>
            
            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            {loading ? (
              <div className='text-center py-20'>
                <div className='w-12 h-12 border-4 border-stone-300 border-t-black rounded-full animate-spin mx-auto mb-4'></div>
                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                <p className='text-lg font-light text-gray-600'>Loading dashboard data...</p>
              </div>
            ) : (
              <>
                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16'>
                  
                  {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                  <div className='bg-stone-50 border border-stone-200 rounded-lg p-12 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center'>
                    <div className='mb-8'>
                      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                      <div className='w-16 h-16 bg-black rounded-lg flex items-center justify-center mx-auto mb-6'>
                        <span className='text-2xl text-white'>📦</span>
                      </div>
                      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                      <h2 className='text-2xl font-light text-black mb-2 tracking-wide uppercase'>
                        Total Products
                      </h2>
                      <p className='text-gray-600 font-light'>Items in your inventory</p>
                    </div>
                    
                    {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                    <div className='bg-white border border-stone-300 rounded-lg p-8 inline-block shadow-sm'>
                      <span className='text-4xl font-extralight text-black'>
                        {totalProducts.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                  <div className='bg-stone-50 border border-stone-200 rounded-lg p-12 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center'>
                    <div className='mb-8'>
                      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                      <div className='w-16 h-16 bg-black rounded-lg flex items-center justify-center mx-auto mb-6'>
                        <span className='text-2xl text-white'>🛍️</span>
                      </div>
                      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                      <h2 className='text-2xl font-light text-black mb-2 tracking-wide uppercase'>
                        Total Orders
                      </h2>
                      <p className='text-gray-600 font-light'>Customer orders received</p>
                    </div>
                    
                    {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                    <div className='bg-white border border-stone-300 rounded-lg p-8 inline-block shadow-sm'>
                      <span className='text-4xl font-extralight text-black'>
                        {totalOrders.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                <div className='bg-stone-50 border border-stone-200 rounded-lg p-12 mb-16'>
                  <div className='text-center mb-8'>
                    <h3 className='text-2xl font-light text-black mb-2 tracking-wide uppercase'>
                      Quick Actions
                    </h3>
                    {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                    <p className='text-gray-600 font-light'>
                      Access frequently used admin functions
                    </p>
                  </div>

                  {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                  <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto'>
                    
                    {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                    <div className='bg-white border border-stone-300 rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-300'>
                      <div className='w-12 h-12 bg-black rounded-lg flex items-center justify-center mx-auto mb-4'>
                        <span className='text-white text-xl'>➕</span>
                      </div>
                      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                      <h4 className='font-medium text-black mb-2 uppercase tracking-wide text-sm'>
                        Add Product
                      </h4>
                      <p className='text-gray-600 text-sm font-light mb-4'>
                        Create new product listings
                      </p>
                      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                      <button 
                        onClick={() => navigate('/add')}
                        className='bg-black text-white px-4 py-2 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors duration-300'
                      >
                        Go to Add
                      </button>
                    </div>

                    {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                    <div className='bg-white border border-stone-300 rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-300'>
                      <div className='w-12 h-12 bg-black rounded-lg flex items-center justify-center mx-auto mb-4'>
                        <span className='text-white text-xl'>📦</span>
                      </div>
                      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                      <h4 className='font-medium text-black mb-2 uppercase tracking-wide text-sm'>
                        Manage Products
                      </h4>
                      <p className='text-gray-600 text-sm font-light mb-4'>
                        View and edit inventory
                      </p>
                      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                      <button 
                        onClick={() => navigate('/lists')}
                        className='bg-black text-white px-4 py-2 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors duration-300'
                      >
                        View List
                      </button>
                    </div>

                    {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                    <div className='bg-white border border-stone-300 rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-300'>
                      <div className='w-12 h-12 bg-black rounded-lg flex items-center justify-center mx-auto mb-4'>
                        <span className='text-white text-xl'>📋</span>
                      </div>
                      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                      <h4 className='font-medium text-black mb-2 uppercase tracking-wide text-sm'>
                        Process Orders
                      </h4>
                      <p className='text-gray-600 text-sm font-light mb-4'>
                        Manage customer orders
                      </p>
                      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                      <button 
                        onClick={() => navigate('/orders')}
                        className='bg-black text-white px-4 py-2 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors duration-300'
                      >
                        View Orders
                      </button>
                    </div>
                  </div>
                </div>

                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                <div className='text-center bg-stone-50 border border-stone-200 rounded-lg p-8'>
                  <h3 className='text-xl font-light text-black mb-4 tracking-wide uppercase'>
                    Data Management
                  </h3>
                  {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                  <p className='text-gray-600 font-light mb-6'>
                    Refresh your dashboard data to see the latest statistics
                  </p>
                  {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                  <button 
                    onClick={fetchCounts}
                    disabled={loading}
                    className='bg-black text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed px-8 py-3 font-medium uppercase tracking-wide transition-colors duration-300'
                  >
                    {loading ? 'Refreshing Data...' : 'Refresh Dashboard'}
                  </button>
                </div>
              </>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}

// Sold Copy By Eliteblaze , dev: Prayag kaushik
export default Home
