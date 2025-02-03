import React, {useState, useEffect,  Fragment } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css"

// Example categories data (could be fetched from an API or passed as props)
const categories = [
  { path: "security", label: "Security" },
  { path: "communication", label: "Communication" },
  { path: "displays", label: "Displays" },
  { path: "solutions", label: "Solutions" },
  { path: "computers", label: "Computers" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <Fragment className="navbar-container">
      <nav className="navbar-content">
        {/* Left Section: Sree Sai Electronics */}
        <div className="logo-section">
          <Link to="/home" className="logo-text">
            Sree Sai Electronics<span className="logo-highlight">.</span>
          </Link>
        </div>

        {/* Middle Section: Empty */}
        <div className="middle-section"></div>

        {/* Right Section: Navigation Links */}
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li className="nav-item">
            <Link to="/Home" className="nav-link">Home</Link>
          </li>

          <li className="nav-item" onMouseLeave={closeDropdown}>
          
            <Link to="/services/security" onMouseEnter={() => setIsOpen(!isOpen)} className="nav-link">
              Services
            </Link>
            {isOpen && (
              <ul className="dropdown-menu">
                {categories.map((category) => (
                  <li key={category.path}>
                    <Link to={`/services/${category.path}`} className="dropdown-item">
                      {category.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li className="nav-item">
            <Link to="/contactUs" className="nav-link">Contact us</Link>
          </li>
        </ul>      
      </nav>
    </Fragment>
  );
};

export default Navbar;





