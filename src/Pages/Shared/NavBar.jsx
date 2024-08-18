// import React, { useContext, useEffect, useState } from "react";
// import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import logo from "../../assets/logo.jpg";
// import { AuthContext } from "../../Context/AuthProvider";

// const NavBar = () => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const { user, logOut } = useContext(AuthContext);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const handleLogout = () => {
//     logOut().then((res) => {
//       Swal.fire("Logout successfull");
//       navigate(from, { replace: true });
//     });
//   };
//   useEffect(() => {
//     if (user?.email) {
//       fetch(`https://phone-garage-server-xi.vercel.app/users/${user?.email}`)
//         .then((res) => res.json())
//         .then((data) => {
//           setCurrentUser(data);
//         });
//     }
//   }, [user]);

//   const location = useLocation();
//   const navigate = useNavigate();
//   const from = location?.state?.from.pathname || "/";
//   const activeCss = `hover:border-b-2 border-text-info transition-all font-medium !text-accent tracking-wide duration-200 hover:!text-info`;
//   const inActiveCss = `hover:border-b-2 border-text-info transition-all !text-white font-medium tracking-wide duration-200 hover:!text-info`;
//   const menu = (
//     <>
//       <li li>
//         <NavLink
//           to="/"
//           aria-label="Home"
//           title="Home"
//           className={({ isActive }) => (isActive ? activeCss : inActiveCss)}
//         >
//           Home
//         </NavLink>
//       </li>

//       {user && (
//         <>
//           <li>
//             <NavLink
//               to="/mybooking"
//               aria-label="My booking"
//               title="My booking"
//               className={({ isActive }) => (isActive ? activeCss : inActiveCss)}
//             >
//               My booking
//             </NavLink>
//           </li>
//         </>
//       )}
//       <li>
//         <NavLink
//           to="/blog"
//           aria-label="blog"
//           title="blog"
//           className={({ isActive }) => (isActive ? activeCss : inActiveCss)}
//         >
//           Blog
//         </NavLink>
//       </li>

//       {currentUser?.isAdmin === true || currentUser?.role === "seller" ? (
//         <>
//           <li>
//             <NavLink
//               to="/dashboard"
//               aria-label="dashboard"
//               title="dashboard"
//               className={({ isActive }) => (isActive ? activeCss : inActiveCss)}
//             >
//               Dashboard
//             </NavLink>
//           </li>
//         </>
//       ) : (
//         <></>
//       )}

//       {user ? (
//         <>
//           <li>
//             <NavLink onClick={handleLogout} className={inActiveCss}>
//               Logout
//             </NavLink>
//           </li>
//           <li>
//             <NavLink className="avatar" title={user?.displayName}>
//               <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
//                 <img src={user?.photoURL} alt="" />
//               </div>
//             </NavLink>
//           </li>
//         </>
//       ) : (
//         <>
//           <li>
//             <NavLink
//               to="/login"
//               aria-label="Login"
//               title="Login"
//               className={({ isActive }) => (isActive ? activeCss : inActiveCss)}
//             >
//               Login
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/signup"
//               aria-label="sign up"
//               title="sign up"
//               className={({ isActive }) => (isActive ? activeCss : inActiveCss)}
//             >
//               Sign up
//             </NavLink>
//           </li>
//         </>
//       )}
//     </>
//   );

//   return (
//     <div className="px-4 z-50 py-5 w-full mx-auto sm:max-w-full md:max-w-full lg:w-full md:px-24 lg:px-10">
//       <div className="relative flex items-center justify-between">
//         <NavLink
//           aria-label="Scissors n razors"
//           title="Scissors n razors"
//           className="inline-flex items-center space-x-3"
//         >
//           <img className="h-16 md:h-20 w-40 rounded-xl" src={logo} alt="logo" />
//         </NavLink>
//         <ul className="items-center hidden space-x-8 lg:flex">{menu}</ul>
//         <div className="lg:hidden z-50">
//           <button
//             aria-label="Open Menu"
//             title="Open Menu"
//             className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
//             onClick={() => setIsMenuOpen(true)}
//           >
//             <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
//               <path
//                 fill="currentColor"
//                 d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
//               />
//               <path
//                 fill="currentColor"
//                 d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
//               />
//               <path
//                 fill="currentColor"
//                 d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
//               />
//             </svg>
//           </button>
//           {isMenuOpen && (
//             <div className="absolute top-0 left-0 w-full bg-slate-500">
//               <div className="p-5 bg-gradient-to-r border rounded shadow-sm">
//                 <div className="flex items-center justify-between mb-4">
//                   <div>
//                     <button
//                       aria-label="Close Menu"
//                       title="Close Menu"
//                       className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
//                       onClick={() => setIsMenuOpen(false)}
//                     >
//                       <svg className="w-5 text-yellow-500" viewBox="0 0 24 24">
//                         <path
//                           fill="currentColor"
//                           d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
//                         />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//                 <nav>
//                   <ul className="space-y-4">{menu}</ul>
//                 </nav>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavBar;

