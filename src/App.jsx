import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layout/MainLayout.jsx'
import Home from './pages/Home.jsx'
import Plants from './pages/Plants.jsx'
import Historical from './pages/Historical.jsx'
import About from './pages/About.jsx'
import Profile from './pages/Profile.jsx'
import Register from './pages/Register.jsx'; 

import './App.css'

function App() {
  return (
    <div>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/plants' element={<Plants />} />
          <Route path='/historical' element={<Historical />} />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Profile /> } />
          <Route path="/register" element={<Register />} />

        </Routes>
      </MainLayout>
    </div>
  )
}

export default App
