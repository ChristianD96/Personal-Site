import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-link-wrapper'>
        <div className='footer-link-items'>
          <h2 className='footer-headers'>Projects</h2>
          <ul className='footer-lists'>
            <li>
              <a
                href='/'
                target="_blank"
                rel="noopener noreferrer">
                This One</a>
            </li>
            <li>
              <a
                href='https://github.com/ChristianD96/Embedded-System-Morse-Code'
                target="_blank"
                rel="noopener noreferrer">
                Microcontroller(C language)</a>
            </li>
            <li>
              <a
                href='https://github.com/ChristianD96/Contact-Service-Files'
                target="_blank"
                rel="noopener noreferrer">
                JUnit Testing (Java)
              </a>
            </li>
            <li>
              <a
                href='https://github.com/ChristianD96/CS465-FullStack'
                target="_blank"
                rel="noopener noreferrer">
                FullStack App <br></br>(TS, JS, etc)
              </a>
            </li>
          </ul>
        </div>
        <div class='footer-link-items'>
          <h2 className='footer-headers'>Contact Me</h2>
          <ul className='footer-lists'>
            <li><Link to='/Contact'>Call Me</Link></li>
            <li><Link to='/Contact'>Text Me</Link></li>
            <li><Link to='/Contact'>Email Me</Link></li>
            <li><Link to='/Contact'>Hire Me?</Link></li>
          </ul>
        </div>
        <div className='footer-link-items'>
          <h2 className='footer-headers'>About Me</h2>
          <ul className='footer-lists'>
            <li>
              <a
                href='https://www.linkedin.com/in/christian-a-drouin/'
                target="_blank"
                rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>

        </div>
        <div class='footer-link-items'>
          <h2 className='footer-headers'>Social Media</h2>
          <ul className='footer-lists'>
            <li>
              <a
                href='https://www.instagram.com'
                target="_blank"
                rel="noopener noreferrer">
                Instagram</a>
            </li>
            <li>
              <a
                href='https://www.facebook.com'
                target="_blank"
                rel="noopener noreferrer">
                Facebook</a>
            </li>
            <li>
              <a
                href='https://www.twitter.com'
                target="_blank"
                rel="noopener noreferrer">
                Twitter</a>
            </li>
          </ul>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <h1 class='footer-logo'>
            <Link to='/' class='footer-logo-text'>
              Christian Drouin
            </Link>
          </h1>
        </div>
      </section>
    </div>
  );
}

export default Footer;