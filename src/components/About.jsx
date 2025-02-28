import React from 'react'
import './about.css';
import ayz from '../assets/ayz.jpg';

const About = () => {
  return (
    
    <div className='about-info'>
    <div>
    <h3>Hi, I'am Michael</h3>
      <h4>Full Stack developer</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Voluptates dolores cupiditate optio pariatur aut iste alias
         sequi, minima voluptas, animi quo unde vero maxime hic similique,
         dignissimos eligendi modi consectetur.
    </p>
         </div>
    
    <div className='about-image'>
        <img src={ayz} alt="ayz-image" />
    </div>
    </div>
     
   
    
  )
}

export default About
