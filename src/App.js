// App.js
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './data/Header';
import Experience from './data/Experience';
import Skills from './data/Skills';
import Projects from './data/Projects';
// import Contact from './Contact';
import Footer from './data/Footer';

function App() {
  return (
      <div className="app">
        <Header />
        <div className='app-content'>
          <div id="exp" className='exp-content'>
            <Experience />
          </div>
          <div id="skills" className="skill-content">
            <Skills />
          </div>
          <div id="projects" className='project-content'>
            <Projects />
          </div>
        </div>
        <Footer />
      </div>
  );
}

export default App;
