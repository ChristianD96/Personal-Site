import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import imageStack from '../images/stack2.jpg';
import imageLED from '../images/LED.jpg';
import imageTest from '../images/test.png';

function Cards() {
  return (
    <div className='cards'>
      <h1>Explore my  projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={imageLED}
              text='Morse Code Microcontroller Project'
              path='https://github.com/ChristianD96/Embedded-System-Morse-Code'
            />
            <CardItem
              src={imageTest}
              text='JUnit Class Testing'
              path='https://github.com/ChristianD96/Contact-Service-Files'
            />
            <CardItem
              src={imageStack}
              text='Full-Stack Applicaiton'
              path='https://github.com/ChristianD96/CS465-FullStack'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;