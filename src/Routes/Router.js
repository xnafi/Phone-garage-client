import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../Layout/Dashboard";
import Main from "../Layout/Main";
import Login from "../LoginAndRegister/Login";
import SignUp from "../LoginAndRegister/SignUp";
import AddPhone from "../Pages/Dashboard/AddPhone";
import Buyers from "../Pages/Dashboard/Buyers";
import DashBoardHome from "../Pages/Dashboard/DashBoardHome";
import ManageMyList from "../Pages/Dashboard/ManageMyList";
import ReportedItems from "../Pages/Dashboard/ReportedItems";
import Sellers from "../Pages/Dashboard/Sellers";
import Blog from "../Pages/Home/Blog";
import Brand from "../Pages/Home/Brand";
import HomePage from "../Pages/Home/HomePage";
import MyBooking from "../Pages/Home/MyBooking";
import Payment from "../Pages/Payment/Payment";
import ErrorPage from "../Pages/Shared/ErrorPage";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/brand/:id",
        loader: ({ params }) =>
          fetch(`https://phone-garage-server-xi.vercel.app/brand/${params.id}`),
        element: <Brand />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/mybooking",
        element: <MyBooking />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/payment/:id",
        loader: ({ params }) =>
          fetch(
            `https://phone-garage-server-xi.vercel.app/booking/${params.id}`
          ),
        element: <Payment />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <DashBoardHome />,
      },
      {
        path: "/dashboard/sellers",
        element: <Sellers />,
      },
      {
        path: "/dashboard/buyers",
        element: <Buyers />,
      },
      {
        path: "/dashboard/addphone",
        element: <AddPhone />,
      },
      {
        path: "/dashboard/managemylist",
        element: <ManageMyList />,
      },
      {
        path: "/dashboard/reportitem",
        element: <ReportedItems />,
      },
    ],
  },
]);
