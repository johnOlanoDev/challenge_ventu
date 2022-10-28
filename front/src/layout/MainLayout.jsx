import React from 'react'
import './main-layout.scss'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar'
import Navbar from '../components/navbar/Navbar'

const MainLayout = () => {

    
    return (
        <>
            <Sidebar />
            <div className="main">
                <Navbar />
                <div className="main__content">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default MainLayout
