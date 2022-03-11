import React from 'react'
import { useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const SingleProduct = () => {
    const {productId} =useParams()
    const [data,setData]= useState(null)
    useEffect(() => {
        axios({
            method: 'get',
            url:`https://fakestoreapi.com/products/${productId}`
        }).then((res) =>setData(res.data))
        .catch((err) =>console.error(err))
        // show(data)
    },[])
    // const show= (data) => {
    //     console.log(data)
    // }
  return (
   <>
   <h1>Single Product</h1>
   {data&&<><h2>{data.title}</h2>
   <img src={data.image} height='80px'width='80px'/>
   <p>{data.description}</p>
   </>}
   </>
  )
}

export default SingleProduct