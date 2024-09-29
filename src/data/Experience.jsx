import React, { useState } from 'react';
import '../index.css';

const Experience = () => {
  const [visible, setVisible] = useState(false);
  const [popUpData, setpopUpData] = useState('');

  const openPopUp = (event)=>{
    setpopUpData(event?.target?.innerHTML)
    setVisible(!visible)
    console.log(popUpData)
  }
  
  // const

  return (
    <>
    <div className="content">
      <h1 className="section-heading">Work Experience </h1>
      <ul>
        <li className="experience-card">
          <h3 className="section-heading" >React.js Revamp & Performance Enhancement</h3>
          <p onClick={(e)=>openPopUp(e)}  id='exp1'>
            Spearheaded the migration from a legacy Vanilla JavaScript codebase to React.js, leveraging its component-based architecture, resulting in a 30% boost in maintainability and 25% increase in scalability.
          </p>
        </li>
        <li className="experience-card">
          <h3 className="section-heading">Utilized NPM for Dependency Management</h3>
          <p onClick={(e)=>openPopUp(e)} >
            Utilized NPM extensively for managing project dependencies, reducing integration time by 20% and ensuring efficient package updates.
          </p>
        </li>
        <li className="experience-card">
          <h3 className="section-heading">Implemented Performance Optimization</h3>
          <p onClick={(e)=>openPopUp(e)} >
            Implemented performance optimization techniques, achieving a 50% increase in site traffic through enhanced accessibility and user experience. Refactored codebase, reducing overall lines of code by 20% to 40%, thereby improving readability and maintainability.
          </p>
        </li>
        <li className="experience-card">
          <h3 className="section-heading">Improved Code Organization and Debugging</h3>
          <p onClick={(e)=>openPopUp(e)} >
            Improved code organization and debugging capabilities, decreasing reported bugs by 20% to 30%. Employed Git for version control, ensuring robust code management and seamless collaboration among team members, resulting in a reduction of merge conflicts.
          </p>
        </li>
        <li className="experience-card">
          <h3 className="section-heading">Enhanced User Interfaces with SASS/LESS</h3>
          <p onClick={(e)=>openPopUp(e)} >
            Enhanced user interfaces using SASS/LESS, leading to maintainable and scalable stylesheets, and a 20% reduction in stylesheet size.
          </p>
        </li>
        <li className="experience-card">
          <h3 className="section-heading">Ensured Full Accessibility</h3>
          <p onClick={(e)=>openPopUp(e)} >
            Ensured full accessibility for differently-abled users, enhancing user experience through screen reader compatibility, keyboard navigation, and optimal contrast ratios, increasing accessibility compliance by 30%.
          </p>
        </li>
      </ul>

      <h2>Seamless User Flow</h2>
      <ul>
        <li className="experience-card">
          <h3 className="section-heading">Improved Electronic Health Record (EHR) Tool</h3>
          <p onClick={(e)=>openPopUp(e)} >
            Improved the Electronic Health Record (EHR) tool's accessibility and usability, leading to a 40% increase in tool utilization.
          </p>
        </li>
      </ul>

      <h2>Facilitating Theory-Application Connections</h2>
      <ul>
        <li className="experience-card">
          <h3 className="section-heading">Designed and Developed Interactive Tools for Education</h3>
          <p onClick={(e)=>openPopUp(e)} >
            Designed and developed interactive tools to aid students in linking theoretical concepts with practical applications. Created distinct modules fostering interactive learning environments for both teachers and students, supporting various educational functionalities such as matching, ranking, and grouping to provide a holistic learning experience. Developed an auto-graded learning tool within Excel, augmenting educational resources with automated feedback and assessment.
          </p>
        </li>
      </ul>

      <h2>Authentication and Authorization API Development</h2>
      <ul>
        <li className="experience-card">
          <h3 className="section-heading">Developed RESTful APIs for Authentication and Authorization</h3>
          <p onClick={(e)=>openPopUp(e)} >
            Developed RESTful APIs using FastAPI and Chalice for authentication and authorization processes. Implemented user functionalities including sign-up, sign-in, and token-based authentication. Integrated AWS Cognito for user management, improving authentication and authorization. Designed a refresh token mechanism to enhance API security and user experience.
          </p>
        </li>
      </ul>
    </div>
    { visible ?
        <div className='boxModal'>
          <div className='modalHeader'>
          <h2>
            Modal
          </h2>
          </div>
          <div className='modalData'>
            <p>
            {popUpData}
            </p>
          </div>

        </div>: ''
    }
    
      </>
  );
}

export default Experience;
