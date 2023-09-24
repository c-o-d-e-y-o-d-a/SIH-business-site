import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    

       <nav >
  <div className="navbar" >
    <img src="src/assets/logo-doctor.png" alt="Logo" className="nav-link" id='logo' />
    
    <Link to="/" className="nav-link">Home</Link>
    <Link to="/doctors" className="nav-link">Main</Link>
    <Link to="/Signup" className="nav-link">Sign up</Link>
    <Link to="/giveDetails" className="nav-link">Add details</Link>
  </div>
</nav>

        



      

  )
};

export default Navbar;
