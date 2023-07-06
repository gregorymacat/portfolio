import React, {useState, setState} from 'react';
import Navbar from './Navbar/Navbar.jsx';
import AboutMe from './AboutMe/AboutMe.jsx';
import ExperienceInfo from './ExperienceInfo/ExperienceInfo.jsx';
import Projects from './Projects/Projects.jsx';
import ContactForm from './ContactForm/ContactForm.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const changePage = (newPage) => {
    setCurrentPage(newPage);
  }

  return (
    <React.Fragment>
      <Navbar changePage={changePage}/>
      {
        currentPage === 'Contact' ? <ContactForm/>
        : currentPage === 'Projects' ? <Projects/>
        : <AboutMe/>
      }
    </React.Fragment>
  )
}

export default App;