// Projects.js
import React from 'react';
import '../index.css';

const Projects = () => {
  return (
    <div className="content">
      <h2 className="section-heading">Projects</h2>
      <div className="project-item">
        <h3>E-commerce Platform</h3>
        <p>
          Developed a full-stack e-commerce platform using MERN stack, providing
          users with a seamless shopping experience.
        </p>
      </div>

      <div className="project-item">
        <h3>Task Management App</h3>
        <p>
          Created a task management application using React and Firebase,
          allowing users to organize and track their tasks efficiently.
        </p>
      </div>

      <div className="project-item">
        <h3>Portfolio Website</h3>
        <p>
          Designed and implemented a personal portfolio website using React.js,
          showcasing skills, projects, and experience.
        </p>
      </div>

    </div>
  );
}

export default Projects;
