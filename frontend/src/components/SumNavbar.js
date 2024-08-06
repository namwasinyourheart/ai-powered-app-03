// src/components/Navbar.js


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useNavigate, useLocation } from 'react-router-dom';


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

// const Navbar = () => {
//   const [activeItem, setActiveItem] = useState('');

//   const handleClick = (item) => {
//     setActiveItem(item);
//   };

//   return (
//     <nav>
//       <ul className='sum-nav'>
//         <li
//           className={`nav-item ${activeItem === 'file-sum' ? 'active' : ''}`}
//           onClick={() => handleClick('file-sum')}
//         >
//           <Link to="/file-sum">File Summarizer</Link>
//         </li>
//         <li
//           className={`nav-item ${activeItem === 'text-sum' ? 'active' : ''}`}
//           onClick={() => handleClick('text-sum')}
//         >
//           <Link to="/text-sum">Text Summarizer</Link>
//         </li>
//         <li
//           className={`nav-item ${activeItem === 'url-sum' ? 'active' : ''}`}
//           onClick={() => handleClick('url-sum')}
//         >
//           <Link to="/url-sum">URL Summarizer</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


// import React from 'react';
// import { Link } from 'react-router-dom';

// import './SumNavbar.css';


// const Navbar = () => {
//   return (
//     <nav >
//       <ul className='sum-nav'>
//         <li className='nav-item'><Link to="/file-sum">File Summarizer</Link></li>
//         <li className='nav-item'><Link to="/text-sum">Text Summarizer</Link></li>
//         <li className='nav-item'><Link to="/url-sum">URL Summarizer</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
