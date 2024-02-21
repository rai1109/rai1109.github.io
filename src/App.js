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
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" exact element={<Experience/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/projects" element={<Projects/>} />
          {/* <Route path="/contact" component={Contact} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
