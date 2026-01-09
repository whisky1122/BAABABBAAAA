import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Add from './pages/Add'
import Lists from './pages/Lists'
import Orders from './pages/Orders'
import Login from './pages/Login'
import { adminDataContext } from './context/AdminContext'
import SidebarContextProvider from './context/SidebarContext'
import { ToastContainer, toast } from 'react-toastify';

function App() {
  let { adminData, loading } = useContext(adminDataContext)

  // Show loading state while checking authentication
  if (loading) {
    return (
      <>
        <ToastContainer />
        <div className='min-h-screen bg-white flex items-center justify-center'>
          <div className='text-center'>
            <div className='w-12 h-12 border-4 border-stone-300 border-t-black rounded-full animate-spin mx-auto mb-4'></div>
            <p className='text-lg font-light text-gray-600'>Loading...</p>
          </div>
        </div>
      </>
    )
  }

  return (

    <>
      <ToastContainer />
      {!adminData ? <Login /> :
        <SidebarContextProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/add' element={<Add />} />
            <Route path='/lists' element={<Lists />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </SidebarContextProvider>
      }
    </>
  )
}

export default App
