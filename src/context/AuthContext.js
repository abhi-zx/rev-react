import React,{Children, useState,createContext} from 'react'
import axios from "axios"
const AuthContext = React.createContext()

// 3  steps in context api 
// 1. create context  
// 2. after creating you need to provide it with value and at end it need to be exported
// 3. consumer is required to consumer data

//const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
    const [isAuth,setIsAuth]= useState(false)
    const [token,setToken]  = useState('')
    const handelLogin =(email,password)=>{
        axios({
            method: 'post',
            url:"https://reqres.in/api/login",
            data:{
                email,
                password
            }
        }).then(res=>{
            setIsAuth(true)
            setToken(res.data.token)
        }).catch(error=>console.log(error));
    }
    const value = {isAuth,handelLogin,token}
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export {AuthContext,AuthContextProvider}