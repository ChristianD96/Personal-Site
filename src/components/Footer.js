import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Projects</h2>
            <Link to='/'>Project 1</Link>
            <Link to='/'>Project 2</Link>
            <Link to='/'>Project 3</Link>
            <Link to='/'>Project 4</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Me</h2>
            <Link to='/'>Call</Link>
            <Link to='/'>Text</Link>
            <Link to='/'>Email</Link>
            <Link to='/'>LinkedIn</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Me</h2>
            <Link to='/'>Stuff</Link>
            <Link to='/'>More Stuff</Link>
            <Link to='/'>Hey Stuff</Link>
            <Link to='/'>andddd Stuff</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;