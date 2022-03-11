import React from 'react'
import Home from '../Pages/Home'
import {Routes,Route} from 'react-router-dom'
import Product from '../Pages/Product'
import SingleProduct from '../Pages/SingleProduct'
import Login from '../components/Login'

const RoutesComponent = () => {
  return (
   
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products" element={<Product/>}></Route>
        <Route path="/products/:productId" element={<SingleProduct/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
    </Routes>
   
  )
}

export default RoutesComponent