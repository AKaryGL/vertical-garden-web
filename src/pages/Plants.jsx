import React from 'react'
import '../stylessheet/Plants.css'

const Plants = () => {
  return (
    <div>
      <div className='title'>
        <h1>Our Plants</h1>
      </div>

      <section>
        <div id='container'>
          <div className='container-div'>
            <img src='https://i.postimg.cc/CKGp6Z5r/puya1.png' alt='logo RSS'/>
            <span>Chili puya</span>
          </div>

          <div className='container-div'>
            <img
              src='https://i.postimg.cc/Pq4Fw1PH/rabano1.png' alt='logo RSS'
            />
            <span>Radish</span>
          </div>

          <div className='container-div'>
            <img
              src='https://i.postimg.cc/ZqMsH4Fs/habanero1.png' alt='logo RSS'
            />
            <span>Habanero pepper</span>
          </div>

          <div className='container-div'>
            <img
              src='https://i.postimg.cc/3wBfDmps/maiz-removebg-preview.png' alt='logo RSS'
            />
            <span>Corn</span>
          </div>

          <div className='container-div'>
            <img
              src='https://i.postimg.cc/zvLxMQMN/sandia-removebg-preview.png' alt='logo RSS'
            />
            <span>Watermelon</span>
          </div>
        </div>
      </section>
      <button className='learn-more'><a href="About">Learn More</a></button>
    </div>
  )
}

export default Plants
