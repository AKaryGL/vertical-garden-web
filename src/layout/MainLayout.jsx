import React from 'react'
import Header from '../components/Header/Header'
import './MainLayout.css'

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className='main-container'>{children}</div>
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
    </>
  )
}

export default MainLayout
