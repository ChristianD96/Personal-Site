import React from 'react';
import './HeroSection.css';
import video1 from '../videos/video-1.mp4';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={video1} autoPlay loop muted playsInline />
      <h1 className='welcome'>Welcome...</h1>
      <p className='opening'>
        Hello, my name is Christian Drouin.
        <br></br>
        This is one of my personal projects using React demonstrating
        <br></br>
        my interest and knowledge in web development. Take a look!
      </p>
    </div>
  );
}

export default HeroSection;
