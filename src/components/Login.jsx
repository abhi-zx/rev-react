import React, { useState,useContext } from 'react'
import {AuthContext} from '../context/AuthContext'
import WheatherInfo from './WheatherInfo'

const Login = () => {
    
    // const loginData = useContext(AuthContext)
    // console.log(loginData)
    const [state, setState] = useState({email:"", password: ""})
    const {isAuth,handelLogin,token}= useContext(AuthContext)
    // console.log(isAuth)
    // console.log(token)
    const handelSubmit=(e)=>{
        e.preventDefault();
        handelLogin(state.email,state.password)
    }
  return (
    <>
   { !isAuth ? <><h1>Login</h1>
    <form onSubmit={handelSubmit}>
        <input placeholder="Email..." value={state.email} onChange={(e) => setState({...state,email:e.target.value})}type="text"></input>
        <input placeholder="Password..." value={state.password} onChange={(e) => setState({...state,password:e.target.value})}type="text"></input>
       <input type="submit"value="Login"></input>
    </form>
    </>: <WheatherInfo/>
}
    </>
  )
}

export default Login