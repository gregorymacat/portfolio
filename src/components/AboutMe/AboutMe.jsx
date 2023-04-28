import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import InfoContainer from '../InfoContainer/InfoContainer.jsx';

const title = 'Hi! I\'m Greg, a Software Developer';
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim \
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

function AboutMe() {
  return (
    <div>
      <Navbar/>
      <InfoContainer className={'about-me-info'} title={title} text={text}/>
      <div className="profile-photo-container">
        <img src="profilephotolinkedin.JPG" alt="Profile Picture" width="378" height="504"></img>
      </div>
    </div>
  )
}

export default AboutMe;