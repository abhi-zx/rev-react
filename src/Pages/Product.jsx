import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const Product = () => {
    const [data,setData]= useState(null)
    const [loading,setLoading]= useState(false)

    const getAllProducts=()=>{
        setLoading(true);
        axios({
            method:'get',
            url:"https://fakestoreapi.com/products"
        }).then(res=>setData(res.data))
        .catch(error=>console.error(error))
        .finally(()=>setLoading(false))
    }
useEffect(()=>{
getAllProducts();
},[])
  return (
   <>
   <h1>This is Product Page</h1>
   {loading && <h2>Loading....</h2>}
   {!loading && data && data.map((item)=>{
       return <Link key= {item.id} to={`/products/${item.id}`}>{item.title}</Link>
   })}
   </>
  )
}

export default Product