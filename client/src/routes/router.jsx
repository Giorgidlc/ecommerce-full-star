import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage.jsx'
import Home from '../pages/Home.jsx'
import ProductsCards from '../pages/ProductsCards.jsx'
import { loaderServices } from '../utils/service.routeLoader.js'
import Header from '../components/Header.jsx'
import loaderProductsByCategory from '../services/services.js'
/* import Login from '../pages/Login.jsx'
import loaderUser from './login.route.js'
import SignUpForm from '../pages/SignUpForm.jsx' */

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    loader: loaderServices,
  },
  {
    path: "/products",
    element: <ProductsCards />,
    errorElement: <ErrorPage />,
    loader: loaderServices,
  },

  {
    path: "/header",
    element: <Header />,
    loader: loaderProductsByCategory
  }
 /*  {
    path: "/login",
    element: <Login />,
    loader: loaderUser,

  },
  {
    path: "/register",
    element: <SignUpForm />,
    loader: loaderUser,
  } */

])


export default router

