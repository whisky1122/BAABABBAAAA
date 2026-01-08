import React, { useContext, useEffect } from 'react'
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Add from './pages/Add'
import Lists from './pages/Lists'
import Orders from './pages/Orders'
import Login from './pages/Login'
import { adminDataContext } from './context/AdminContext'
  import { ToastContainer, toast } from 'react-toastify';

function App() {
  let {adminData} = useContext(adminDataContext)
  const navigate = useNavigate()
  const location = useLocation()

  // Redirect to home when admin logs in successfully
  useEffect(() => {
    if (adminData) {
      // If admin is logged in and on login route, redirect to home
      if (location.pathname === '/login') {
        navigate('/', { replace: true })
      }
    }
  }, [adminData, location.pathname, navigate])

  return (

    <>
      <ToastContainer />
    {!adminData ? <Login/> : <>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/lists' element={<Lists/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </>
      }
    </>
  )
}

export default App
