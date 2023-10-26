import { createBrowserRouter } from 'react-router-dom'
import { loaderGetProducts } from './Home.route.js'
import ErrorPage from '../pages/ErrorPage.jsx'
import Home from '../pages/Home.jsx'
import Login from '../pages/Login.jsx'
import DetailsProducts from '../components/ProductDetails.jsx'
import ProductsCards from '../pages/ProductsCards.jsx'
import loaderUser from './login.route.js'
import SignUpForm from '../pages/SignUpForm.jsx'

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
  {
    path: "/login",
    element: <Login />,
    

  },
  {
    path: "/register",
    element: <SignUpForm />,
  
  }

])


export default router

