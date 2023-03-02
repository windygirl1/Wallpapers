import React from 'react'
import Nav from './Navbar/Nav'
import './Layout.css'
import { Route, Routes } from "react-router-dom"
import Start from './../components/Start'
import Profile from './../components/Profile'
import Upload from './Upload'
import Gallery from './Gallery'

const Layout = () => {
  return (
    <>
    
    <div className='wallpaper'>
    <Nav/>
    <Routes>
     <Route path='/' element={<Start/>}></Route> 
     <Route path='/profile' element={<Profile/>}></Route>
     <Route path='/upload' element={<Upload/>}></Route>
     <Route path='/gallery' element={<Gallery/>}></Route>
    </Routes>
    </div>
      
      </> 
  )
}

export default Layout