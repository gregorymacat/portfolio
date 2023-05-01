import React from 'react';

function ProjectInfo({title, description}) {
  return (
    <div className="project-tile">
      <b>{title}</b>
      <p>{description}</p>
    </div>
  )
}

export default ProjectInfo;