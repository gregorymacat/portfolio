import React from 'react';
import './AboutMe.css';
import InfoContainer from '../InfoContainer/InfoContainer.jsx';

function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="about-me-background">
        <div className="info-container">
          <h1>Hello! I'm Gregory Macat</h1>
          <span>I'm a fullstack software engineer based in Austin.</span>
          <span>I love tackling challenges, solving complex problems, and expanding my skill set.</span>
          <span>Please reach out if you'd like to learn more!</span>
        </div>
        {/* <InfoContainer title={title} text={text}/> */}
        <div className="profile-photo-downloads-container">
          <img id="profile-photo" src="./assets/profilephotolinkedin.JPG" alt="Profile Picture"></img>
          <button id="projects-button">See My Projects</button>
          <button id="download-resume">View Resume</button>
        </div>
      </div>
      <div className="socials-container">
        <img id="linkedin-icon" src="./assets/LI_words_Logo.png" alt="Linked In Link"></img>
        <img id="github-icon" src="./assets/GitHub_words_Logo.png" alt="Github Link"></img>
      </div>
    </div>
  )
}

export default AboutMe;