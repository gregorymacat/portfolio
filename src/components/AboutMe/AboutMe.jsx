import React from 'react';
import './AboutMe.css';
import InfoContainer from '../InfoContainer/InfoContainer.jsx';

const title = 'Hi! I\'m Greg,\na Software Developer';
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim \
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

function AboutMe() {
  return (
    <div className='about-me-container'>
      <InfoContainer title={title} text={text}/>
      <div className="profile-photo-container">
        <img id="profile-photo" src="profilephotolinkedin.JPG" alt="Profile Picture"></img>
      </div>
    </div>
  )
}

export default AboutMe;