import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../Layout/Dashboard";
import Main from "../Layout/Main";
import Login from "../LoginAndRegister/Login";
import SignUp from "../LoginAndRegister/SignUp";
import AddPhone from "../Pages/Dashboard/AddPhone";
import MangeSellers from "../Pages/Dashboard/MangeSellers";
import Sellers from "../Pages/Dashboard/Sellers";
import Brand from "../Pages/Home/Brand";
import HomePage from "../Pages/Home/HomePage";
import ErrorPage from "../Pages/Shared/ErrorPage";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: '/brand/:id',
                element: <Brand />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            },

        ],
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/dashboard/sellers',
                element: <Sellers />
            },
            {
                path: '/dashboard/addphone',
                element: <AddPhone />
            },
            {
                path: '/dashboard/managesellers',
                element: <MangeSellers />
            },
        ]
    },
])