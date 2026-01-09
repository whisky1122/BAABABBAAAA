// Sold Copy By Eliteblaze , dev: Prayag kaushik
import React, { useContext, useEffect, useState } from 'react'
import Nav from '../component/Nav'
import Sidebar from '../component/Sidebar'
import { authDataContext } from '../context/AuthContext'
import axios from 'axios'
import { toast } from 'react-toastify'

// Sold Copy By Eliteblaze , dev: Prayag kaushik
function Lists() {
  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  const { serverUrl } = useContext(authDataContext)

  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  const fetchList = async () => {
    // Sold Copy By Eliteblaze , dev: Prayag kaushik
    setLoading(true)
    try {
      // Sold Copy By Eliteblaze , dev: Prayag kaushik
      const result = await axios.get(serverUrl + "/api/product/list", { withCredentials: true })
      setList(result.data)
      console.log(result.data)
    } catch (error) {
      console.log(error)
      toast.error("Failed to load products")
    } finally {
      setLoading(false)
    }
  }

  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  const removeList = async (id) => {
    // Sold Copy By Eliteblaze , dev: Prayag kaushik
    if (!window.confirm('Are you sure you want to delete this product?')) {
      return
    }

    try {
      // Sold Copy By Eliteblaze , dev: Prayag kaushik
      const result = await axios.post(`${serverUrl}/api/product/remove/${id}`, {}, { withCredentials: true })
      if (result.data) {
        toast.success("Product removed successfully")
        fetchList()
      } else {
        console.log("Failed to remove Product")
        toast.error("Failed to remove product")
      }
    } catch (error) {
      console.log(error)
      toast.error("Error removing product")
    }
  }

  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  useEffect(() => {
    fetchList()
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
              Product Management
            </span>
            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <h1 className='text-3xl sm:text-5xl lg:text-6xl font-extralight tracking-tight mb-6'>
              PRODUCT LIST
            </h1>
            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <div className='flex items-center justify-center mb-6'>
              <div className='w-8 h-px bg-white'></div>
              <div className='w-2 h-2 bg-white rounded-full mx-4'></div>
              <div className='w-8 h-px bg-white'></div>
            </div>
            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <p className='text-base sm:text-lg font-light text-gray-300 max-w-2xl mx-auto px-4'>
              Manage your luxury product inventory
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
                <p className='text-lg font-light text-gray-600'>Loading products...</p>
              </div>
            ) : list?.length > 0 ? (
              <div className='space-y-6'>
                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                {list.map((item, index) => (
                  <div key={item._id || index} className='bg-stone-50 border border-stone-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'>

                    {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                    <div className='flex flex-col lg:flex-row'>

                      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                      <div className='lg:w-80 h-64 lg:h-auto flex-shrink-0'>
                        <img
                          src={item.image1}
                          alt={item.name}
                          className='w-full h-full object-cover'
                        />
                      </div>

                      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                      <div className='flex-1 p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between'>

                        {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                        <div className='flex-1'>
                          <h2 className='text-2xl font-light text-black mb-3 tracking-wide uppercase'>
                            {item.name}
                          </h2>

                          {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                          <div className='space-y-2 mb-4'>
                            <div className='flex items-center gap-4'>
                              <span className='text-sm font-medium text-gray-500 uppercase tracking-wide'>
                                Category:
                              </span>
                              {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                              <span className='text-lg font-light text-black'>
                                {item.category}
                              </span>
                            </div>

                            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                            {item.subCategory && (
                              <div className='flex items-center gap-4'>
                                <span className='text-sm font-medium text-gray-500 uppercase tracking-wide'>
                                  Type:
                                </span>
                                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                                <span className='text-lg font-light text-black'>
                                  {item.subCategory}
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                          <div className='bg-white border border-stone-300 rounded-lg p-4 inline-block'>
                            <span className='text-2xl font-light text-black'>
                              &#8377;{item.price}
                            </span>
                          </div>
                        </div>

                        {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                        <div className='mt-6 lg:mt-0 lg:ml-8'>
                          <button
                            onClick={() => removeList(item._id)}
                            className='bg-red-600 text-white hover:bg-red-700 px-6 py-3 font-medium uppercase tracking-wide transition-colors duration-300 flex items-center gap-2'
                          >
                            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                            <span>🗑️</span>
                            <span>Delete</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className='text-center py-20'>
                <div className='text-6xl mb-8'>📦</div>
                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                <h2 className='text-2xl font-light text-gray-600 mb-4'>No products available</h2>
                <p className='text-gray-500 mb-8'>Start by adding your first product to the inventory</p>
                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                <button
                  onClick={() => window.location.href = '/add'}
                  className='bg-black text-white px-8 py-3 font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors duration-300'
                >
                  Add First Product
                </button>
              </div>
            )}

            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            {list?.length > 0 && (
              <div className='text-center mt-16 bg-stone-50 border border-stone-200 rounded-lg p-8'>
                <h3 className='text-xl font-light text-black mb-4 tracking-wide uppercase'>
                  Product Management
                </h3>
                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                <p className='text-gray-600 font-light mb-6'>
                  Refresh your product list to see the latest updates
                </p>
                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                <button
                  onClick={fetchList}
                  disabled={loading}
                  className='bg-black text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed px-8 py-3 font-medium uppercase tracking-wide transition-colors duration-300'
                >
                  {loading ? 'Refreshing...' : 'Refresh Products'}
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
export default Lists
