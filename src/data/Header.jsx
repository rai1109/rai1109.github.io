// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='content'>
      <h1>Shubham Rai</h1>
      <p>Senior Software Developer</p>
      <nav>
        <Link to="/">Experience</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
