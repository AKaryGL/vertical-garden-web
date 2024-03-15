import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import './Header.css'

const Header = () => {
  return (
    <div className='header-container'>
      <span className='menu-icon-container'>
        <FontAwesomeIcon icon={faBars} className='menu-icon' />
      </span>
      <nav className='nav'>
        <Link id='item' to='/'>
          Home
        </Link>
        <Link id='item' to='plants'>
          Plants
        </Link>
        <Link id='item' to='historical'>
          Historical
        </Link>
        <Link id='item' to='about'>
          About
        </Link>
      </nav>
      <span className='session-container'>
        <Link id='item' to='profile'>
          Sing in
        </Link>
        <FontAwesomeIcon icon={faUser} className='user-icon' />
      </span>
    </div>
  )
}

export default Header
