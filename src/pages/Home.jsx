import React from 'react'
import '../stylessheet/Home.css'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const Home = () => {

  const images = [
    {
      original: "https://i.postimg.cc/44DkZbc2/jitomate1.png",
      thumbnail: "https://i.postimg.cc/44DkZbc2/jitomate1.png",
    },
    {
      original: "https://i.postimg.cc/SRg5GctQ/cilantro1.png",
      thumbnail: "https://i.postimg.cc/SRg5GctQ/cilantro1.png",
    },
    {
      original: "https://i.postimg.cc/hjQy362D/fresa1.png",
      thumbnail: "https://i.postimg.cc/hjQy362D/fresa1.png",
    },
    {
      original: "https://i.postimg.cc/SsS5ZDkQ/cebolla.png",
      thumbnail: "https://i.postimg.cc/SsS5ZDkQ/cebolla.png",
    },
  ];

  return (
    <div>
      <div className='container'>
        <div className='encabezado-container'>
          <h1 id='title'>Vertical Garden</h1>
          <p>
            Welcome to the future of farming at home! With our automated garden
            system.{' '}
          </p>
          <div className='button-home'>
            <button className='login'>Long in</button>
            <button className='register'>Register</button>
          </div>
        </div>

        <div className='image-container'>
          <img
            src='https://i.postimg.cc/0jc8XzW1/huerto.png'
            className='huerto'
          ></img>
        </div>
      </div>

      <div style={{width: "34vw", margin: "auto"}}>
        <ImageGallery items={images}
          showPlayButton={false}
          showFullscreenButton={false}
          autoPlay={true}
          slideInterval={4000}
          slideDuration={1000}
        />
      </div>
      
    </div>
  )
}

export default Home
