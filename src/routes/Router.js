import { createBrowserRouter } from "react-router-dom";
import ETHHistory from "../components/RequestHistory/ETHHistory";
import TestLinkHistory from "../components/RequestHistory/TestLinkHistory";
import Main from "../layouts/Main";
import FAQ from "../pages/FAQ/FAQ";
import HomePage from "../pages/HomePage/HomePage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
        children: [
          {path:'/',element:<ETHHistory></ETHHistory>},
          {path:'/eth',element: <ETHHistory></ETHHistory>},
          {path:'/testLink',element: <TestLinkHistory></TestLinkHistory>},
        ]
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
    ],
  },
]);
