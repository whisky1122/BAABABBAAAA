// Sold Copy By Eliteblaze , dev: Prayag kaushik
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { shopDataContext } from '../context/ShopContext'
import { FaStar, FaStarHalfAlt } from "react-icons/fa"
import RelatedProduct from '../component/RelatedProduct'
import Loading from '../component/Loading'

// Sold Copy By Eliteblaze , dev: Prayag kaushik
function ProductDetail() {
  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  const { productId } = useParams()
  const { products, currency, addtoCart, loading } = useContext(shopDataContext)
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('')
  const [image1, setImage1] = useState('')
  const [image2, setImage2] = useState('')
  const [image3, setImage3] = useState('')
  const [image4, setImage4] = useState('')
  const [size, setSize] = useState('')

  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  const fetchProductData = async () => {
    // Sold Copy By Eliteblaze , dev: Prayag kaushik
    products.map((item) => {
      if (item._id === productId) {
        // Sold Copy By Eliteblaze , dev: Prayag kaushik
        setProductData(item)
        setImage1(item.image1)
        setImage2(item.image2)
        setImage3(item.image3)
        setImage4(item.image4)
        setImage(item.image1)
        return null
      }
    })
  }

  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  useEffect(() => {
    fetchProductData()
  }, [productId, products])

  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  return productData ? (
    <div className='min-h-screen bg-white text-black overflow-x-hidden relative mt-[120px] transition-all duration-300 font-serif'>

      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
      <section className='py-12 md:py-16 px-6 bg-black text-white'>
        <div className='max-w-7xl mx-auto text-center'>
          <span className='text-[10px] md:text-xs font-light tracking-[0.6em] uppercase text-gray-400 block mb-4'>
            Exclusive Collection
          </span>
          <h1 className='text-2xl md:text-3xl lg:text-4xl font-extralight tracking-tight mb-6 leading-tight'>
            {productData.name.toUpperCase()}
          </h1>
          <div className='flex items-center justify-center mb-6'>
            <div className='w-6 h-px bg-white/30'></div>
            <div className='w-1.5 h-1.5 bg-white/50 rounded-full mx-3'></div>
            <div className='w-6 h-px bg-white/30'></div>
          </div>
        </div>
      </section>

      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
      <section className='py-20 px-6 bg-white'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>

            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <div className='space-y-6'>

              {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
              <div className='bg-stone-50 border border-stone-200 rounded-lg overflow-hidden aspect-square'>
                <img
                  src={image}
                  alt={productData.name}
                  className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
                />
              </div>

              {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
              <div className='flex gap-4 justify-center'>
                {[image1, image2, image3, image4].map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setImage(img)}
                    className={`w-20 h-20 bg-stone-100 border-2 rounded-lg overflow-hidden transition-all duration-300 ${image === img ? 'border-black' : 'border-stone-300 hover:border-gray-400'
                      }`}
                  >
                    {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                    <img
                      src={img}
                      alt={`Product view ${index + 1}`}
                      className='w-full h-full object-cover'
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <div className='space-y-8'>

              {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
              <div>
                <h2 className='text-3xl font-light text-black mb-4 tracking-wide uppercase'>
                  {productData.name}
                </h2>

                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                <div className='flex items-center gap-2 mb-4'>
                  {[1, 2, 3, 4].map(star => (
                    <FaStar key={star} className='text-yellow-500 w-5 h-5' />
                  ))}
                  <FaStarHalfAlt className='text-yellow-500 w-5 h-5' />
                  <span className='text-gray-600 ml-2 font-light'>(124 reviews)</span>
                </div>

                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                <div className='bg-white border border-stone-300 rounded-lg p-4 inline-block'>
                  <span className='text-3xl font-extralight text-black'>
                    {currency} {productData.price}
                  </span>
                </div>
              </div>

              {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
              <div className='bg-stone-50 border border-stone-200 rounded-lg p-6'>
                <h3 className='text-lg font-medium text-black mb-3 uppercase tracking-wide'>
                  Description
                </h3>
                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                <p className='text-gray-700 font-light leading-relaxed'>
                  {productData.description} and Stylish, breathable cotton shirt with a modern slim fit. Easy to wash, super comfortable, and designed for effortless style.
                </p>
              </div>

              {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
              <div>
                <h3 className='text-lg font-medium text-black mb-4 uppercase tracking-wide'>
                  Select Size
                </h3>
                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                <div className='flex flex-wrap gap-3'>
                  {productData.sizes.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setSize(item)}
                      className={`px-6 py-3 border-2 font-medium transition-all duration-300 ${item === size
                          ? 'bg-black text-white border-black'
                          : 'bg-white text-black border-stone-300 hover:border-black'
                        }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                {size && (
                  <p className='text-sm text-gray-600 mt-2'>Selected size: {size}</p>
                )}
              </div>

              {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
              <button
                onClick={() => addtoCart(productData._id, size)}
                disabled={!size || loading}
                className='w-full bg-black text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed py-4 px-8 font-medium uppercase tracking-wide transition-colors duration-300 flex items-center justify-center gap-3'
              >
                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                {loading ? (
                  <>
                    <Loading color="white" size="w-5 h-5" />
                    <span>Adding to Cart...</span>
                  </>
                ) : (
                  'Add to Cart'
                )}
              </button>

              {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
              <div className='bg-stone-50 border border-stone-200 rounded-lg p-6'>
                <h3 className='text-lg font-medium text-black mb-4 uppercase tracking-wide'>
                  Product Features
                </h3>
                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                <div className='space-y-3 text-gray-700 font-light'>
                  <div className='flex items-center gap-3'>
                    <span className='text-green-600'>✓</span>
                    <span>100% Original Product</span>
                  </div>
                  {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                  <div className='flex items-center gap-3'>
                    <span className='text-green-600'>✓</span>
                    <span>Cash on delivery available</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <span className='text-green-600'>✓</span>
                    <span>Easy return and exchange policy within 7 days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
      <section className='py-16 px-6 bg-stone-50 border-t border-stone-200'>
        <div className='max-w-7xl mx-auto'>

          {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
          <div className='text-center mb-12'>
            <h3 className='text-2xl font-light text-black mb-4 tracking-wide uppercase'>
              Product Description
            </h3>
            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <div className='flex items-center justify-center mb-6'>
              <div className='w-8 h-px bg-black'></div>
              <div className='w-2 h-2 bg-black rounded-full mx-4'></div>
              <div className='w-8 h-px bg-black'></div>
            </div>
          </div>

          {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
          <div className='bg-white border border-stone-200 rounded-lg p-8 max-w-4xl mx-auto'>
            <p className='text-gray-700 font-light leading-relaxed text-lg text-center'>
              Upgrade your wardrobe with this stylish slim-fit cotton shirt, available now on ZOYA ELEGANCE.
              Crafted from breathable, high-quality fabric, it offers all-day comfort and effortless style.
              Easy to maintain and perfect for any setting, this shirt is a must-have essential for those
              who value both fashion and function.
            </p>
          </div>
        </div>
      </section>

      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
      <RelatedProduct
        category={productData.category}
        subCategory={productData.subCategory}
        currentProductId={productData._id}
      />
    </div>
  ) : <div className='opacity-0'></div>
  // Sold Copy By Eliteblaze , dev: Prayag kaushik
}

// Sold Copy By Eliteblaze , dev: Prayag kaushik
export default ProductDetail
