// Sold Copy By Eliteblaze , dev: Prayag kaushik
import React, { useContext } from 'react'
import { IoIosAddCircleOutline } from "react-icons/io"
import { FaRegListAlt } from "react-icons/fa"
import { SiTicktick } from "react-icons/si"
import { useNavigate, useLocation } from 'react-router-dom'
import { sidebarContext } from '../context/SidebarContext'

// Sold Copy By Eliteblaze , dev: Prayag kaushik
function Sidebar() {
  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  const navigate = useNavigate()
  const location = useLocation()
  const { isSidebarOpen, closeSidebar } = useContext(sidebarContext)

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
  const handleNavigate = (path) => {
    navigate(path)
    closeSidebar() // Close sidebar on mobile after navigation
  }

  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  return (
    <>
      {/* Backdrop for mobile */}
      {isSidebarOpen && (
        <div
          className='fixed inset-0 bg-black/50 z-40 lg:hidden'
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed left-0 top-[70px] w-64 h-[calc(100vh-70px)] bg-white border-r border-stone-200 shadow-sm z-50 overflow-y-auto transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className='p-6'>

          {/* Close button for mobile */}
          <button
            onClick={closeSidebar}
            className='lg:hidden absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-600 hover:text-black transition-colors'
            aria-label='Close menu'
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>

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
                onClick={() => handleNavigate(item.path)}
                className={`w-full flex items-center gap-4 p-4 rounded-lg text-left transition-all duration-300 group ${isActive(item.path)
                  ? 'bg-black text-white shadow-md'
                  : 'text-gray-700 hover:bg-stone-100 hover:text-black'
                  }`}
              >
                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                <div className={`flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${isActive(item.path) ? 'text-white' : 'text-gray-600'
                  }`}>
                  {item.icon}
                </div>
                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                <div className='flex-1 min-w-0'>
                  <div className={`font-medium text-sm tracking-wide ${isActive(item.path) ? 'text-white' : 'text-black'
                    }`}>
                    {item.label}
                  </div>
                  {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                  <div className={`text-xs mt-1 ${isActive(item.path) ? 'text-gray-300' : 'text-gray-500'
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
    </>
  )
}

// Sold Copy By Eliteblaze , dev: Prayag kaushik
export default Sidebar
