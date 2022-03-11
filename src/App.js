import React from 'react'
import Login from './components/Login'
import Navbar from './components/Navbar'
import WheatherInfo from './components/WheatherInfo'
import Routes from './Routes/Routes'

const App = () => {
  return (
    <div>
      {/* <WheatherInfo/> */}
      {/* <Login/> */}
      <Navbar/>
      <Routes/>
    </div>
  )
}

export default App