import React, { useContext, useState, useEffect } from 'react'
import logo from '../assets/logo.png'
import { IoSearchCircleOutline, IoSearchCircleSharp } from "react-icons/io5"
import { FaCircleUser } from "react-icons/fa6"
import { MdOutlineShoppingCart } from "react-icons/md"
import { userDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { IoMdHome } from "react-icons/io"
import { HiOutlineCollection } from "react-icons/hi"
import { MdContacts } from "react-icons/md"
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
  const navigate = useNavigate()


  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  const handleLogout = async () => {
    try {
      const result = await axios.get(serverUrl + "/api/auth/logout", { withCredentials: true })
      console.log(result.data)
      getCurrentUser()
      navigate("/login")
      setShowProfile(false)
    } catch (error) {
      console.log(error)
    }
  }

  // Handle category navigation
  const handleCategoryClick = (category) => {
    navigate('/collection', { state: { category: category } })
    setShowMainMenu(false)
  }

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
      {/* EXACT GUCCI Navigation Structure */}
      <nav className={`w-full fixed top-0 z-50 bg-white border-b border-gray-200 transition-all duration-300 ${scrolled ? 'h-[72px]' : 'h-[120px]'
        }`}>

        {/* GUCCI Navigation Container */}
        <div className='relative h-full flex items-center justify-between px-6 lg:px-12 max-w-none'>

          {/* Left Side Menu */}
          <div className='flex items-center space-x-8'>

            {/* Main Menu Button */}
            <div className='relative menu-container'>
              <button
                className='text-sm font-normal uppercase tracking-wide text-black hover:opacity-60 transition-opacity duration-200'
                onClick={() => setShowMainMenu(prev => !prev)}
              >
                MAIN MENU
              </button>

              {/* Main Menu Dropdown */}
              {showMainMenu && (
                <div className={`absolute bg-white border border-gray-200 shadow-lg z-50 w-80 transition-all duration-300 ${scrolled ? 'top-[72px]' : 'top-[120px]'
                  }`}>
                  <div className='py-4'>

                    {/* Women Section */}
                    <div className='px-6 py-4 border-b border-gray-100'>
                      <h3 className='text-sm font-normal uppercase tracking-wide text-black mb-3'>WOMEN</h3>
                      <div className='space-y-2'>
                        <button
                          className='block text-sm text-gray-600 hover:text-black transition-colors duration-200'
                          onClick={() => handleCategoryClick('women-ready-to-wear')}
                        >
                          Ready-To-Wear
                        </button>
                        <button
                          className='block text-sm text-gray-600 hover:text-black transition-colors duration-200'
                          onClick={() => handleCategoryClick('women-handbags')}
                        >
                          Handbags
                        </button>
                        <button
                          className='block text-sm text-gray-600 hover:text-black transition-colors duration-200'
                          onClick={() => handleCategoryClick('women-shoes')}
                        >
                          Shoes
                        </button>
                        <button
                          className='block text-sm text-gray-600 hover:text-black transition-colors duration-200'
                          onClick={() => handleCategoryClick('women-accessories')}
                        >
                          Accessories
                        </button>
                      </div>
                    </div>

                    {/* Men Section */}
                    <div className='px-6 py-4 border-b border-gray-100'>
                      <h3 className='text-sm font-normal uppercase tracking-wide text-black mb-3'>MEN</h3>
                      <div className='space-y-2'>
                        <button
                          className='block text-sm text-gray-600 hover:text-black transition-colors duration-200'
                          onClick={() => handleCategoryClick('men-ready-to-wear')}
                        >
                          Ready-To-Wear
                        </button>
                        <button
                          className='block text-sm text-gray-600 hover:text-black transition-colors duration-200'
                          onClick={() => handleCategoryClick('men-bags')}
                        >
                          Bags
                        </button>
                        <button
                          className='block text-sm text-gray-600 hover:text-black transition-colors duration-200'
                          onClick={() => handleCategoryClick('men-shoes')}
                        >
                          Shoes
                        </button>
                        <button
                          className='block text-sm text-gray-600 hover:text-black transition-colors duration-200'
                          onClick={() => handleCategoryClick('men-accessories')}
                        >
                          Accessories
                        </button>
                      </div>
                    </div>

                    {/* Handbags Section */}
                    <div className='px-6 py-4 border-b border-gray-100'>
                      <h3 className='text-sm font-normal uppercase tracking-wide text-black mb-3'>HANDBAGS</h3>
                      <div className='space-y-2'>
                        <button
                          className='block text-sm text-gray-600 hover:text-black transition-colors duration-200'
                          onClick={() => handleCategoryClick('shoulder-bags')}
                        >
                          Shoulder Bags
                        </button>
                        <button
                          className='block text-sm text-gray-600 hover:text-black transition-colors duration-200'
                          onClick={() => handleCategoryClick('top-handle-bags')}
                        >
                          Top Handle Bags
                        </button>
                        <button
                          className='block text-sm text-gray-600 hover:text-black transition-colors duration-200'
                          onClick={() => handleCategoryClick('crossbody-bags')}
                        >
                          Crossbody Bags
                        </button>
                        <button
                          className='block text-sm text-gray-600 hover:text-black transition-colors duration-200'
                          onClick={() => handleCategoryClick('clutches')}
                        >
                          Clutches
                        </button>
                      </div>
                    </div>

                    {/* Gifts Section */}
                    <div className='px-6 py-4'>
                      <h3 className='text-sm font-normal uppercase tracking-wide text-black mb-3'>GIFTS</h3>
                      <div className='space-y-2'>
                        <button
                          className='block text-sm text-gray-600 hover:text-black transition-colors duration-200'
                          onClick={() => handleCategoryClick('gifts-for-her')}
                        >
                          For Her
                        </button>
                        <button
                          className='block text-sm text-gray-600 hover:text-black transition-colors duration-200'
                          onClick={() => handleCategoryClick('gifts-for-him')}
                        >
                          For Him
                        </button>
                        <button
                          className='block text-sm text-gray-600 hover:text-black transition-colors duration-200'
                          onClick={() => navigate('/about')}
                        >
                          Personalization
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Direct Category Links */}
            <button
              className='hidden lg:block text-sm font-normal uppercase tracking-wide text-black hover:opacity-60 transition-opacity duration-200'
              onClick={() => handleCategoryClick('women')}
            >
              WOMEN
            </button>
            <button
              className='hidden lg:block text-sm font-normal uppercase tracking-wide text-black hover:opacity-60 transition-opacity duration-200'
              onClick={() => handleCategoryClick('men')}
            >
              MEN
            </button>
            <button
              className='hidden lg:block text-sm font-normal uppercase tracking-wide text-black hover:opacity-60 transition-opacity duration-200'
              onClick={() => handleCategoryClick('handbags')}
            >
              HANDBAGS
            </button>
          </div>

          {/* Center Logo - absolute centered */}
          <div className='absolute left-1/2 transform -translate-x-1/2 inset-y-0 flex items-center cursor-pointer' onClick={() => navigate("/")}>
            <h1 className={`font-normal text-black transition-all duration-300 leading-none whitespace-nowrap ${scrolled ? 'text-xl md:text-xl tracking-[0.12em]' : 'text-2xl md:text-3xl tracking-[0.12em] md:tracking-[0.18em]'}`}>
              Zoya Elegance
            </h1>
          </div>

          {/* Right Side Menu */}
          <div className='flex items-center space-x-8'>

            {/* Search */}
            <button
              className='text-sm font-normal uppercase tracking-wide text-black hover:opacity-60 transition-opacity duration-200'
              onClick={() => { setShowSearch(prev => !prev); navigate("/collection") }}
            >
              SEARCH
            </button>

            {/* Account */}
            <div className='relative menu-container'>
              <button
                className='text-sm font-normal uppercase tracking-wide text-black hover:opacity-60 transition-opacity duration-200'
                onClick={() => setShowProfile(prev => !prev)}
              >
                YOUR ACCOUNT
              </button>
            </div>

            {/* Bag with Counter */}
            <button
              className='text-sm font-normal uppercase tracking-wide text-black hover:opacity-60 transition-opacity duration-200 relative'
              onClick={() => navigate("/cart")}
            >
              YOUR BAG
              {getCartCount() > 0 && (
                <span className='absolute -top-2 -right-2 w-5 h-5 bg-black text-white text-xs flex items-center justify-center font-normal'>
                  {getCartCount()}
                </span>
              )}
            </button>

            {/* Contact */}
            <button
              className='hidden xl:block text-sm font-normal uppercase tracking-wide text-black hover:opacity-60 transition-opacity duration-200'
              onClick={() => navigate('/contact')}
            >
              CONTACT US
            </button>
          </div>
        </div>
      </nav>

      {/* GUCCI Search Bar */}
      {showSearch && (
        <div className={`fixed w-full bg-white border-b border-gray-200 z-40 transition-all duration-300 ${scrolled ? 'top-[72px]' : 'top-[120px]'
          }`}>
          <div className='px-6 lg:px-12 py-6'>
            <div className='max-w-2xl mx-auto relative'>
              <input
                type="text"
                className='w-full text-lg font-light text-black bg-transparent border-b border-black focus:outline-none pb-2 pr-10'
                placeholder='Search collections...'
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                autoFocus
              />
              <button
                className='absolute right-0 top-0 text-black hover:opacity-60 transition-opacity duration-200'
                onClick={() => setShowSearch(false)}
              >
                <IoSearchCircleSharp className='w-6 h-6' />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* GUCCI Profile Menu */}
      {showProfile && (
        <div className={`fixed right-6 lg:right-12 w-80 bg-white border border-gray-200 shadow-lg z-50 transition-all duration-300 menu-container ${scrolled ? 'top-[72px]' : 'top-[120px]'
          }`}>

          {userData && (
            <div className='p-6 border-b border-gray-200'>
              <p className='text-lg font-normal text-black'>{userData?.name}</p>
              <p className='text-sm text-gray-600 uppercase tracking-wide'>Premium Member</p>
            </div>
          )}

          <div className='py-4'>
            {!userData ? (
              <>
                <button
                  className='block w-full px-6 py-3 text-left text-sm font-normal uppercase tracking-wide text-black hover:bg-gray-50 transition-colors duration-200'
                  onClick={() => { navigate("/login"); setShowProfile(false) }}
                >
                  SIGN IN
                </button>
                <button
                  className='block w-full px-6 py-3 text-left text-sm font-normal uppercase tracking-wide text-black hover:bg-gray-50 transition-colors duration-200'
                  onClick={() => { navigate("/register"); setShowProfile(false) }}
                >
                  CREATE ACCOUNT
                </button>
              </>
            ) : (
              <>
                <button
                  className='block w-full px-6 py-3 text-left text-sm font-normal uppercase tracking-wide text-black hover:bg-gray-50 transition-colors duration-200'
                  onClick={() => { navigate("/order"); setShowProfile(false) }}
                >
                  MY ORDERS
                </button>
                <button
                  className='block w-full px-6 py-3 text-left text-sm font-normal uppercase tracking-wide text-black hover:bg-gray-50 transition-colors duration-200'
                  onClick={() => { navigate("/profile"); setShowProfile(false) }}
                >
                  MY PROFILE
                </button>
                <button
                  className='block w-full px-6 py-3 text-left text-sm font-normal uppercase tracking-wide text-black hover:bg-gray-50 transition-colors duration-200'
                  onClick={() => { handleLogout(); setShowProfile(false) }}
                >
                  SIGN OUT
                </button>
              </>
            )}

            <hr className='my-2 border-gray-200' />

            <button
              className='block w-full px-6 py-3 text-left text-sm font-normal uppercase tracking-wide text-black hover:bg-gray-50 transition-colors duration-200'
              onClick={() => { navigate("/about"); setShowProfile(false) }}
            >
              ABOUT ZOYA ELEGANCE
            </button>
            <button
              className='block w-full px-6 py-3 text-left text-sm font-normal uppercase tracking-wide text-black hover:bg-gray-50 transition-colors duration-200'
              onClick={() => { navigate("/contact"); setShowProfile(false) }}
            >
              CUSTOMER SERVICE
            </button>
          </div>
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
        * {
          font-family: 'Times New Roman', 'Times', serif;
        }
      `}</style>
    </>
  )
}

export default Nav
