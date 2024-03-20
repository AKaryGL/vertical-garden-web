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

      <footer>
        <div className='paginas'>
        <img src="https://i.postimg.cc/nLfcB5ht/facebook.png" className='face'></img>
        <img src="https://i.postimg.cc/Fz4j6Gpt/insta-removebg-preview.png" className='whats'></img>
        <img src="https://i.postimg.cc/4ycXYQR3/whats-n-removebg-preview.png" className='whats' onClick="https://web.whatsapp.com/"></img>
        <img src="https://i.postimg.cc/Prkj6Zkm/youtube-removebg-preview.png" className='whats'></img>
        <img src="https://i.postimg.cc/6qcYLDXb/twitter-removebg-preview.png" className='whats'></img>
        <img src="https://i.postimg.cc/3JgD6g07/linkedin-removebg-preview.png" className='whats'></img><br />
        </div>
      </footer>
    </div>
  )
}

export default App
