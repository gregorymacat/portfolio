import React from 'react';
import './InfoContainer.css';

function InfoContainer({title, subtitle, extraTitle, text}) {
  return (
    <div className="info-container">
      <h1>{title}</h1>
      <div className="extra-information">
        {subtitle ? <h2>{subtitle}</h2> : null}
        {extraTitle ? <h2>{extraTitle}</h2> : null}
      </div>
      <span>{text}</span>
    </div>
  )
}

export default InfoContainer;