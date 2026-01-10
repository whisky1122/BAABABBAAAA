import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { FaChevronRight, FaChevronDown } from "react-icons/fa"
import Title from '../component/Title'
import { shopDataContext } from '../context/ShopContext'
import Card from '../component/Card'

function Collections() {
  const [showFilter, setShowFilter] = useState(false)
  const { products, search, showSearch } = useContext(shopDataContext)
  const [filterProduct, setFilterProduct] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState("relevant")
  const location = useLocation()

  useEffect(() => {
    if (location.state && location.state.category) {
      const cat = location.state.category
      // Check if it's a category or subCategory
      const categories = ['Men', 'Women', 'Ethnic Sets']
      const subCategories = ['TopWear', 'BottomWear', 'ACCESSORIES', 'Scarves & Stoles', 'Potli Bags', 'Dupattas & Stoles']

      if (categories.includes(cat)) {
        setCategory([cat])
      } else if (subCategories.includes(cat)) {
        setSubCategory([cat])
      } else if (cat === 'women-ready-to-wear' || cat === 'men-ready-to-wear') {
        // Handle existing links if necessary
      }
    }
  }, [location.state])

  const toggleCategory = (e) => {
    const value = e.target.value
    if (category.includes(value)) {
      setCategory(prev => prev.filter(item => item !== value))
    } else {
      setCategory(prev => [...prev, value])
    }
  }

  const toggleSubCategory = (e) => {
    const value = e.target.value
    if (subCategory.includes(value)) {
      setSubCategory(prev => prev.filter(item => item !== value))
    } else {
      setSubCategory(prev => [...prev, value])
    }
  }

  const applyFilter = () => {
    let productCopy = products.slice()

    if (showSearch && search) {
      productCopy = productCopy.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    }

    if (category.length > 0) {
      productCopy = productCopy.filter(item => category.includes(item.category))
    }

    if (subCategory.length > 0) {
      productCopy = productCopy.filter(item => subCategory.includes(item.subCategory))
    }

    setFilterProduct(productCopy)
  }

  const sortProducts = () => {
    let fbCopy = filterProduct.slice()

    switch (sortType) {
      case 'low-high':
        setFilterProduct(fbCopy.sort((a, b) => a.price - b.price))
        break
      case 'high-low':
        setFilterProduct(fbCopy.sort((a, b) => b.price - a.price))
        break
      default:
        applyFilter()
        break
    }
  }

  useEffect(() => {
    sortProducts()
  }, [sortType])

  useEffect(() => {
    setFilterProduct(products)
  }, [products])

  useEffect(() => {
    applyFilter()
  }, [category, subCategory, search, showSearch])

  return (
    <div className='min-h-screen bg-white text-black overflow-x-hidden relative mt-[120px] scrolled:mt-[72px] transition-all duration-300 gucci-collections'>

      {/* GUCCI Header Section */}
      <section className='gucci-header-section'>
        <div className='max-w-5xl mx-auto px-6 text-center'>
          <h1 className='gucci-page-title'>
            COLLECTIONS
          </h1>
          <div className='gucci-divider-center'></div>
          <p className='gucci-page-subtitle'>
            Discover our curated selection
          </p>
        </div>
      </section>

      <div className='flex flex-col lg:flex-row max-w-6xl mx-auto px-6'>

        {/* GUCCI Filter Sidebar */}
        <div className={`gucci-sidebar ${showFilter ? 'open' : 'closed'} lg:open`}>

          {/* Filter Header - Mobile Toggle */}
          <div
            className='lg:hidden p-4 border-b border-gray-100 flex items-center justify-between cursor-pointer active:bg-stone-50'
            onClick={() => setShowFilter(prev => !prev)}
          >
            <span className='text-xs font-bold tracking-widest uppercase'>Refine By</span>
            <div className='flex items-center gap-2'>
              <span className='text-[10px] text-gray-400 uppercase tracking-widest'>Filters</span>
              <FaChevronDown className={`w-3 h-3 transition-transform duration-300 ${showFilter ? 'rotate-180' : ''}`} />
            </div>
          </div>

          <div className='hidden lg:block p-8 border-b border-gray-100'>
            <h3 className='text-sm font-bold tracking-[0.3em] uppercase'>Filters</h3>
          </div>

          {/* Filter Content */}
          <div className={`gucci-filter-content ${showFilter ? 'show' : 'hide'} lg:show`}>

            {/* Categories */}
            <div className='gucci-filter-group'>
              <h4 className='gucci-filter-group-title'>
                CATEGORIES
              </h4>
              <div className='gucci-filter-options'>
                {['Men', 'Women', 'Ethnic Sets'].map(cat => (
                  <label key={cat} className='gucci-checkbox-label'>
                    <input
                      type='checkbox'
                      value={cat}
                      onChange={toggleCategory}
                      checked={category.includes(cat)}
                      className='gucci-checkbox'
                    />
                    <span className='gucci-checkbox-text'>
                      {cat}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Sub-Categories */}
            <div className='gucci-filter-group'>
              <h4 className='gucci-filter-group-title'>
                TYPE
              </h4>
              <div className='gucci-filter-options'>
                {['TopWear', 'BottomWear', 'ACCESSORIES', 'Scarves & Stoles', 'Potli Bags', 'Dupattas & Stoles'].map(sub => (
                  <label key={sub} className='gucci-checkbox-label'>
                    <input
                      type='checkbox'
                      value={sub}
                      onChange={toggleSubCategory}
                      checked={subCategory.includes(sub)}
                      className='gucci-checkbox'
                    />
                    <span className='gucci-checkbox-text'>
                      {sub}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* GUCCI Products Section */}
        <div className='gucci-products-section'>

          {/* Products Header */}
          <div className='gucci-products-header'>
            <div className='gucci-item-count'>
              {filterProduct.length} {filterProduct.length === 1 ? 'ITEM' : 'ITEMS'}
            </div>

            <select
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
              className='gucci-sort-select'
            >
              <option value='relevant'>SORT BY RELEVANCE</option>
              <option value='low-high'>PRICE: LOW TO HIGH</option>
              <option value='high-low'>PRICE: HIGH TO LOW</option>
            </select>
          </div>

          {/* Products Grid */}
          <div className='gucci-products-grid'>
            {filterProduct.map((item, index) => (
              <Card
                key={item._id || index}
                id={item._id}
                name={item.name}
                price={item.price}
                image={item.image1}
              />
            ))}
          </div>

          {/* GUCCI Empty State */}
          {filterProduct.length === 0 && (
            <div className='gucci-empty-state'>
              <h3 className='gucci-empty-title'>
                NO ITEMS FOUND
              </h3>
              <div className='gucci-divider-center'></div>
              <p className='gucci-empty-subtitle'>
                Try adjusting your filters
              </p>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        /* GUCCI Collections Typography */
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600&family=Inter:wght@300;400;500;600;700&display=swap');
        
        .gucci-collections {
          font-family: 'Playfair Display', 'Times New Roman', serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* GUCCI Header Section */
        .gucci-header-section {
          padding: 60px 0;
          background-color: #ffffff;
          border-bottom: 1px solid #e0e0e0;
        }

        .gucci-page-title {
          font-family: 'Playfair Display', serif;
          font-weight: 400;
          font-size: 3.5rem;
          letter-spacing: 0.15em;
          color: #000000;
          text-transform: uppercase;
          margin-bottom: 2rem;
        }

        .gucci-page-subtitle {
          font-family: 'Inter', Arial, sans-serif;
          font-weight: 300;
          font-size: 0.875rem;
          letter-spacing: 0.25em;
          color: #666666;
          text-transform: uppercase;
          margin-top: 2rem;
        }

        .gucci-divider-center {
          width: 60px;
          height: 1px;
          background-color: #000000;
          margin: 0 auto;
        }

        /* GUCCI Sidebar */
        .gucci-sidebar {
          width: 100%;
          background-color: #ffffff;
          border-right: 1px solid #e0e0e0;
          transition: all 0.3s ease;
        }

        .gucci-sidebar.closed {
          height: auto;
        }

        .gucci-sidebar.open {
          height: auto;
        }

        @media (min-width: 1024px) {
          .gucci-sidebar {
            width: 280px;
            height: auto;
          }
        }

        .gucci-filter-header {
          padding: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          border-bottom: 1px solid #e0e0e0;
        }

        @media (min-width: 1024px) {
          .gucci-filter-header {
            cursor: default;
          }
        }

        .gucci-filter-title {
          font-family: 'Inter', Arial, sans-serif;
          font-weight: 500;
          font-size: 0.875rem;
          letter-spacing: 0.3em;
          color: #000000;
          text-transform: uppercase;
        }

        .gucci-chevron {
          width: 16px;
          height: 16px;
          color: #000000;
        }

        .gucci-filter-content {
          padding: 0 24px 24px 24px;
        }

        .gucci-filter-content.hide {
          display: none;
        }

        .gucci-filter-content.show {
          display: block;
        }

        @media (min-width: 1024px) {
          .gucci-filter-content {
            display: block !important;
          }
        }

        .gucci-filter-group {
          margin-bottom: 32px;
          padding-top: 24px;
        }

        .gucci-filter-group-title {
          font-family: 'Inter', Arial, sans-serif;
          font-weight: 400;
          font-size: 0.75rem;
          letter-spacing: 0.3em;
          color: #000000;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .gucci-filter-options {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .gucci-checkbox-label {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
        }

        .gucci-checkbox {
          width: 16px;
          height: 16px;
          border: 1px solid #000000;
          background-color: #ffffff;
          appearance: none;
          cursor: pointer;
          position: relative;
        }

        .gucci-checkbox:checked {
          background-color: #000000;
        }

        .gucci-checkbox:checked::after {
          content: '✓';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #ffffff;
          font-size: 10px;
          font-weight: bold;
        }

        .gucci-checkbox-text {
          font-family: 'Inter', Arial, sans-serif;
          font-weight: 300;
          font-size: 0.875rem;
          color: #000000;
          transition: opacity 0.2s ease;
        }

        .gucci-checkbox-label:hover .gucci-checkbox-text {
          opacity: 0.6;
        }

        /* GUCCI Products Section */
        .gucci-products-section {
          flex: 1;
          padding: 24px;
        }

        .gucci-products-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
          padding-bottom: 16px;
          border-bottom: 1px solid #e0e0e0;
        }

        .gucci-item-count {
          font-family: 'Inter', Arial, sans-serif;
          font-weight: 300;
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          color: #666666;
          text-transform: uppercase;
        }

        .gucci-sort-select {
          font-family: 'Inter', Arial, sans-serif;
          font-weight: 300;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          color: #000000;
          text-transform: uppercase;
          background-color: #ffffff;
          border: 1px solid #e0e0e0;
          padding: 8px 16px;
          outline: none;
          cursor: pointer;
          transition: border-color 0.2s ease;
        }

        .gucci-sort-select:focus {
          border-color: #000000;
        }

        .gucci-sort-select option {
          font-family: 'Inter', Arial, sans-serif;
          font-weight: 300;
          text-transform: uppercase;
        }

        .gucci-products-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 32px;
        }

        @media (min-width: 768px) {
          .gucci-products-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .gucci-products-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (min-width: 1280px) {
          .gucci-products-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        /* GUCCI Empty State */
        .gucci-empty-state {
          text-align: center;
          padding: 80px 0;
        }

        .gucci-empty-title {
          font-family: 'Playfair Display', serif;
          font-weight: 400;
          font-size: 1.5rem;
          letter-spacing: 0.15em;
          color: #000000;
          text-transform: uppercase;
          margin-bottom: 2rem;
        }

        .gucci-empty-subtitle {
          font-family: 'Inter', Arial, sans-serif;
          font-weight: 300;
          font-size: 0.875rem;
          letter-spacing: 0.2em;
          color: #666666;
          text-transform: uppercase;
          margin-top: 2rem;
        }

        /* GUCCI Responsive */
        @media (max-width: 768px) {
          .gucci-page-title {
            font-size: 2.5rem;
          }
          
          .gucci-products-section {
            padding: 16px;
          }
        }

        /* Remove default focus outlines and add custom ones */
        *:focus {
          outline: none;
        }

        .gucci-checkbox:focus {
          box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  )
}

export default Collections
