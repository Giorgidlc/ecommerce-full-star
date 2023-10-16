import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.jsx'
import './styles/css/reset.css'
import ProductsCards from './pages/ProductsCards'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductsCards />
  </React.StrictMode>,
)

