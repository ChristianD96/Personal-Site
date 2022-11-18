import React from 'react';
import './HeroSection.css';
import video1 from '../videos/video-1.mp4';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={video1} autoPlay loop muted />
      <h1>Welcome...</h1>
      <p className='opening'>
        I created this site from scratch using React and Javascript.
        <br></br>
        Looking through the site you will find other
        <br></br>
        projects I have worked on, my resume,
        <br></br>
        and my contact information.
      </p>
    </div>
  );
}

export default HeroSection;