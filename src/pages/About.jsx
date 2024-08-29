import React from 'react';
import './About.css';
import { FaAmazon } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-container">
      <FaAmazon className='Amazon' size={130} />
      <h1>Welcome to Amazon</h1>
      <p>This is the about page.</p>
    </div>
  );
};

export default About;
