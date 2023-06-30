import React, {useState, useEffect} from 'react';
import './Navbar.css';

function Navbar({changePage}) {
  const [pageSelection, setPageSelection] = useState('Home');

  const onClick = (event) => {
    console.log('target value: ', event.target.innerHTML);
    setPageSelection(event.target.innerHTML);
  }

  useEffect(() => {
    changePage(pageSelection);
  }, [pageSelection])

  return (
    <div className="navbar">
      {pageSelection === 'Home' ? null : <h1>Gregory Macat</h1>}
      <div className="navbar-links">
        <b className={pageSelection === 'Home' ? "selected" : null}
          onClick={onClick}>Home</b>
        <b className={pageSelection === 'Projects' ? "selected" : null}
          onClick={onClick}>Projects</b>
        <b className={pageSelection === 'Experience' ? "selected" : null}
          onClick={onClick}>Experience</b>
        
      </div>
    </div>
  )
}

export default Navbar;