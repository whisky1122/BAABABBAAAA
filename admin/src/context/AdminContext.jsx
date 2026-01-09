import React, { createContext, useContext, useEffect, useState } from 'react'
import { authDataContext } from './AuthContext'
import axios from 'axios'

export const adminDataContext = createContext()
function AdminContext({ children }) {
  let [adminData, setAdminData] = useState(null)
  let [loading, setLoading] = useState(true) // Add loading state
  let { serverUrl } = useContext(authDataContext)


  const getAdmin = async () => {
    try {
      setLoading(true)
      let result = await axios.get(serverUrl + "/api/user/getadmin", { withCredentials: true })

      setAdminData(result.data)
      console.log(result.data)
      return result.data
    } catch (error) {
      setAdminData(null)
      console.log(error)
      return null
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getAdmin()
  }, [])


  let value = {
    adminData, setAdminData, getAdmin, loading
  }
  return (
    <div>
      <adminDataContext.Provider value={value}>
        {children}
      </adminDataContext.Provider>

    </div>
  )
}

export default AdminContext