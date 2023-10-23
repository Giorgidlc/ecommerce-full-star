import { createBrowserRouter } from "react-router-dom"
import Login from "../pages/Login"
import loaderUser from "./login.route"

const router = createBrowserRouter ([
    {
        path: "/login",
        element: <Login/>,
        loader: loaderUser,

    }
]) 

export default router