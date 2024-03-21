import React from 'react'
import './LastRegister.css'

function LastRegister({ title, value }) {
  return (
    <div className='last-container'>
      <div className='last-subcontainer'>
        <p id='title'>Last {title}</p>
        <p id='number'>{value}</p>
      </div>
    </div>
  )
}

export default LastRegister
