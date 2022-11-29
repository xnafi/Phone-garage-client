import React, { useContext, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import logo from '../../assets/logo.jpg';
import { AuthContext } from '../../Context/AuthProvider';


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const handleLogout = () => {
        logOut()
            .then(res => {
                Swal.fire('Logout successfull')
                navigate(from, { replace: true })
            })
    }
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from.pathname || '/'
    const activeCss = `hover:border-b-2 border-text-info transition-all font-medium !text-accent tracking-wide duration-200 hover:!text-info`
    const inActiveCss = `hover:border-b-2 border-text-info transition-all !text-white font-medium tracking-wide duration-200 hover:!text-info`
    const menu =
        <>
            <li li >
                <NavLink
                    to='/'
                    aria-label='Home'
                    title='Home'
                    className={({ isActive }) => isActive ? activeCss : inActiveCss}
                >
                    Home
                </NavLink>
            </li>

            {
                user &&
                <>
                    <li>
                        <NavLink
                            to='/mybooking'
                            aria-label='My booking'
                            title='My booking'
                            className={({ isActive }) => isActive ? activeCss : inActiveCss}
                        >
                            My booking
                        </NavLink>
                    </li>
                </>
            }


            <li>
                <NavLink
                    to='/blog'
                    aria-label='blog'
                    title='blog'
                    className={({ isActive }) => isActive ? activeCss : inActiveCss}
                >
                    Blog
                </NavLink>
            </li>

            {
                user ?
                    <>
                        <li>
                            <NavLink
                                to='/dashboard'
                                aria-label='dashboard'
                                title='dashboard'
                                className={({ isActive }) => isActive ? activeCss : inActiveCss}
                            >
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                onClick={handleLogout}
                                className={inActiveCss}
                            >
                                Logout
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="avatar" title={user?.displayName}>
                                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={user?.photoURL} />
                                </div>
                            </NavLink>
                        </li>
                    </>
                    : <>
                        <li>
                            <NavLink
                                to='/login'
                                aria-label='Login'
                                title='Login'
                                className={({ isActive }) => isActive ? activeCss : inActiveCss}
                            >
                                Login
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/signup'
                                aria-label='sign up'
                                title='sign up'
                                className={({ isActive }) => isActive ? activeCss : inActiveCss}
                            >
                                Sign up
                            </NavLink>
                        </li>
                    </>
            }


        </>

    return (
        <div className='px-4 z-50 py-5 w-full mx-auto sm:max-w-full md:max-w-full lg:w-full md:px-24 lg:px-10'>
            <div className='relative flex items-center justify-between'>
                <NavLink
                    aria-label='Scissors n razors'
                    title='Scissors n razors'

                    className='inline-flex items-center space-x-3'
                >
                    <img className='h-16 md:h-20 w-40 rounded-xl' src={logo} alt="logo" />
                </NavLink>
                <ul className='items-center hidden space-x-8 lg:flex'>
                    {menu}
                </ul>
                <div className='lg:hidden z-50'>
                    <button
                        aria-label='Open Menu'
                        title='Open Menu'
                        className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                            <path
                                fill='currentColor'
                                d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                            />
                            <path
                                fill='currentColor'
                                d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                            />
                            <path
                                fill='currentColor'
                                d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div className='absolute top-0 left-0 w-full bg-slate-500'>
                            <div className='p-5 bg-gradient-to-r border rounded shadow-sm'>
                                <div className='flex items-center justify-between mb-4'>
                                    <div>
                                        <button
                                            aria-label='Close Menu'
                                            title='Close Menu'
                                            className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className='w-5 text-yellow-500' viewBox='0 0 24 24'>
                                                <path
                                                    fill='currentColor'
                                                    d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className='space-y-4'>
                                        {menu}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default NavBar