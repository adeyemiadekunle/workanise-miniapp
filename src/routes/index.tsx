import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import { AuthLayout, DashboardLayout} from "../components/layout";


import { Home, Tasks, Web3, Friends, Auth } from "../features";


export const DashboardRoutes:RouteObject[] = [
   {index: true, element:<Home/>},
   {path: '/tasks', element:<Tasks/>},
   {path: '/friends', element:<Friends/>},
   {path: '/web3', element:<Web3/>}
]



export const AuthRoutes: RouteObject[] = [
   {
     index: true,
     element: <Navigate to="/auth/login" />,
   },
   {
     path: "login",
     element: <Auth />,
   },
 ]


 export const routes = createBrowserRouter([
   {
     path: "/",
     element: <Navigate to="/auth/login" />,
   },
   {
     path: "/auth",
     element: <AuthLayout />,
     children: AuthRoutes,
   },
   {
     path: "/",
     element: <DashboardLayout />,
     children: DashboardRoutes,
   },
   {
     path: "*",
     element: <Navigate to="/" />,
   },
 ]);