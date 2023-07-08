import React from 'react';
import './ProjectInfo.css';


//TODO Need each project to be a rectangular container similar to the current outermost container, but no backgrounds just size wise
//TODO Each project container should have an image on the left
//TODO On the right project title, then info, then a button beneath the project that takes the user to the project

function ProjectInfo({imageLink, title, description, url}) {
  return (
    <div className="project-tile">
      <img className="project-image" src={imageLink}></img>
      <div className="project-information">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={url} target="_blank">View Project</a>
      </div>
    </div>
  )
}

export default ProjectInfo;