import React from 'react';

function InfoContainer({className, title, text}) {
  return (
    <div className={className}>
      <h1>{title}</h1>
      <span>{text}</span>
    </div>
  )
}

export default InfoContainer;