import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../LoginAndRegister/Login";
import SignUp from "../LoginAndRegister/SignUp";
import Brand from "../Pages/Home/Brand";
import HomePage from "../Pages/Home/HomePage";
import ErrorPage from "../Pages/Shared/ErrorPage";

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

        ]
    }
])