import React from 'react';
import ProjectInfo from '../ProjectInfo/ProjectInfo.jsx';
import './Projects.css';


/*
  Starter project ideas:
  1) Weather App (https://shorturl.at/sCUWZ     https://mdbcdn.b-cdn.net/docs/standard/extended/weather/assets/featured.png)
  2) Rat in a Maze (https://www.youtube.com/watch?v=wtGlck1oe4Y&ab_channel=GeeksforGeeksDevelopment       https://www.mygreatlearning.com/blog/web-development-project-ideas/)
  3) Something Art (https://www.youtube.com/watch?v=0v4_Dw0K8pw&ab_channel=Frankslaboratory     https://www.youtube.com/watch?v=hBJJJWm2bUQ&ab_channel=CodingArtist)

  Later project ideas:
  1) Amazon clone
  2) Slack clone
  3) Make website mobile friendly
  4) Content management system
*/

const projectData = [
  {
    name: 'Guitar Note Quiz',
    description: 'A quiz game that tests the user’s ability to identify notes on a guitar’s fret board.\
    I used [language, tools, and programs] to complete this project [Fill in a bit more info about the stack and process.]',
    imageLink: './assets/guitar_quiz_image.png',
    url: 'https://www.google.com/',
  },
  {
    name: 'Weather App',
    description: 'A simple application designed to consolidate weather data for numerous locations on a single page.\
    I used [language, tools, and programs] to complete this project. [Fill in a bit more info about the stack and process.]',
    imageLink: './assets/weather_app_image.png',
    url: 'https://www.google.com/',
  },
];

//TODO Need to change this to only have two projects rendering

function Projects() {
  return (
    <div className="projects-container">
      <div className="project-tile-container">
        {
          projectData.map(project => (
            <ProjectInfo imageLink={project.imageLink} title={project.name} description={project.description} url={project.url}/>
          ))
        }
      </div>
    </div>
  )
}

export default Projects;