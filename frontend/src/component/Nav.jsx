import React, { useContext, useState, useEffect } from 'react'
import logo from '../assets/logo.png'
import { IoSearchCircleOutline, IoSearchCircleSharp } from "react-icons/io5"
import { FaCircleUser } from "react-icons/fa6"
import { MdOutlineShoppingCart } from "react-icons/md"
import { userDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { IoMdHome } from "react-icons/io"
import { HiOutlineCollection } from "react-icons/hi"
import { MdContacts, MdEdit, MdCheck, MdClose } from "react-icons/md"
import axios from 'axios'
import { authDataContext } from '../context/AuthContext'
import { shopDataContext } from '../context/ShopContext'


function Nav() {
  const { getCurrentUser, userData } = useContext(userDataContext)
  const { serverUrl } = useContext(authDataContext)
  const { showSearch, setShowSearch, search, setSearch, getCartCount } = useContext(shopDataContext)
  const [showProfile, setShowProfile] = useState(false)
  const [showMainMenu, setShowMainMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isEditingPhone, setIsEditingPhone] = useState(false)
  const [isEditingAddress, setIsEditingAddress] = useState(false)
  const [tempPhone, setTempPhone] = useState("")
  const [tempAddress, setTempAddress] = useState("")
  const [updating, setUpdating] = useState(false)
  const navigate = useNavigate()


  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  const handleLogout = async () => {
    try {
      const result = await axios.get(serverUrl + "/api/auth/logout", { withCredentials: true })
      console.log(result.data)
      setUserData(null) // Explicitly clear user state immediately
      navigate("/login")
      setShowProfile(false)
    } catch (error) {
      console.log(error)
      setUserData(null) // Clear state even if API call fails to ensure logout perception
      navigate("/login")
    }
  }

  // Handle category navigation
  const handleCategoryClick = (category) => {
    navigate('/collection', { state: { category: category } })
    setShowMainMenu(false)
  }

  const handleUpdateProfile = async () => {
    setUpdating(true)
    try {
      const result = await axios.post(serverUrl + "/api/user/update-profile", {
        phone: tempPhone,
        address: tempAddress
      }, { withCredentials: true })

      getCurrentUser() // Refresh data
      setIsEditingPhone(false)
      setIsEditingAddress(false)
    } catch (error) {
      console.log(error)
    } finally {
      setUpdating(false)
    }
  }

  useEffect(() => {
    if (userData) {
      setTempPhone(userData.phone || "")
      setTempAddress(userData.address || "")
    }
  }, [userData])

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.menu-container')) {
        setShowMainMenu(false)
        setShowProfile(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])


  return (
    <>
      {/* PROFESSIONAL ZoyaElegance Navigation */}
      <nav className={`w-full fixed top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200 transition-all duration-500 ease-in-out ${scrolled ? 'h-[70px] shadow-sm' : 'h-[100px]'
        }`}>

        {/* Navigation Container */}
        <div className='h-full flex items-center justify-between px-6 lg:px-12 max-w-[1920px] mx-auto'>

          {/* Left Side Menu */}
          <div className='flex items-center space-x-6 lg:space-x-10 z-10'>
            {/* Main Menu Button */}
            <div className='relative menu-container'>
              <button
                className='text-xs font-medium uppercase tracking-[0.15em] text-black hover:text-gray-500 transition-colors duration-300 flex items-center gap-2 group py-2'
                onClick={() => setShowMainMenu(prev => !prev)}
              >
                <div className='flex flex-col gap-[3px] group-hover:gap-[4px] transition-all duration-300'>
                  <span className={`w-4 h-[1px] bg-black transition-all duration-300 ${showMainMenu ? 'rotate-45 translate-y-[4px]' : ''}`}></span>
                  <span className={`w-4 h-[1px] bg-black transition-all duration-300 ${showMainMenu ? 'opacity-0' : ''}`}></span>
                  <span className={`w-4 h-[1px] bg-black transition-all duration-300 ${showMainMenu ? '-rotate-45 -translate-y-[4px]' : ''}`}></span>
                </div>
                <span className='hidden md:block'>Menu</span>
              </button>

              {/* Enhanced Professional Dropdown */}
              <div className={`absolute top-full left-0 mt-4 bg-white border border-stone-100 shadow-xl z-50 w-64 md:w-80 transition-all duration-300 origin-top-left transform ${showMainMenu
                ? 'opacity-100 scale-100 translate-y-0'
                : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                }`}>

                <div className="absolute top-0 left-6 w-3 h-3 bg-white border-t border-l border-stone-100 transform -translate-y-1/2 rotate-45"></div>

                <div className='py-6 px-2'>
                  {/* Main Categories */}
                  <div className='space-y-1'>
                    {['WOMEN', 'MEN', 'HANDBAGS', 'ETHNIC SETS', 'ACCESSORIES'].map((item) => (
                      <button
                        key={item}
                        className='w-full text-left px-8 py-3 text-sm font-light uppercase tracking-[0.1em] text-gray-800 hover:text-black hover:bg-stone-50 transition-all duration-300 border-l-2 border-transparent hover:border-black'
                        onClick={() => handleCategoryClick(item.toLowerCase() === 'ethnic sets' ? 'Ethnic Sets' : (item.toLowerCase() === 'accessories' ? 'ACCESSORIES' : item.toLowerCase()))}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Center Logo - Responsive Centering */}
          <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer text-center w-full max-w-[200px] md:max-w-none px-2 z-0' onClick={() => navigate("/")}>
            <h1 className={`font-serif font-light tracking-[0.25em] text-black transition-all duration-500 hover:tracking-[0.3em] ${scrolled ? 'text-lg md:text-xl' : 'text-xl md:text-2xl lg:text-3xl'}`}>
              ZOYA ELEGANCE
            </h1>
          </div>

          {/* Right Side Menu */}
          <div className='flex items-center gap-5 lg:gap-8 z-10'>
            {/* Search */}
            <button
              className='hidden md:flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-black hover:text-gray-500 transition-colors duration-300 group'
              onClick={() => { setShowSearch(prev => !prev); navigate("/collection") }}
            >
              <IoSearchCircleOutline className='w-5 h-5 group-hover:scale-110 transition-transform duration-300' />
              <span className='group-hover:underline decoration-stone-300 underline-offset-4'>Search</span>
            </button>

            {/* Bag with Counter */}
            <button
              className='relative group flex items-center gap-1 text-black hover:text-gray-500 transition-colors duration-300'
              onClick={() => navigate("/cart")}
            >
              <MdOutlineShoppingCart className='w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-300' />
              <span className='hidden md:block text-xs font-medium uppercase tracking-[0.15em] ml-1 group-hover:underline decoration-stone-300 underline-offset-4'>Bag</span>
              {getCartCount() > 0 && (
                <span className='absolute -top-1 -right-1.5 w-4 h-4 bg-black text-white text-[9px] flex items-center justify-center rounded-full'>
                  {getCartCount()}
                </span>
              )}
            </button>

            {/* Profile/User Icon */}
            <div className='relative menu-container'>
              <button
                className='text-black hover:text-gray-500 transition-colors duration-300 flex items-center gap-2 group'
                onClick={() => setShowProfile(prev => !prev)}
              >
                <FaCircleUser className='w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-300' />
              </button>
            </div>

            {/* Contact */}
            <button
              className='hidden xl:block text-xs font-medium uppercase tracking-[0.15em] text-black hover:text-gray-500 transition-colors duration-300 hover:underline decoration-stone-300 underline-offset-4'
              onClick={() => navigate('/contact')}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* PROFESSIONAL Search Bar */}
      {showSearch && (
        <div className={`fixed w-full bg-white/95 backdrop-blur-sm border-b border-stone-200 z-40 transition-all duration-500 ease-in-out ${scrolled ? 'top-[70px]' : 'top-[100px]'
          }`}>
          <div className='px-6 lg:px-12 py-8'>
            <div className='max-w-4xl mx-auto relative'>
              <input
                type="text"
                className='w-full text-2xl font-light text-black bg-transparent border-b border-black/10 focus:border-black transition-colors duration-300 pb-4 pr-12 focus:outline-none placeholder-gray-300'
                placeholder='Search collections...'
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                autoFocus
              />
              <button
                className='absolute right-0 top-0 text-gray-400 hover:text-black transition-colors duration-300'
                onClick={() => setShowSearch(false)}
              >
                <IoSearchCircleSharp className='w-8 h-8' />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PROFESSIONAL Profile Menu */}
      {showProfile && (
        <div className={`fixed right-6 lg:right-12 mt-4 bg-white border border-stone-100 shadow-2xl z-50 transition-all duration-300 origin-top-right transform menu-container ${scrolled ? 'top-[70px]' : 'top-[100px]'} animate-in fade-in slide-in-from-top-2 w-80 md:w-96`}>
          <div className="absolute top-0 right-6 w-3 h-3 bg-white border-t border-l border-stone-100 transform -translate-y-1/2 rotate-45"></div>

          {userData ? (
            <div className='p-8'>
              <div className='text-center mb-8'>
                <div className='w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <FaCircleUser className='w-10 h-10 text-stone-400' />
                </div>
                <h3 className='text-xl font-normal text-black tracking-tight'>{userData?.name}</h3>
                <p className='text-xs text-gray-400 uppercase tracking-widest mt-1'>Client Account</p>
              </div>

              <div className='space-y-6'>
                {/* Email Section */}
                <div className='border-b border-gray-100 pb-4'>
                  <label className='block text-[10px] text-gray-400 uppercase tracking-widest mb-1'>Email Address</label>
                  <p className='text-sm text-black font-light'>{userData?.email}</p>
                </div>

                {/* Phone Section */}
                <div className='border-b border-gray-100 pb-4 relative group'>
                  <label className='block text-[10px] text-gray-400 uppercase tracking-widest mb-1'>Phone Number</label>
                  {isEditingPhone ? (
                    <div className='flex items-center gap-2'>
                      <input
                        type="text"
                        value={tempPhone}
                        onChange={(e) => setTempPhone(e.target.value)}
                        className='text-sm text-black font-light border-b border-black outline-none w-full bg-transparent p-0'
                        placeholder='Enter phone number'
                        autoFocus
                      />
                      <button onClick={handleUpdateProfile} className='text-black'><MdCheck className='w-4 h-4' /></button>
                      <button onClick={() => { setIsEditingPhone(false); setTempPhone(userData.phone || "") }} className='text-gray-400'><MdClose className='w-4 h-4' /></button>
                    </div>
                  ) : (
                    <div className='flex items-center justify-between'>
                      <p className='text-sm text-black font-light'>{userData?.phone || "Not provided"}</p>
                      <button
                        onClick={() => setIsEditingPhone(true)}
                        className='opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-gray-400 hover:text-black'
                      >
                        <MdEdit className='w-4 h-4' />
                      </button>
                    </div>
                  )}
                </div>

                {/* Address Section */}
                <div className='border-b border-gray-100 pb-4 relative group'>
                  <label className='block text-[10px] text-gray-400 uppercase tracking-widest mb-1'>Shipping Address</label>
                  {isEditingAddress ? (
                    <div className='flex items-center gap-2'>
                      <textarea
                        value={tempAddress}
                        onChange={(e) => setTempAddress(e.target.value)}
                        className='text-sm text-black font-light border border-gray-200 outline-none w-full p-2 bg-stone-50'
                        placeholder='Enter your address'
                        rows="2"
                        autoFocus
                      />
                      <div className='flex flex-col gap-2'>
                        <button onClick={handleUpdateProfile} className='text-black'><MdCheck className='w-4 h-4' /></button>
                        <button onClick={() => { setIsEditingAddress(false); setTempAddress(userData.address || "") }} className='text-gray-400'><MdClose className='w-4 h-4' /></button>
                      </div>
                    </div>
                  ) : (
                    <div className='flex items-center justify-between'>
                      <p className='text-sm text-black font-light leading-relaxed'>{userData?.address || "Not provided"}</p>
                      <button
                        onClick={() => setIsEditingAddress(true)}
                        className='opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-gray-400 hover:text-black'
                      >
                        <MdEdit className='w-4 h-4' />
                      </button>
                    </div>
                  )}
                </div>

                {/* Cart Summary Section */}
                <div className='pt-4 pb-2 border-t border-stone-100 mt-4'>
                  <div className='flex items-center justify-between mb-4'>
                    <div className='flex items-center gap-3'>
                      <div className='w-8 h-8 rounded-full bg-black flex items-center justify-center text-white'>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                      </div>
                      <div>
                        <p className='text-[10px] text-stone-400 uppercase tracking-widest font-medium'>Your Bag</p>
                        <p className='text-xs text-black font-medium'>{getCartCount()} Items</p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        navigate('/cart')
                        setShowProfile(false)
                      }}
                      className='text-[10px] text-black uppercase tracking-widest font-bold hover:underline'
                    >
                      View All
                    </button>
                  </div>
                </div>

                {/* Actions */}
                <div className='pt-4 space-y-4'>
                  <button
                    className='block w-full text-center text-[10px] font-normal uppercase tracking-widest text-white bg-black py-3 hover:bg-zinc-800 transition-colors duration-300'
                    onClick={() => { navigate("/order"); setShowProfile(false) }}
                  >
                    View My Orders
                  </button>
                  <button
                    className='block w-full text-center text-[10px] font-normal uppercase tracking-widest text-black border border-black py-3 hover:bg-stone-100 transition-colors duration-300'
                    onClick={handleLogout}
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className='p-8 space-y-6'>
              <div className='text-center mb-8'>
                <h3 className='text-xl font-normal text-black tracking-tight italic font-serif'>Welcome</h3>
                <p className='text-[10px] text-gray-400 uppercase tracking-widest mt-2'>Please sign in to your account</p>
              </div>
              <button
                className='block w-full text-center text-[10px] font-normal uppercase tracking-widest text-white bg-black py-3 hover:bg-zinc-800 transition-colors duration-300'
                onClick={() => { navigate("/login"); setShowProfile(false) }}
              >
                Sign In
              </button>
              <button
                className='block w-full text-center text-[10px] font-normal uppercase tracking-widest text-black border border-black py-3 hover:bg-stone-100 transition-colors duration-300'
                onClick={() => { navigate("/register"); setShowProfile(false) }}
              >
                Create Account
              </button>
            </div>
          )}
        </div>
      )}

      {/* Mobile Bottom Navigation */}
      <div className='fixed bottom-0 left-0 w-full h-20 bg-white md:hidden border-t border-gray-200 z-40'>
        <div className='flex items-center justify-around h-full px-4'>
          {[
            { icon: IoMdHome, label: 'Home', path: '/' },
            { icon: HiOutlineCollection, label: 'Shop', path: '/collection' },
            { icon: MdContacts, label: 'Contact', path: '/contact' },
            {
              icon: MdOutlineShoppingCart,
              label: 'Bag',
              path: '/cart',
              badge: getCartCount()
            }
          ].map((item) => (
            <button
              key={item.label}
              className='flex flex-col items-center gap-1 text-black hover:opacity-60 transition-opacity duration-200'
              onClick={() => navigate(item.path)}
            >
              <div className='relative'>
                <item.icon className='w-6 h-6' />
                {item.badge > 0 && (
                  <span className='absolute -top-2 -right-2 w-4 h-4 bg-black text-white text-xs flex items-center justify-center font-normal'>
                    {item.badge}
                  </span>
                )}
              </div>
              <span className='text-xs font-light uppercase tracking-wide'>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,900;1,400&display=swap');
        
        * {
          font-family: 'Playfair Display', serif;
        }
        
        button {
           -webkit-tap-highlight-color: transparent;
        }
      `}</style>
    </>
  )
}

export default Nav
