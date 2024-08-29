import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { FaAmazon } from "react-icons/fa";
;

const Navbar = () => {
  return (
    <nav className="navbar">
      <FaAmazon className="navbar-logo" size={40} />
      <p className='RA'>Amazon</p>
      <ul className="nav-links">
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="link">
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className="link">
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

