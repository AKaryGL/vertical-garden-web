import React from 'react'
import Header from '../components/Header/Header'
import './MainLayout.css'

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className='main-container'>{children}</div>
    </>
  )
}

export default MainLayout
