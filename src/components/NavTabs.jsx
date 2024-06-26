import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import '../App.css';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className='nav-container'>
      <ul className="nav home-link poppins-extrabold" style={{ borderBottom: '0px' }}>
        <li className="nav-item">
          <Link
            to="/"
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={`nav-color ${currentPage === '/' ? 'nav-link active' : 'nav-link'}`}
          >
            Sebastian Saenz
          </Link>
        </li>
      </ul>

      {/* <div className='dropdown-toggle' onClick={handleDropdownToggle}>
        Other Links
      </div> */}

      <ul className={`nav other-links poppins-extrabold ${showDropdown ? 'show' : ''}`}>
        <li className="nav-item">
          <Link
            to="/Portfolio"
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={`nav-color ${currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}`}
          >
            Portfolio
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/Resume"
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={`nav-color ${currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}`}
          >
            Resume
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/Contact"
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={`nav-color ${currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavTabs;
