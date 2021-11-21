import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import "./Navbar.scss";

const Navbar = () => {

    const [isMobile, setIsMobile] = useState(false);

    return (
        <nav className="navbar"> 
            <h3 className="logo">TECH-MEDICAL</h3>
            <ul className={isMobile? "nav-links-mobile" : "nav-links"}
            onClick={() => setIsMobile(false)}
            >
               <Link to="/" className="home">
                   <li>Home</li>
              </Link>
              <Link to="/Covid19" className="Covid19">
                   <li>COVID-19 Cases</li>
              </Link>
              <Link to="/Vaccine" className="Vaccine">
                   <li>Vaccination</li>
              </Link>
            </ul>
            <button className="mobile-menu-icon"
            onClick={() => setIsMobile(!isMobile)}
            >
                {isMobile ? (
                <i className="fas fa-times"></i>
                 ) : (
                 <i className="fas fa-bars"></i>
                 )}
            </button>
        </nav>
    )
}

export default Navbar
