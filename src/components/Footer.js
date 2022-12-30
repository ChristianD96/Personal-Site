import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-list-items'>
            <h2>Projects</h2>
            <ul>
              <li>
                <a href={'https://github.com/ChristianD96/Embedded-System-Morse-Code'} target="_blank" rel="noopener noreferrer">Embedded Systems</a>
              </li>
              <li>
                <a href={'https://github.com/ChristianD96/Contact-Service-Files'} target="_blank" rel="noopener noreferrer">JUnit Testing</a>
              </li>
              <li>
                <a href={'https://github.com/ChristianD96/CS465-FullStack'} target="_blank" rel="noopener noreferrer">Full-Stack App</a>
              </li>
              <li>
                <a href={'https://main.d3dqgdwl4qxea.amplifyapp.com/'} target="_blank" rel="noopener noreferrer">Sorry App</a>
              </li>
            </ul>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Me</h2>
            <Link to='/Contact'>Call</Link>
            <Link to='/Contact'>Text</Link>
            <Link to='/Contact'>Email</Link>
            <Link to='/Contact'>LinkedIn</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Me</h2>
            <Link to='/About'>Information</Link>
            <Link to='/About'>About</Link>
            <Link to='/About'>Me</Link>
            <Link to='/About'>!</Link>
          </div>
          <div class='footer-list-items'>
            <h2>Social Media</h2>
            <ul>
              <li>
                <a href={'https://Facebook.com'} target="_blank" rel="noopener noreferrer">Facebook</a>
              </li>
              <li>
                <a href={'https://Instagram.com'} target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
              <li>
                <a href={'https://Twitter.com'} target="_blank" rel="noopener noreferrer">Twitter</a>
              </li>
              <li>
                <a href={'https://www.linkedin.com/in/christian-a-drouin/'} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;