import React, { useContext, useEffect, useState } from 'react'
import { shopDataContext } from '../context/ShopContext'
import Title from './Title'
import Card from './Card'

function RelatedProduct({ category, subCategory, currentProductId }) {
  const { products } = useContext(shopDataContext)
  const [related, setRelated] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    if (products.length > 0) {
      let productsCopy = products.slice()
      productsCopy = productsCopy.filter((item) => category === item.category)
      productsCopy = productsCopy.filter((item) => subCategory === item.subCategory)
      productsCopy = productsCopy.filter((item) => currentProductId !== item._id)
      setRelated(productsCopy.slice(0, 4))
    }
    setLoading(false)
  }, [products, category, subCategory, currentProductId])

  return (
    <section className='py-20 px-6 bg-white'>
      <div className='max-w-7xl mx-auto'>
        
        {/* Section Header */}
        <div className='text-center mb-16'>
          <span className='text-xs font-light tracking-[0.6em] uppercase text-gray-500 block mb-4'>
            You Might Also Like
          </span>
          <Title text1={'RELATED'} text2={'PRODUCTS'} />
          <div className='flex items-center justify-center mt-6 mb-6'>
            <div className='w-8 h-px bg-black'></div>
            <div className='w-2 h-2 bg-black rounded-full mx-4'></div>
            <div className='w-8 h-px bg-black'></div>
          </div>
          <p className='text-lg font-light text-gray-600 max-w-2xl mx-auto'>
            Discover similar pieces from our {category} {subCategory} collection
          </p>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className='text-center py-16'>
            <div className='w-12 h-12 border-4 border-stone-300 border-t-black rounded-full animate-spin mx-auto mb-4'></div>
            <p className='text-lg font-light text-gray-600'>Finding related products...</p>
          </div>
        ) : related.length === 0 ? (
          // Empty State
          <div className='text-center py-20'>
            <div className='w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6'>
              <span className='text-2xl text-stone-400'>◦</span>
            </div>
            <h3 className='text-2xl font-light text-gray-600 mb-4'>No Related Products</h3>
            <p className='text-gray-500 font-light mb-8 max-w-md mx-auto'>
              We couldn't find similar items in the {category} {subCategory} category right now
            </p>
            <button 
              onClick={() => window.location.href = '/collection'}
              className='bg-black text-white px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors duration-300'
            >
              Browse All Products
            </button>
          </div>
        ) : (
          <>
            {/* Related Products Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12'>
              {related.map((item, index) => (
                <div key={item._id || index} className='group'>
                  <Card 
                    id={item._id} 
                    name={item.name} 
                    price={item.price} 
                    image={item.image1}
                  />
                  
                  {/* Product Category Tag */}
                  <div className='mt-4 text-center'>
                    <span className='text-xs text-gray-500 font-light uppercase tracking-wide bg-stone-100 px-3 py-1 rounded-full'>
                      {item.subCategory}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* View More Products */}
            <div className='text-center mt-16'>
              <div className='inline-flex flex-col items-center gap-4'>
                <div className='w-12 h-px bg-stone-300'></div>
                <button 
                  onClick={() => window.location.href = `/collection?category=${category}&subCategory=${subCategory}`}
                  className='bg-transparent border-2 border-black text-black px-12 py-4 text-sm font-medium uppercase tracking-wide hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105'
                >
                  View More {subCategory}
                </button>
                <p className='text-xs text-gray-500 font-light'>
                  Explore the complete {category} collection
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default RelatedProduct
