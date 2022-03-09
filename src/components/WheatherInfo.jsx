import React from 'react'
import { useState,useContext } from 'react'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext'
const initialState = {
    query: "",
    data: []
}
const WheatherInfo = () => {
    const [state, setState] = useState(initialState);
    const {token}= useContext(AuthContext)
    //http://api.weatherapi.com/v1/current.json?key=c22fddc0eae54538ad0183954220803&q=London&aqi=no
    //http://api.weatherapi.com/v1/current.json?key=c22fddc0eae54538ad0183954220803
    const show = () => {
        // console.log(state.query)
        axios({
            method: "get",
            baseURL:"http://api.weatherapi.com/v1",
            url:"/current.json",
            params: {
                key:"c22fddc0eae54538ad0183954220803",
                q:state.query
            }
        }).then(res => setState({...state,data:res.data}))
            .catch(err => console.log(err))

    }
    return (

        <>
            <h1>Search For WheatherInfo of different City</h1>
            <h2>The token is {token}</h2>
            <input type="text" value={state.query} onChange={(e) => setState({...state,query:e.target.value})}></input>
            <button onClick={show}>Search</button>
            {state?.data?.location && 
            <h2>{state.data?.location?.name}</h2>}
            {state?.data?.current && <>
            <h5>{state?.data?.current?.condition?.text}</h5>
            <img src={state?.data?.current?.condition?.icon} alt='wheather icon'></img>

            </>}
           
        </>
    )
}

export default WheatherInfo