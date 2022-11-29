import React, { useContext, useEffect, useState } from 'react'
import { Navigate, NavLink, Outlet } from 'react-router-dom'
import { AuthContext } from '../Context/AuthProvider'
import Footer from '../Pages/Shared/Footer'
import NavBar from '../Pages/Shared/NavBar'


export const Dashboard = () => {


    const [currentUser, setCurrentUser] = useState(null)
    const { user } = useContext(AuthContext)

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/users/${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    setCurrentUser(data)
                })

        }
    }, [user])
    const activeCss = `hover:border-b-2 border-text-info transition-all font-medium !text-accent tracking-wide duration-200 hover:!text-info`
    const inActiveCss = `hover:border-b-2 border-text-info transition-all !text-white font-medium tracking-wide duration-200 hover:!text-info`


    return (

        <>
            <NavBar />
            <div className='mb-10 lg:hidden'>
                {
                    user && <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden absolute z-50 animate-pulse">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                }
            </div>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content px-4 lg:px-10 no-scrollbar z-30 h-full ">

                    <Outlet></Outlet>
                </div>
                <div className="drawer-side z-30">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay "></label>
                    <ul className="menu p-4 w-80 bg-base-100">
                        {
                            !currentUser?.role === 'seller' ? <Navigate to='/login' /> : <>
                                <li>
                                    <NavLink
                                        to='/dashboard/sellers'
                                        aria-label=' All Sellers'
                                        title=' All Sellers'
                                        className={({ isActive }) => isActive ? activeCss : inActiveCss}
                                    >
                                        All Sellers
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/dashboard/buyers'
                                        aria-label='All Buyers'
                                        title='All Buyers'
                                        className={({ isActive }) => isActive ? activeCss : inActiveCss}
                                    >
                                        All Buyers
                                    </NavLink>
                                </li>
                            </>
                        }

                        <li>
                            <NavLink
                                to='/dashboard/addphone'
                                aria-label='Add Phone'
                                title='Add Phone'
                                className={({ isActive }) => isActive ? activeCss : inActiveCss}
                            >
                                Add Phone
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/dashboard/managemylist'
                                aria-label='Manage My list'
                                title='Manage My list'
                                className={({ isActive }) => isActive ? activeCss : inActiveCss}
                            >
                                Manage My List
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/dashboard/reportitem'
                                aria-label='Reported items'
                                title='Reported items'
                                className={({ isActive }) => isActive ? activeCss : inActiveCss}
                            >
                                Reported items
                            </NavLink>
                        </li>
                    </ul>

                </div>
            </div>
            <Footer />
        </>

    )
}
