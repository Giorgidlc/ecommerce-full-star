import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import CardsDashboard from '../components/CardsDashboard'
import CardDashboard from '../components/CardDashboard'

const router = createBrowserRouter ([
    {
        path: "/",
        element: <Dashboard />,
        children:[
            {
                path: "/dashboard",
                element: <CardsDashboard />,
                children: [
                    {
                        path:"./products",
                        element: <CardDashboard />
                    }
                ]

            }
        ]
    }

])

export default router