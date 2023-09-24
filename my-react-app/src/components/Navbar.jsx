import React from 'react';
import { Link } from "react-router-dom";


function Navbar() {
  return (
    

       <nav >
  <div className="navbar" >
    <img src="src/assets/logo1.png" alt="Logo"  id='logo-nav' />
    
    <Link to="/" className="nav-link">Home</Link>
    <Link to="/doctors" className="nav-link">Main</Link>
    <Link to="/giveDetails" className="nav-link">Dr Registration</Link>
  </div>
</nav>

        



      

  )
};

export default Navbar;
