import React from 'react';
import ProjectInfo from '../ProjectInfo/ProjectInfo.jsx';
import './Projects.css';

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