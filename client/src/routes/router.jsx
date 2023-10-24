import { createBrowserRouter } from 'react-router-dom'
import { loaderGetProducts as rootLoader } from './Home.route.js'
import ErrorPage from '../pages/ErrorPage.jsx'
import Home from '../pages/Home.jsx'
import DetailsProducts from '../components/DetailsProducts.jsx'
import ProductsCards from '../pages/ProductsCards.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      
      {
        path: "products/:productId",
        element: <DetailsProducts />
      }
    ]
    
  },
  {
    path: "products",
    element: <ProductsCards />,
    loader: rootLoader,
  },
 
])


export default router

