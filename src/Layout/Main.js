import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Shared/Footer'
import NavBar from '../Pages/Shared/NavBar'

const Main = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Main