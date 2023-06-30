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
    name: 'Some name',
    description: 'Some small description goes here. Very brief. Not many words.',
    link: 'https://www.google.com/',
  },
  {
    name: 'Some name',
    description: 'Some small description goes here. Very brief. Not many words.',
    link: 'https://www.google.com/',
  },
  {
    name: 'Some name',
    description: 'Some small description goes here. Very brief. Not many words.',
    link: 'https://www.google.com/',
  },
];

function Projects() {
  return (
    <div className="projects-container">
      <div className="project-info-container">
        <h1>Projects</h1>
        <div className="project-tiles-container">
          {
            projectData.map(project => (
              <ProjectInfo title={project.name} description={project.description}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Projects;