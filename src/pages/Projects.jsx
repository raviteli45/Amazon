import React from 'react';
import './Projects.css';
import { FaGithub } from "react-icons/fa";
import CompLoad from './CompLoad';

const Projects = () => {

  const handleOnClick = () => {
    window.open('https://github.com/raviteli45/Amazon');
  }
  return (
    <><CompLoad /><div className="projects-container">
      <FaGithub className='Android' size={150} onClick={handleOnClick} />
      <h1>My projects</h1>
      <p>Click on the icon to get the Source Code.</p>
    </div></>
  );
};

export default Projects;
