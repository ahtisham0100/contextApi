import { useState } from 'react'
import './App.css'
import {  Route, Routes, Link } from 'react-router-dom'
import Homepage from './assets/components/Homepage'
import About from './assets/components/About'
import React from 'react' 
import { Navbar } from './assets/components/Header'
function App() {
  return (
      <div> 
        <Navbar/>
      
      <Routes> 
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      </Routes>
      </div>
  )
}

export default App
  
