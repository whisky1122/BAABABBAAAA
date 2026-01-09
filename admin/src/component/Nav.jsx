// Sold Copy By Eliteblaze , dev: Prayag kaushik
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../assets/logo.png"
import axios from 'axios'
import { authDataContext } from '../context/AuthContext'
import { adminDataContext } from '../context/AdminContext'
import { sidebarContext } from '../context/SidebarContext'
import { toast } from 'react-toastify'

// Sold Copy By Eliteblaze , dev: Prayag kaushik
function Nav() {
  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  const navigate = useNavigate()
  const { serverUrl } = useContext(authDataContext)
  const { getAdmin } = useContext(adminDataContext)
  const { toggleSidebar } = useContext(sidebarContext)

  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  const logOut = async () => {
    try {
      // Sold Copy By Eliteblaze , dev: Prayag kaushik
      const result = await axios.get(serverUrl + "/api/auth/logout", { withCredentials: true })
      console.log(result.data)
      toast.success("Logout Successful")
      getAdmin()
      navigate("/login")
    } catch (error) {
      console.log(error)
      toast.error("Logout Failed")
    }
  }

  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  return (
    <nav className='fixed top-0 left-0 w-full h-[70px] bg-white border-b border-stone-200 z-50 shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between'>

        <div className='flex items-center gap-3'>
          {/* Hamburger Menu Button - Mobile Only */}
          <button
            onClick={toggleSidebar}
            className='lg:hidden w-10 h-10 flex items-center justify-center text-gray-700 hover:text-black transition-colors'
            aria-label='Toggle menu'
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
            </svg>
          </button>

          {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
          <div
            className='flex items-center gap-2 sm:gap-3 cursor-pointer group transition-all duration-300 hover:opacity-80'
            onClick={() => navigate("/")}
          >
            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <div className='w-8 h-8 sm:w-10 sm:h-10 bg-black rounded flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-300'>
              <img
                src={logo}
                alt="ZoyaElegance Logo"
                className='w-5 h-5 sm:w-6 sm:h-6 object-contain'
              />
            </div>
            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <div className='flex flex-col'>
              <h1 className='text-xl sm:text-2xl font-light tracking-wide text-black group-hover:text-gray-700 transition-colors duration-300'>
                ZoyaElegance
              </h1>
              {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
              <span className='text-[10px] sm:text-xs font-light tracking-wider text-gray-500 uppercase'>
                Admin Panel
              </span>
            </div>
          </div>
        </div>

        {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
        <div className='flex items-center gap-2 sm:gap-4'>

          {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
          <div className='hidden md:flex items-center gap-2 px-3 py-1 bg-stone-100 rounded-full'>
            <div className='w-2 h-2 bg-green-500 rounded-full'></div>
            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <span className='text-sm font-medium text-gray-700'>Admin</span>
          </div>

          {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
          <button
            onClick={logOut}
            className='bg-black text-white hover:bg-gray-800 px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium uppercase tracking-wide transition-colors duration-300 flex items-center gap-2'
          >
            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <span className='hidden sm:inline'>Logout</span>
            <span className='sm:hidden'>Exit</span>
            <svg
              className='w-4 h-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

// Sold Copy By Eliteblaze , dev: Prayag kaushik
export default Nav
