import React from 'react'
import { Route,Routes } from 'react-router-dom'
import ProfileDetail from '../Pages/ProfileDetail'
import Home from '../Pages/Home'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      
        <Route path='/profiledetail/:login' element={<ProfileDetail/>}/>
    </Routes>
  )
}

export default Routers