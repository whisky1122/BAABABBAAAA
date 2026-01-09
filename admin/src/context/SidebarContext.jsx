// Sold Copy By Eliteblaze , dev: Prayag kaushik
import React, { createContext, useState } from 'react'

// Sold Copy By Eliteblaze , dev: Prayag kaushik
export const sidebarContext = createContext()

// Sold Copy By Eliteblaze , dev: Prayag kaushik
function SidebarContextProvider(props) {
    // Sold Copy By Eliteblaze , dev: Prayag kaushik
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    // Sold Copy By Eliteblaze , dev: Prayag kaushik
    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev)
    }

    // Sold Copy By Eliteblaze , dev: Prayag kaushik
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    // Sold Copy By Eliteblaze , dev: Prayag kaushik
    const value = {
        isSidebarOpen,
        toggleSidebar,
        closeSidebar
    }

    // Sold Copy By Eliteblaze , dev: Prayag kaushik
    return (
        <sidebarContext.Provider value={value}>
            {props.children}
        </sidebarContext.Provider>
    )
}

// Sold Copy By Eliteblaze , dev: Prayag kaushik
export default SidebarContextProvider
