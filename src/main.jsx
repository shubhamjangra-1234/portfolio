/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import IntroSection from './assets/components/homepage/home.jsx'
import Skills from './assets/components/Skills/Skills.jsx'
import About from './assets/components/About/About.jsx'
import Contact from './assets/components/contact/Contact.jsx'
import LandingPage from './assets/components/LandingPage/LandingPage';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/main' element={<IntroSection/>}/>
      <Route path='skills' element={<Skills/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='' element={<LandingPage/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
