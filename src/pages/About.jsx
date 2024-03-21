import React from 'react';
import '../stylessheet/About.css';

const About = () => {
    return (
        <div className="about-container">
            <div className='title'>
                <h1>About</h1>
            </div>
            <div className="content">
                <div className="text-container">
                    <h2>Vertical Garden</h2>
                    <p>The automated vertical garden combines technology and agriculture to create an efficient and sustainable system. With its ability to cultivate food in reduced urban spaces and its intelligent automation, it represents a practical and eco-friendly solution for the future of food production.</p>
                </div>
                <img src="https://i.postimg.cc/05MtKQT8/png-clipart-green-wall-gardening-vertical-gardens-hydroponics-window-furniture-grass-removebg-previe.png" alt="Vertical Garden" className="vertical-garden-image" />
            </div>
        </div>
    );
};

export default About;