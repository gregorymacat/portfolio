import React, {useState, setState} from 'react';
import Navbar from './Navbar/Navbar.jsx';
import AboutMe from './AboutMe/AboutMe.jsx';
import ExperienceInfo from './ExperienceInfo/ExperienceInfo.jsx';
import ProjectInfo from './ProjectInfo/ProjectInfo.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const changePage = (newPage) => {
    setCurrentPage(newPage);
  }

  return (
    <div>
      <Navbar changePage={changePage}/>
      {
        currentPage === 'Experience' ? <ExperienceInfo/>
        : currentPage === 'Projects' ? <ProjectInfo/>
        : <AboutMe/>
      }
    </div>
  )
}

export default App;