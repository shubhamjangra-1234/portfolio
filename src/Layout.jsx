import React from 'react'
import Navbar from './components/Navbar/navbar.jsx'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer.jsx'

function Layout() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
