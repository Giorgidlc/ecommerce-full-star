import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";


const router = createBrowserRouter ([
    {
        path: "/dashboard",
        element: <Dashboard />


    }

])

export default router