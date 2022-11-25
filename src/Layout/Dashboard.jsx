import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import Footer from '../Pages/Shared/Footer'
import NavBar from '../Pages/Shared/NavBar'


export const Dashboard = () => {

    const activeCss = `hover:border-b-2 border-text-info transition-all font-medium !text-accent tracking-wide duration-200 hover:!text-info`
    const inActiveCss = `hover:border-b-2 border-text-info transition-all !text-white font-medium tracking-wide duration-200 hover:!text-info`
    return (

        <>
            <NavBar />
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content mt-8">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80">
                        <li>
                            <NavLink
                                to='/dashboard/sellers'
                                aria-label='my list'
                                title='my list'
                                className={({ isActive }) => isActive ? activeCss : inActiveCss}
                            >
                                My List
                            </NavLink>
                        </li>
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
                                to='/dashboard/managesellers'
                                aria-label='Manage Seller'
                                title='Manage Seller'
                                className={({ isActive }) => isActive ? activeCss : inActiveCss}
                            >
                                Manage Seller
                            </NavLink>
                        </li>
                    </ul>

                </div>
            </div>
            <Footer />
        </>

    )
}
