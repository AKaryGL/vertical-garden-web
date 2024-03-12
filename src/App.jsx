import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layout/MainLayout.jsx'
import Home from './pages/Home.jsx'
import Irrigations from './pages/Irrigations.jsx'
import Calendar from './pages/Calendar.jsx'
import './App.css'

function App() {
  return (
    <div>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='irrigations' element={<Irrigations />} />
          <Route path='calendar' element={<Calendar />} />
        </Routes>
      </MainLayout>
    </div>
  )
}

export default App
