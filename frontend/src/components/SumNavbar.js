// src/components/Navbar.js

import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './SumNavbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (path) => {
    navigate(path);
  };

  return (
    <nav id='sum-nav'>
      <ul className='sum-nav'>
        <li
          className={`nav-item ${location.pathname === '/file-sum' ? 'active' : ''}`}
          onClick={() => handleNavClick('/file-sum')}
        >
          <Link to="/file-sum">File Summarizer</Link>
        </li>
        <li
          className={`nav-item ${location.pathname === '/text-sum' ? 'active' : ''}`}
          onClick={() => handleNavClick('/text-sum')}
        >
          <Link to="/text-sum">Text Summarizer</Link>
        </li>
        <li
          className={`nav-item ${location.pathname === '/url-sum' ? 'active' : ''}`}
          onClick={() => handleNavClick('/url-sum')}
        >
          <Link to="/url-sum">Youtube Summarizer</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
