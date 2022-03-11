import React from 'react'
import Home from '../Pages/Home'
import {Routes,Route} from 'react-router-dom'
import Product from '../Pages/Product'

const RoutesComponent = () => {
  return (
   
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products" element={<Product/>}></Route>
    </Routes>
   
  )
}

export default RoutesComponent