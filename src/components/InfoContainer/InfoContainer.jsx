import React from 'react';
import './InfoContainer.css';

function InfoContainer({title, text}) {
  return (
    <div className="info-container">
      <h1>{title}</h1>
      <span>{text}</span>
    </div>
  )
}

export default InfoContainer;