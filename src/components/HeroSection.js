import React from 'react';
import './HeroSection.css';
import video1 from '../videos/video-1.mp4';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={video1} autoPlay loop muted />
      <h1 className='welcome'>Welcome...</h1>
      <p className='opening'>
        This site is currently still under maintenance.
        <br></br>
        I created this site from scratch using React and Javascript.
        <br></br>
        You can contact me at christian.a.drouin@gmail.com
        <br></br>
        Eventually this site will contain better informed contact information.
      </p>
    </div>
  );
}

export default HeroSection;