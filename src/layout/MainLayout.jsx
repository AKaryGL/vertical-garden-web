import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import './MainLayout.css'

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className='main-container'>{children}</div>
      <Footer />
    </>
  )
}

export default MainLayout
