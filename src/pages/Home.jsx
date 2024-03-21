import React from 'react'
import '../stylessheet/Home.css'

const Home = () => {
  return (
    <div>
      <div className='container'>
        <div className='encabezado-container'>
          <h1>Vertical Garden</h1>
          <p>
            Welcome to the future of farming at home! With our automated garden
            system.{' '}
          </p>
          <button className='login'>Long in</button>
          <button className='register'>Register</button>
        </div>

        <div className='image-container'>
          <img
            src='https://i.postimg.cc/qv9G7TzL/huerto-removebg-preview.png'
            className='huerto'
          ></img>
        </div>
      </div>

      <section>
        <div id='container'>
          <div>
            <img src='https://i.postimg.cc/RqxM1v6c/puya1.png' alt='logo RSS' />
            <span>Chili puya</span>
          </div>

          <div>
            <img
              src='https://i.postimg.cc/yNGWg4PT/rabano1.png'
              alt='logo RSS'
            />
            <span>Radish</span>
          </div>

          <div>
            <img
              src='https://i.postimg.cc/hGW5SfF8/jitomate1.png'
              alt='logo RSS'
            />
            <span>Tomato</span>
          </div>

          <div>
            <img
              src='https://i.postimg.cc/T39DP4Fk/fresa1.png'
              alt='logo RSS'
            />
            <span>Strawberry</span>
          </div>

          <div>
            <img
              src='https://i.postimg.cc/KvT7mQmV/habanero1.png'
              alt='logo RSS'
            />
            <span>Habanero pepper</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
