// Sold Copy By Eliteblaze , dev: Prayag kaushik
import React, { useContext, useState } from 'react'
import logo from '../assets/logo.png'
import { IoEyeOutline, IoEye } from "react-icons/io5"
import axios from 'axios'
import { authDataContext } from '../context/AuthContext'
import { adminDataContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

// Sold Copy By Eliteblaze , dev: Prayag kaushik
function Login() {
  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  const [show, setShow] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { serverUrl } = useContext(authDataContext)
  const { getAdmin } = useContext(adminDataContext)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  const AdminLogin = async (e) => {
    // Sold Copy By Eliteblaze , dev: Prayag kaushik
    e.preventDefault()
    setLoading(true)
    try {
      // Sold Copy By Eliteblaze , dev: Prayag kaushik
      const result = await axios.post(serverUrl + '/api/auth/adminlogin', { email, password }, { withCredentials: true })
      console.log(result.data)
      toast.success("Admin Login Successfully")
      await getAdmin()
      navigate("/")
    } catch (error) {
      console.log(error)
      toast.error("Admin Login Failed")
    } finally {
      setLoading(false)
    }
  }

  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  return (
    <div className='min-h-screen bg-white text-black overflow-x-hidden relative font-serif'>
      
      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
      <section className='py-16 px-6 bg-black text-white'>
        <div className='max-w-7xl mx-auto'>
          
          {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
          <div className='flex items-center gap-3 mb-12'>
            <div className='w-10 h-10 bg-white rounded flex items-center justify-center'>
              <img 
                src={logo} 
                alt="Frozelia Logo" 
                className='w-6 h-6 object-contain'
              />
            </div>
            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <h1 className='text-2xl font-light tracking-wide text-white'>
              FROZELIA
            </h1>
          </div>

          {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
          <div className='text-center'>
            <span className='text-xs font-light tracking-[0.6em] uppercase text-gray-300 block mb-4'>
              Admin Access
            </span>
            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <h1 className='text-5xl lg:text-6xl font-extralight tracking-tight mb-6'>
              ADMIN LOGIN
            </h1>
            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <div className='flex items-center justify-center mb-6'>
              <div className='w-8 h-px bg-white'></div>
              <div className='w-2 h-2 bg-white rounded-full mx-4'></div>
              <div className='w-8 h-px bg-white'></div>
            </div>
            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <p className='text-lg font-light text-gray-300 max-w-2xl mx-auto'>
              Enter your credentials to access the admin dashboard
            </p>
          </div>
        </div>
      </section>

      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
      <section className='py-20 px-6 bg-white flex items-center justify-center'>
        <div className='w-full max-w-md'>
          
          {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
          <div className='bg-stone-50 border border-stone-200 rounded-lg p-8 shadow-lg'>
            
            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <form onSubmit={AdminLogin} className='space-y-6'>
              
              {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
              <div>
                <label className='block text-lg font-medium text-black mb-3 uppercase tracking-wide'>
                  Email Address
                </label>
                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                <input 
                  type="email" 
                  placeholder='Enter your email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='w-full h-12 bg-white border border-stone-300 px-4 text-black placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-300'
                  required
                />
              </div>

              {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
              <div>
                <label className='block text-lg font-medium text-black mb-3 uppercase tracking-wide'>
                  Password
                </label>
                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                <div className='relative'>
                  <input 
                    type={show ? "text" : "password"}
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='w-full h-12 bg-white border border-stone-300 px-4 pr-12 text-black placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-300'
                    required
                  />
                  {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                  <button
                    type="button"
                    onClick={() => setShow(prev => !prev)}
                    className='absolute inset-y-0 right-0 flex items-center pr-4'
                  >
                    {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                    {show ? (
                      <IoEye className='w-5 h-5 text-gray-600 hover:text-black transition-colors duration-300' />
                    ) : (
                      <IoEyeOutline className='w-5 h-5 text-gray-600 hover:text-black transition-colors duration-300' />
                    )}
                  </button>
                </div>
              </div>

              {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
              <button 
                type="submit"
                disabled={loading}
                className='w-full h-12 bg-black text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed font-medium uppercase tracking-wide transition-colors duration-300 flex items-center justify-center gap-3'
              >
                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                {loading ? (
                  <>
                    <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                    <span>Logging in...</span>
                  </>
                ) : (
                  'Login'
                )}
              </button>
            </form>

            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <div className='mt-8 pt-6 border-t border-stone-300 text-center'>
              <p className='text-sm text-gray-600 font-light'>
                Access restricted to authorized administrators only
              </p>
            </div>
          </div>

          {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
          <div className='text-center mt-8'>
            <p className='text-sm text-gray-500 font-light'>
              © 2025 Frozelia. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

// Sold Copy By Eliteblaze , dev: Prayag kaushik
export default Login
