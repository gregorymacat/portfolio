import React from 'react';
import InfoContainer from '../InfoContainer/InfoContainer.jsx';

const experiences = [
  {
    company: 'SPJ Solutions',
    title: 'Software Engineer',
    experience: '1 year',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim \
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    company: 'Texas State University - Toyota Material Handling Co.',
    title: 'Student Researcher',
    experience: '6 months',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim \
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  }
]

function ExperienceInfo() {
  return (
    <div className="experience-info-container">
      {
        experiences.map((experience, idx) => (
          <InfoContainer key={'experience-' + idx} title={experience.company} text={experience.description}/>
        ))
      }
    </div>
  )
}

export default ExperienceInfo;