import React, {useState, useEffect} from 'react';
import './Navbar.css';

function Navbar({changePage}) {
  const [pageSelection, setPageSelection] = useState('About Me');

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
        <b className={pageSelection === 'About Me' ? "selected" : null}
          onClick={onClick}>About Me</b>
        <b className={pageSelection === 'Experience' ? "selected" : null}
          onClick={onClick}>Experience</b>
        <b className={pageSelection === 'Projects' ? "selected" : null}
          onClick={onClick}>Projects</b>
      </div>
    </div>
  )
}

export default Navbar;