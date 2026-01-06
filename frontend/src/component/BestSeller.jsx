import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { shopDataContext } from '../context/ShopContext'
import Card from './Card'

function BestSeller() {
  const { products } = useContext(shopDataContext)
  const [bestSeller, setBestSeller] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    if (Array.isArray(products)) {
      const filterProduct = products.filter((item) => item.bestseller)
      setBestSeller(filterProduct.slice(0, 4))
    } else {
      setBestSeller([])
    }
  }, [products])

  return (
    <section className='py-20 px-6 bg-white'>
      <div className='max-w-7xl mx-auto'>
        
        {/* Section Header */}
        <div className='text-center mb-16'>
          <span className='text-xs font-light tracking-[0.6em] uppercase text-gray-500 block mb-4'>
            Featured Collection
          </span>
          <h2 className='text-4xl lg:text-5xl font-extralight tracking-tight text-black mb-6'>
            BESTSELLERS
          </h2>
          <div className='flex items-center justify-center mb-6'>
            <div className='w-8 h-px bg-black'></div>
            <div className='w-2 h-2 bg-black rounded-full mx-4'></div>
            <div className='w-8 h-px bg-black'></div>
          </div>
          <p className='text-lg font-light text-gray-600 max-w-2xl mx-auto'>
            Our most coveted pieces, loved by customers worldwide
          </p>
        </div>

        {/* Products Grid */}
        {bestSeller.length === 0 ? (
          // Empty State
          <div className='text-center py-20'>
            <div className='w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6'>
              <span className='text-2xl text-stone-400'>★</span>
            </div>
            <h3 className='text-2xl font-light text-gray-600 mb-4'>No Bestsellers Available</h3>
            <p className='text-gray-500 font-light mb-8 max-w-md mx-auto'>
              Our most popular items will appear here once customers start making purchases
            </p>
            <button 
              onClick={() => navigate('/collection')}
              className='bg-black text-white px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors duration-300'
            >
              Browse All Products
            </button>
          </div>
        ) : (
          <>
            {/* Bestseller Products Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12'>
              {bestSeller.map((item, index) => (
                <div key={item._id || index} className='group relative'>
                  
                  {/* Bestseller Badge */}
                  <div className='absolute -top-3 left-1/2 transform -translate-x-1/2 z-10'>
                    <div className='bg-black text-white text-xs font-medium px-4 py-1 rounded-full uppercase tracking-wider shadow-lg'>
                      <span className='flex items-center gap-1'>
                        <span>★</span>
                        <span>Bestseller</span>
                      </span>
                    </div>
                  </div>

                  {/* Product Card */}
                  <div className='mt-4'>
                    <Card 
                      id={item._id} 
                      name={item.name} 
                      price={item.price} 
                      image={item.image1}
                    />
                  </div>

                  {/* Additional Product Info */}
                  <div className='mt-4 text-center'>
                    <p className='text-xs text-gray-500 font-light uppercase tracking-wide'>
                      Customer Favorite
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Best Sellers Button */}
            <div className='text-center mt-16'>
              <div className='inline-flex flex-col items-center gap-4'>
                <div className='w-12 h-px bg-stone-300'></div>
                <button 
                  onClick={() => navigate('/collection')}
                  className='bg-transparent border-2 border-black text-black px-12 py-4 text-sm font-medium uppercase tracking-wide hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105'
                >
                  View All Bestsellers
                </button>
                <p className='text-xs text-gray-500 font-light'>
                  Discover more customer favorites
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default BestSeller