import React, { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import logo from "../../assets/logo.jpg";
import { AuthContext } from "../../Context/AuthProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentUser, setCurrentUser] = useState(null);

  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleLogout = async () => {
    try {
      await logOut();
      Swal.fire("Logout successful");
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  const isActive = (path) => location.pathname === path;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    if (user?.email) {
      fetch(`https://phone-garage-server-xi.vercel.app/users/${user?.email}`)
        .then((res) => res.json())
        .then((data) => setCurrentUser(data));
    }

    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [user, lastScrollY, controlNavbar]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className="bg-[#0D0735]/50 text-white fixed top-0 w-full transition-all duration-500 z-[999] backdrop-blur-md md:backdrop:blur-sm max-w-7xl py-5"
    >
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-[100] w-full">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={handleToggle}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center mx-auto sm:items-stretch sm:justify-between w-full">
            <div className="flex-shrink-0">
              <NavLink to="/" onClick={handleClose}>
                <img src={logo} alt="logo" height={100} width={100} />
              </NavLink>
            </div>
            {/* Desktop navigation menu */}
            <div className="hidden sm:flex sm:ml-2 justify-center items-center ">
              <div className="flex md:space-x-0 lg:space-x-4 items-center">
                <NavLink
                  to="/"
                  className={`px-3 py-2 rounded-md text-md font-medium ${
                    isActive("/")
                      ? "bg-gray-900"
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className={`px-3 py-2 rounded-md text-md font-medium ${
                    isActive("/about")
                      ? "bg-gray-900"
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  About
                </NavLink>
                {currentUser?.isAdmin || currentUser?.role === "seller" ? (
                  <NavLink
                    to="/dashboard"
                    className={`px-3 py-2 rounded-md text-md font-medium ${
                      isActive("/dashboard")
                        ? "bg-gray-900"
                        : "text-gray-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    Dashboard
                  </NavLink>
                ) : null}
                {user ? (
                  <>
                    <NavLink
                      to="/mybooking"
                      className={`px-3 py-2 rounded-md text-md font-medium ${
                        isActive("/mybooking")
                          ? "bg-gray-900"
                          : "text-gray-300 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      My Booking
                    </NavLink>
                    <NavLink
                      to="/blog"
                      className={`px-3 py-2 rounded-md text-md font-medium ${
                        isActive("/blog")
                          ? "bg-gray-900"
                          : "text-gray-300 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      Blog
                    </NavLink>
                    <NavLink
                      onClick={handleLogout}
                      className="px-3 py-2 rounded-md text-md font-medium text-gray-300 hover:bg-white/10 hover:text-white"
                    >
                      Logout
                    </NavLink>
                    <NavLink className="avatar" title={user?.displayName}>
                      <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL} alt="avatar" />
                      </div>
                    </NavLink>
                  </>
                ) : (
                  <>
                    <NavLink
                      to="/login"
                      className={`px-3 py-2 rounded-md text-md font-medium ${
                        isActive("/login")
                          ? "bg-gray-900"
                          : "text-gray-300 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      Login
                    </NavLink>
                    <NavLink
                      to="/signup"
                      className={`px-3 py-2 rounded-md text-md font-medium ${
                        isActive("/signup")
                          ? "bg-gray-900"
                          : "text-gray-300 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      Sign Up
                    </NavLink>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="sm:hidden overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <NavLink
            to="/"
            onClick={handleClose}
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive("/")
                ? "bg-gray-900"
                : "text-gray-300 hover:bg-white/10 hover:text-white"
            }`}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={handleClose}
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive("/about")
                ? "bg-gray-900"
                : "text-gray-300 hover:bg-white/10 hover:text-white"
            }`}
          >
            About
          </NavLink>
          {currentUser?.isAdmin || currentUser?.role === "seller" ? (
            <NavLink
              to="/dashboard"
              onClick={handleClose}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/dashboard")
                  ? "bg-gray-900"
                  : "text-gray-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              Dashboard
            </NavLink>
          ) : null}
          <NavLink
            to="/mybooking"
            onClick={handleClose}
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive("/mybooking")
                ? "bg-gray-900"
                : "text-gray-300 hover:bg-white/10 hover:text-white"
            }`}
          >
            My Booking
          </NavLink>
          <NavLink
            to="/blog"
            onClick={handleClose}
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive("/blog")
                ? "bg-gray-900"
                : "text-gray-300 hover:bg-white/10 hover:text-white"
            }`}
          >
            Blog
          </NavLink>
          {user ? (
            <>
              <NavLink
                onClick={handleLogout}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white"
              >
                Logout
              </NavLink>
              <NavLink className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white">
                <div className="avatar" title={user?.displayName}>
                  <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user?.photoURL} alt="avatar" />
                  </div>
                </div>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                onClick={handleClose}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive("/login")
                    ? "bg-gray-900"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                onClick={handleClose}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive("/signup")
                    ? "bg-gray-900"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                Sign Up
              </NavLink>
            </>
          )}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
