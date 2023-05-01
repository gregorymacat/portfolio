import React, {useState, useEffect} from 'react';
import './Navbar.css';

function Navbar({changePage}) {
  const [pageSelection, setPageSelection] = useState('AboutMe');

  const onClick = (event) => {
    console.log('target value: ', event.target.innerHTML);
    setPageSelection(event.target.innerHTML);
  }

  useEffect(() => {
    changePage(pageSelection);
  }, [pageSelection])

  return (
    <div className="navbar">
      <h1>Gregory Macat</h1>
      <div className="navbar-links">
        <b onClick={onClick}>About Me</b>
        <b onClick={onClick}>Experience</b>
        <b onClick={onClick}>Projects</b>
      </div>
    </div>
  )
}

export default Navbar;