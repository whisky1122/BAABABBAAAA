// Sold Copy By Eliteblaze , dev: Prayag kaushik
import React from 'react'
import { IoIosAddCircleOutline } from "react-icons/io"
import { FaRegListAlt } from "react-icons/fa"
import { SiTicktick } from "react-icons/si"
import { useNavigate, useLocation } from 'react-router-dom'

// Sold Copy By Eliteblaze , dev: Prayag kaushik
function Sidebar() {
  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  const navigate = useNavigate()
  const location = useLocation()

  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  const menuItems = [
    {
      icon: <IoIosAddCircleOutline className='w-5 h-5' />,
      label: 'Add Product',
      path: '/add',
      description: 'Create new product'
    },
    // Sold Copy By Eliteblaze , dev: Prayag kaushik
    {
      icon: <FaRegListAlt className='w-5 h-5' />,
      label: 'Product List',
      path: '/lists', 
      description: 'Manage inventory'
    },
    // Sold Copy By Eliteblaze , dev: Prayag kaushik
    {
      icon: <SiTicktick className='w-5 h-5' />,
      label: 'Orders',
      path: '/orders',
      description: 'View all orders'
    }
  ]

  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  const isActive = (path) => location.pathname === path

  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  return (
    <aside className='fixed left-0 top-[70px] w-64 h-[calc(100vh-70px)] bg-white border-r border-stone-200 shadow-sm z-40 overflow-y-auto'>
      <div className='p-6'>
        
        {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
        <div className='mb-8'>
          <h2 className='text-xl font-light text-black mb-2 tracking-wide'>
            ADMIN MENU
          </h2>
          {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
          <div className='w-8 h-px bg-black'></div>
        </div>

        {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
        <nav className='space-y-2'>
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-4 p-4 rounded-lg text-left transition-all duration-300 group ${
                isActive(item.path)
                  ? 'bg-black text-white shadow-md'
                  : 'text-gray-700 hover:bg-stone-100 hover:text-black'
              }`}
            >
              {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
              <div className={`flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                isActive(item.path) ? 'text-white' : 'text-gray-600'
              }`}>
                {item.icon}
              </div>
              {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
              <div className='flex-1 min-w-0'>
                <div className={`font-medium text-sm tracking-wide ${
                  isActive(item.path) ? 'text-white' : 'text-black'
                }`}>
                  {item.label}
                </div>
                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                <div className={`text-xs mt-1 ${
                  isActive(item.path) ? 'text-gray-300' : 'text-gray-500'
                }`}>
                  {item.description}
                </div>
              </div>
              
              {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
              {isActive(item.path) && (
                <div className='w-1 h-6 bg-white rounded-full opacity-80'></div>
              )}
            </button>
          ))}
        </nav>

        {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
        <div className='mt-12 pt-6 border-t border-stone-200'>
          <div className='text-center'>
            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <div className='text-xs font-light text-gray-500 uppercase tracking-wider mb-2'>
              Quick Stats
            </div>
            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <div className='flex justify-center gap-4 text-xs'>
              <div className='text-center'>
                <div className='font-medium text-black'>Active</div>
                <div className='text-gray-500'>Admin</div>
              </div>
              {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
              <div className='w-px bg-stone-300'></div>
              <div className='text-center'>
                <div className='font-medium text-black'>Online</div>
                <div className='text-green-500'>●</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

// Sold Copy By Eliteblaze , dev: Prayag kaushik
export default Sidebar
