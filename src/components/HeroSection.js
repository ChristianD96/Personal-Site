import React from 'react';
import './HeroSection.css';
import video1 from '../videos/video-1.mp4';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={video1} autoPlay loop muted />
      <h1 className='welcome'>Welcome...</h1>
      <p className='opening'>
        Hello and welcome to my personal site.
        <br></br>
        I created this site from scratch using React and Javascript.
        <br></br>
        Feel free to look around the site at my projects if you'd like.
      </p>
    </div>
  );
}

export default HeroSection;