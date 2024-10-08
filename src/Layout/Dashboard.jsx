import React, { useContext, useEffect, useState } from "react";
import { Navigate, NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import Footer from "../Pages/Shared/Footer";
import NavBar from "../Pages/Shared/NavBar";

export const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    fetch(
      `https://phone-garage-server-xi.vercel.app/users?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCurrentUser(data);
      });
  }, [user?.email]);
  const activeCss = ` border-text-info space-y-2 transition-all font-medium !text-accent tracking-wide duration-200 hover:!text-info`;
  const inActiveCss = ` border-text-info space-y-2 transition-all !text-white font-medium tracking-wide duration-200 hover:!text-info`;

  return (
    <div className="max-w-7xl mx-auto">
      <NavBar />
      <div className="lg:hidden px-2 md:px-4 lg:px-0">
        {user && (
          <label
            htmlFor="dashboard-drawer"
            tabIndex={2}
            className="btn btn-ghost lg:hidden absolute z-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        )}
      </div>
      <div className="drawer drawer-mobile mt-[100px]">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />

        <div className="drawer-content px-4 lg:px-10 mt-10 lg:mt-0">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side w-60 lg:w-full md:px-4">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 bg-base-100">
            {currentUser[0]?.isAdmin === true && (
              <>
                <li>
                  <NavLink
                    to="/dashboard/sellers"
                    aria-label=" All Sellers"
                    title=" All Sellers"
                    className={({ isActive }) =>
                      isActive ? activeCss : inActiveCss
                    }
                  >
                    All Sellers
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/buyers"
                    aria-label="All Buyers"
                    title="All Buyers"
                    className={({ isActive }) =>
                      isActive ? activeCss : inActiveCss
                    }
                  >
                    All Buyers
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/dashboard/reportitem"
                    aria-label="Reported items"
                    title="Reported items"
                    className={({ isActive }) =>
                      isActive ? activeCss : inActiveCss
                    }
                  >
                    Reported items
                  </NavLink>
                </li>
              </>
            )}
            {currentUser[0]?.role === "seller" ? (
              <>
                <li>
                  <NavLink
                    to="/dashboard/addphone"
                    aria-label="Add Phone"
                    title="Add Phone"
                    className={({ isActive }) =>
                      isActive ? activeCss : inActiveCss
                    }
                  >
                    Add Phone
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/managemylist"
                    aria-label="Manage My list"
                    title="Manage My list"
                    className={({ isActive }) =>
                      isActive ? activeCss : inActiveCss
                    }
                  >
                    Manage My List
                  </NavLink>
                </li>
              </>
            ) : (
              <></>
            )}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};
