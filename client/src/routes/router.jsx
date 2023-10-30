import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage.jsx'
import Home from '../pages/Home.jsx'
import ProductsCards from '../pages/ProductsCards.jsx'
import loaderProductsByCategory from '../services/services.js'
import Login from '../pages/Login.jsx'
//import loaderUser from './login.route.js'
import SignUpForm from '../pages/SignUpForm.jsx'

const router = createBrowserRouter([
  {
    path: "/product/:categoryId",
    element: <Home />,
    errorElement: <ErrorPage />,
    loader: loaderProductsByCategory,
  },
  {
    path: "/products/:categoryId",
    element: <ProductsCards />,
    errorElement: <ErrorPage />,
    loader: loaderProductsByCategory,
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

