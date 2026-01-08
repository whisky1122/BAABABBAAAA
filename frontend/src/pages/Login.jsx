// Sold Copy By Eliteblaze , dev: Prayag kaushik
import React, { useContext, useState } from 'react'
import Logo from "../assets/logo.png"
import google from '../assets/google.png'
import { useNavigate } from 'react-router-dom'
import { IoEyeOutline, IoEye } from "react-icons/io5"
import { authDataContext } from '../context/AuthContext'
import axios from 'axios'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../utils/Firebase'
import { userDataContext } from '../context/UserContext'
import Loading from '../component/Loading'

// Sold Copy By Eliteblaze , dev: Prayag kaushik
function Login() {
  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  const [show, setShow] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { serverUrl } = useContext(authDataContext)
  const { getCurrentUser } = useContext(userDataContext)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  const handleLogin = async (e) => {
    // Sold Copy By Eliteblaze , dev: Prayag kaushik
    e.preventDefault()
    setLoading(true)
    try {
      // Sold Copy By Eliteblaze , dev: Prayag kaushik
      const result = await axios.post(serverUrl + '/api/auth/login', {
        email, password
      }, { withCredentials: true })
      console.log(result.data)
      getCurrentUser()
      navigate("/")
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  const googlelogin = async () => {
    try {
      console.log("Starting Google Login...");
      const response = await signInWithPopup(auth, provider);
      const user = response.user;
      console.log("Firebase User:", user);
      const name = user.displayName;
      const email = user.email;

      const result = await axios.post(serverUrl + "/api/auth/googlelogin", { name, email }, { withCredentials: true });
      console.log("Backend Response:", result.data);
      if (result.data) {
        getCurrentUser();
        console.log("Navigating to home...");
        // Use a faster navigation method
        window.location.assign("/");
      }
    } catch (error) {
      console.error("Google Login Error:", error);
      // Removed alert for cleaner UX, error is logged
    }
  }

  // Sold Copy By Eliteblaze , dev: Prayag kaushik
  return (
    <div className='min-h-screen bg-white text-black overflow-x-hidden font-serif'>
      
      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
      <nav className='fixed top-0 w-full bg-white border-b border-stone-200 z-50'>
        <div className='max-w-7xl mx-auto px-6 h-16 flex items-center justify-between'>
          <div 
            className='flex items-center gap-3 cursor-pointer group'
            onClick={() => navigate("/")}
          >
            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <div className='w-10 h-10 bg-black rounded flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-300'>
              <img src={Logo} alt="CALY COURTURE" className='w-6 h-6' />
            </div>
            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <h1 className='text-2xl font-light tracking-wide text-black group-hover:text-gray-700 transition-colors duration-300'>
              ZOYA ELEGANCE
            </h1>
          </div>
        </div>
      </nav>

      {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
      <div className='pt-16 min-h-screen flex items-center justify-center px-6 py-12'>
        <div className='w-full max-w-md'>
          
          {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-extralight text-black mb-4 tracking-tight'>
              Welcome Back
            </h2>
            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <p className='text-lg font-light text-gray-600'>
              Sign in to your account
            </p>
          </div>

          {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
          <div className='bg-stone-50 border border-stone-200 p-8 space-y-6'>
            
            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <button 
              type="button"
              onClick={googlelogin}
              className='w-full h-12 bg-white border border-stone-300 text-black flex items-center justify-center gap-3 hover:bg-stone-50 transition-colors duration-300 font-medium'
            >
              <img src={google} alt="Google" className='w-5 h-5' />
              Continue with Google
            </button>

            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <div className='relative'>
              <div className='absolute inset-0 flex items-center'>
                <div className='w-full border-t border-stone-300'></div>
              </div>
              {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
              <div className='relative flex justify-center text-sm'>
                <span className='bg-stone-50 px-4 text-gray-600 uppercase tracking-wide font-medium'>
                  Or
                </span>
              </div>
            </div>

            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <form onSubmit={handleLogin} className='space-y-6'>
              
              {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
              <div>
                <input 
                  type="email" 
                  placeholder='Email address'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='w-full h-12 bg-white border border-stone-300 px-4 text-black placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-300'
                  required 
                />
              </div>

              {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
              <div className='relative'>
                <input 
                  type={show ? "text" : "password"}
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='w-full h-12 bg-white border border-stone-300 px-4 pr-12 text-black placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-300'
                  required 
                />
                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                <button
                  type="button"
                  onClick={() => setShow(!show)}
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

              {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
              <button 
                type="submit"
                disabled={loading}
                className='w-full h-12 bg-black text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 font-medium uppercase tracking-wide'
              >
                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                {loading ? (
                  <div className='flex items-center justify-center gap-2'>
                    <Loading />
                    <span>Signing in...</span>
                  </div>
                ) : (
                  'Sign In'
                )}
              </button>
            </form>

            {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
            <div className='text-center pt-4 border-t border-stone-300'>
              <p className='text-gray-600 font-light'>
                Don't have an account?{' '}
                {/* Sold Copy By Eliteblaze , dev: Prayag kaushik */}
                <button 
                  onClick={() => navigate("/signup")}
                  className='text-black hover:underline font-medium transition-all duration-300'
                >
                  Create Account
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Sold Copy By Eliteblaze , dev: Prayag kaushik
export default Login
