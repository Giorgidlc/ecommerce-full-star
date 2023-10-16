import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home.jsx'
import ProductsCards from '../pages/ProductsCards.jsx'

const Root = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/view-list' element={<ProductsCards />} />
      </Routes>
      
      
    </> 
  )
}

export default Root