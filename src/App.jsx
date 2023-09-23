import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Themes from './components/Themes'
import Home from './pages/home/Home.jsx'
import About from './pages/about/About.jsx'
import Contact from './pages/contact/Contact.jsx'
import Portfolio from './pages/portfolio/Portfolio.jsx'
import Navbar from './components/Navbar'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Themes/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='portfolio' element={<Portfolio/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App