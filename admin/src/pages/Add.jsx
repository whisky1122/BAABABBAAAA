// Sold Copy By Eliteblaze , dev: Prayag kaushik
import React, { useContext, useState } from 'react'
import Nav from '../component/Nav'
import Sidebar from '../component/Sidebar'
import upload from '../assets/upload image.jpg'
import { authDataContext } from '../context/AuthContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import Loading from '../component/Loading'

// Sold Copy By Eliteblaze , dev: Prayag kaushik
function Add() {
  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("Men")
  const [price, setPrice] = useState("")
  const [subCategory, setSubCategory] = useState("TopWear")
  const [bestseller, setBestSeller] = useState(false)
  const [sizes, setSizes] = useState([])
  const [loading, setLoading] = useState(false)
  const { serverUrl } = useContext(authDataContext)

  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  const handleAddProduct = async (e) => {
    // Sold Copy By Eliteblaze , dev: Prayag kaushik
    e.preventDefault()
    setLoading(true)

    try {
      // Sold Copy By Eliteblaze , dev: Prayag kaushik
      if (!name.trim()) {
        toast.error("Product name is required")
        setLoading(false)
        return
      }

      // Sold Copy By Eliteblaze , dev: Prayag kaushik
      if (!description.trim()) {
        toast.error("Product description is required")
        setLoading(false)
        return
      }

      // Sold Copy By Eliteblaze , dev: Prayag kaushik
      if (!price || price <= 0) {
        toast.error("Valid price is required")
        setLoading(false)
        return
      }

      // Sold Copy By Eliteblaze , dev: Prayag kaushik
      if (!image1) {
        toast.error("At least one product image is required")
        setLoading(false)
        return
      }

      // Sold Copy By Eliteblaze , dev: Prayag kaushik
      const formData = new FormData()
      formData.append("name", name.trim())
      formData.append("description", description.trim())
      formData.append("price", price.toString())
      formData.append("category", category)
      formData.append("subCategory", subCategory)
      formData.append("bestseller", bestseller.toString())
      formData.append("sizes", JSON.stringify(sizes))

      // Sold Copy By Eliteblaze , dev: Prayag kaushik
      if (image1) formData.append("image1", image1)
      if (image2) formData.append("image2", image2)
      if (image3) formData.append("image3", image3)
      if (image4) formData.append("image4", image4)

      // Sold Copy By Eliteblaze , dev: Prayag kaushik
      console.log("FormData contents:")
      for (let [key, value] of formData.entries()) {
        console.log(key, value)
      }

      // Sold Copy By Eliteblaze , dev: Prayag kaushik
      console.log("Sending request to:", serverUrl + "/api/product/addproduct")

      // Sold Copy By Eliteblaze , dev: Prayag kaushik
      const result = await axios.post(
        serverUrl + "/api/product/addproduct",
        formData,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          timeout: 30000
        }
      )

      // Sold Copy By Eliteblaze , dev: Prayag kaushik
      console.log("Server response:", result.data)

      if (result.data && result.data.success !== false) {
        toast.success("Product Added Successfully!")

        // Sold Copy By Eliteblaze , dev: Prayag kaushik
        setName("")
        setDescription("")
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice("")
        setBestSeller(false)
        setCategory("Men")
        setSubCategory("TopWear")
        setSizes([])
      } else {
        toast.error(result.data?.message || "Failed to add product")
      }

    } catch (error) {
      console.error("Add product error:", error)

      // Sold Copy By Eliteblaze , dev: Prayag kaushik
      if (error.response) {
        console.error("Server error:", error.response.data)
        toast.error(`Server Error: ${error.response.data?.message || error.response.statusText}`)
      } else if (error.request) {
        // Sold Copy By Eliteblaze , dev: Prayag kaushik
        console.error("Network error:", error.request)
        toast.error("Network error. Please check your connection.")
      } else {
        console.error("Request setup error:", error.message)
        toast.error("Error setting up request: " + error.message)
      }
    } finally {
      setLoading(false)
    }
  }

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
              ADD PRODUCT
            </h1>
            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <div className='flex items-center justify-center mb-6'>
              <div className='w-8 h-px bg-white'></div>
              <div className='w-2 h-2 bg-white rounded-full mx-4'></div>
              <div className='w-8 h-px bg-white'></div>
            </div>
            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <p className='text-base sm:text-lg font-light text-gray-300 max-w-2xl mx-auto px-4'>
              Create a new product for your luxury collection
            </p>
          </div>
        </section>

        {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
        <section className='py-12 sm:py-20 px-4 sm:px-6 bg-white'>
          <div className='max-w-4xl mx-auto'>

            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <form onSubmit={handleAddProduct} className='bg-stone-50 border border-stone-200 rounded-lg p-8 space-y-8'>

              {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
              <div>
                <h3 className='text-2xl font-light text-black mb-6 tracking-wide uppercase'>
                  Product Images *
                </h3>
                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                <p className='text-gray-600 font-light mb-6'>Upload high-quality images (at least one required)</p>

                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                  {[
                    { image: image1, setImage: setImage1, id: 'image1', required: true },
                    { image: image2, setImage: setImage2, id: 'image2', required: false },
                    { image: image3, setImage: setImage3, id: 'image3', required: false },
                    { image: image4, setImage: setImage4, id: 'image4', required: false }
                  ].map(({ image, setImage, id, required }, index) => (
                    <label
                      key={id}
                      htmlFor={id}
                      className={`relative aspect-square cursor-pointer bg-white border-2 border-dashed rounded-lg overflow-hidden hover:border-black transition-colors duration-300 group ${required ? 'border-red-300' : 'border-stone-300'
                        }`}
                    >
                      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                      <img
                        src={!image ? upload : URL.createObjectURL(image)}
                        alt={`Upload ${index + 1}`}
                        className='w-full h-full object-cover'
                      />
                      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                      <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                        <span className='text-white text-sm font-medium'>
                          {!image ? (required ? 'Required' : 'Add Image') : 'Change Image'}
                        </span>
                      </div>
                      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                      <input
                        type="file"
                        id={id}
                        hidden
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files[0]
                          if (file) {
                            console.log(`Selected ${id}:`, file.name, file.size, file.type)
                            setImage(file)
                          }
                        }}
                      />
                    </label>
                  ))}
                </div>
              </div>

              {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>

                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                <div>
                  <label className='block text-lg font-medium text-black mb-3 uppercase tracking-wide'>
                    Product Name *
                  </label>
                  {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                  <input
                    type="text"
                    placeholder='Enter product name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='w-full h-12 bg-white border border-stone-300 px-4 text-black placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-300'
                    required
                  />
                </div>

                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                <div>
                  <label className='block text-lg font-medium text-black mb-3 uppercase tracking-wide'>
                    Price * (₹)
                  </label>
                  {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                  <input
                    type="number"
                    placeholder='Enter price'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className='w-full h-12 bg-white border border-stone-300 px-4 text-black placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-300'
                    required
                    min="1"
                    step="0.01"
                  />
                </div>
              </div>

              {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
              <div>
                <label className='block text-lg font-medium text-black mb-3 uppercase tracking-wide'>
                  Product Description *
                </label>
                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                <textarea
                  placeholder='Enter detailed product description'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  className='w-full bg-white border border-stone-300 p-4 text-black placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-300 resize-none'
                  required
                />
              </div>

              {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <div>
                  <label className='block text-lg font-medium text-black mb-3 uppercase tracking-wide'>
                    Category *
                  </label>
                  {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className='w-full h-12 bg-white border border-stone-300 px-4 text-black focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-300'
                  >
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="Ethnic Sets">Ethnic Sets</option>
                  </select>
                </div>

                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                <div>
                  <label className='block text-lg font-medium text-black mb-3 uppercase tracking-wide'>
                    Sub-Category *
                  </label>
                  {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                  <select
                    value={subCategory}
                    onChange={(e) => setSubCategory(e.target.value)}
                    className='w-full h-12 bg-white border border-stone-300 px-4 text-black focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-300'
                  >
                    <option value="TopWear">TopWear</option>
                    <option value="BottomWear">BottomWear</option>
                    <option value="ACCESSORIES">ACCESSORIES</option>
                    <option value="Scarves & Stoles">Scarves & Stoles</option>
                    <option value="Potli Bags">Potli Bags</option>
                    <option value="Dupattas & Stoles">Dupattas & Stoles</option>
                  </select>
                </div>
              </div>

              {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
              <div>
                <label className='block text-lg font-medium text-black mb-3 uppercase tracking-wide'>
                  Available Sizes
                </label>
                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                <p className='text-gray-600 font-light mb-4'>Select all available sizes for this product</p>
                <div className='flex flex-wrap gap-3'>
                  {["S", "M", "L", "XL", "XXL"].map(size => (
                    <button
                      key={size}
                      type='button'
                      onClick={() => setSizes(prev =>
                        prev.includes(size)
                          ? prev.filter(item => item !== size)
                          : [...prev, size]
                      )}
                      className={`px-6 py-3 font-medium border-2 transition-all duration-300 ${sizes.includes(size)
                        ? "bg-black text-white border-black"
                        : "bg-white text-black border-stone-300 hover:border-black"
                        }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                {sizes.length > 0 && (
                  <p className='text-sm text-gray-600 mt-3'>
                    Selected: {sizes.join(', ')}
                  </p>
                )}
              </div>

              {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
              <div className='bg-white border border-stone-300 rounded-lg p-6'>
                <div className='flex items-center gap-4'>
                  <input
                    type="checkbox"
                    id='bestseller'
                    checked={bestseller}
                    onChange={() => setBestSeller(prev => !prev)}
                    className='w-5 h-5'
                  />
                  {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                  <label htmlFor="bestseller" className='text-lg font-medium text-black cursor-pointer uppercase tracking-wide'>
                    Mark as Bestseller
                  </label>
                </div>
                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                <p className='text-sm text-gray-600 mt-2 ml-9'>
                  Featured products get more visibility in your store
                </p>
              </div>

              {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
              <div className='pt-6 text-center'>
                <button
                  type='submit'
                  disabled={loading}
                  className='bg-black text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed px-12 py-4 font-medium uppercase tracking-wide transition-colors duration-300 flex items-center justify-center gap-3 mx-auto'
                >
                  {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                  {loading ? (
                    <>
                      <Loading />
                      <span>Adding Product...</span>
                    </>
                  ) : (
                    'Add Product'
                  )}
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}

// Sold Copy By Eliteblaze , dev: Prayag kaushik
export default Add
