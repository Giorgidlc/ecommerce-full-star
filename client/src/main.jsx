import React from 'react'
import './styles/css/reset.css'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.jsx'

import ProductsCards from './pages/ProductsCards'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <ProductsCards />
  </React.StrictMode>,
)

