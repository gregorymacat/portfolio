import React, {useState, setState} from 'react';
import Navbar from './Navbar/Navbar.jsx';
import AboutMe from './AboutMe/AboutMe.jsx';
import ExperienceInfo from './ExperienceInfo/ExperienceInfo.jsx';
import Projects from './Projects/Projects.jsx';

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
        : currentPage === 'Projects' ? <Projects/>
        : <AboutMe/>
      }
    </div>
  )
}

export default App;