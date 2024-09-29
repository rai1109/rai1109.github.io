import React, { useState, useEffect } from 'react';
import '../css/header.css';

const Header = () => {
  const [activeLink, setActiveLink] = useState('');
  const [overlayStyle, setOverlayStyle] = useState({});

  const handleClick = (id) => {
    setActiveLink(id);

    // Smooth scroll to the section
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const navbarItems = document.querySelectorAll('.navbar-item');
    navbarItems.forEach((item) => {
      if (item.getAttribute('href').substring(1) === activeLink) {
        const { offsetLeft, offsetWidth } = item;
        setOverlayStyle({
          width: `${offsetWidth}px`,
          transform: `translateX(${offsetLeft}px)`
        });
      }
    });
  }, [activeLink]);

  return (
    <header className='header-content'>
      <div>
        <h1>Shubham Rai</h1>
        <p>Senior Software Developer</p>
        <nav className='navbar'>
          <div className='navbar-section'>
            <a 
              href="#exp"
              className={`navbar-item ${activeLink === 'exp' ? 'active' : ''}`}
              onClick={() => handleClick('exp')}
            >
              Experience
            </a>
            <a 
              href="#skills"
              className={`navbar-item ${activeLink === 'skills' ? 'active' : ''}`}
              onClick={() => handleClick('skills')}
            >
              Skills
            </a>
            <a 
              href="#projects"
              className={`navbar-item ${activeLink === 'projects' ? 'active' : ''}`}
              onClick={() => handleClick('projects')}
            >
              Projects
            </a>
            <a 
              href="#contact"
              className={`navbar-item ${activeLink === 'contact' ? 'active' : ''}`}
              onClick={() => handleClick('contact')}
            >
              Contact
            </a>
            <div className="navbar-overlay" style={overlayStyle}></div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
