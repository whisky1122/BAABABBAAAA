import React, { useContext, useEffect, useState } from 'react'
import { shopDataContext } from '../context/ShopContext'
import Card from './Card'

function LatestCollection() {
  const { products } = useContext(shopDataContext)
  const [latestProducts, setLatestProducts] = useState([])

  useEffect(() => {
    if (Array.isArray(products)) {
      setLatestProducts(products.slice(0, 8))
    } else {
      setLatestProducts([])
    }
  }, [products])

  return (
    <div className='w-full py-20 font-serif'>
      
      {/* GUCCI Section Header */}
      <div className='text-center mb-16 px-8'>
        <h2 className='text-4xl lg:text-5xl font-normal text-black mb-6 tracking-wide'>
          New This Week
        </h2>
        <p className='text-base font-light text-gray-600 max-w-2xl mx-auto leading-relaxed'>
          Celebrating creativity, Italian craftsmanship and love
        </p>
      </div>
      
      {/* Products Grid */}
      <div className='max-w-7xl mx-auto px-8'>
        {latestProducts.length === 0 ? (
          // GUCCI Empty State
          <div className='text-center py-20'>
            <h3 className='text-2xl font-normal text-black mb-4'>Coming Soon</h3>
            <p className='text-base font-light text-gray-600'>New arrivals will be available shortly</p>
          </div>
        ) : (
          // GUCCI Products Grid
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12'>
            {latestProducts.map((item, index) => (
              <div key={item._id || index} className='group'>
                <Card 
                  id={item._id} 
                  name={item.name} 
                  price={item.price} 
                  image={item.image1}
                />
              </div>
            ))}
          </div>
        )}
        
        {/* GUCCI View All Button */}
        {latestProducts.length > 0 && (
          <div className='text-center mt-16'>
            <button 
              className='bg-black text-white px-12 py-4 text-sm font-normal uppercase tracking-widest hover:bg-gray-800 transition-colors duration-200'
              onClick={() => window.location.href = '/collection'}
            >
              SHOP ALL
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default LatestCollection
