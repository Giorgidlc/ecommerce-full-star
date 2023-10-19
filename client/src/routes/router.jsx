import { createBrowserRouter } from 'react-router-dom'
import {  loaderGetProduct } from './Home.route.js'
import Home from '../pages/Home.jsx'
import ProductsCards from '../pages/ProductsCards.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader:  loaderGetProduct, 
  },

  {
    path: "/products",
    element: <ProductsCards />,
    loader: loaderGetProduct,
  }
])


export default router