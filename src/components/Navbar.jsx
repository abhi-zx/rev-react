import React from 'react'
import {NavLink} from 'react-router-dom'
const links=[
    {
        title:"Home",
        to:"/"
    },
    {
        title:"About",
        to:"/about"
    },
    {
        title:"Products",
        to:"/products"
    },
    {
        title:"Login",
        to:"/login"
    }
]

const Navbar = () => {
  return (
    <>
    {links.map(({title,to},index)=>{
        return <NavLink key= {index} to={to} style={{padding:10,textDecoration:'none'}}>{title}</NavLink>
    })}
    </>
  )
}

export default Navbar