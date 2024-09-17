/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './assets/components/Navbar/navbar.jsx'
import { Outlet } from 'react-router-dom'
import Footer from './assets/components/Footer/Footer.jsx'

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
