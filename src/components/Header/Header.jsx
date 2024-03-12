import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className='header-container'>
      <nav>
        <Link id='item' to='/'>
          Home
        </Link>
        <Link id='item' to='irrigations'>
          Irrigation
        </Link>
        <Link id='item' to='calendar'>
          Calendar
        </Link>
      </nav>
    </div>
  )
}

export default Header
