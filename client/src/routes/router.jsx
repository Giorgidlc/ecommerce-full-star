import { createBrowserRouter } from 'react-router-dom'
import { loaderGetProducts } from './Home.route.js'
import ErrorPage from '../pages/ErrorPage.jsx'
import Home from '../pages/Home.jsx'
import DetailsProducts from '../components/ProductDetails.jsx'
import ProductsCards from '../pages/ProductsCards.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      
      {
        path: "products/:productId",
        element: <DetailsProducts />
      }
    ]
    
  },
  {
    path: "/products",
    element: <ProductsCards />,
    loader: loaderGetProducts,
  },
 
])


export default router

