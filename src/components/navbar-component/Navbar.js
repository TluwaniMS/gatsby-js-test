import React from "react";
import { Link } from "gatsby";
import "./Navbar.css";

const Navbar = () => {
  return (
    <main>
      <div className="main-navbar-container">
        <Link to="/doctors" className="navbar-item">
          doctors
        </Link>
        <Link to="/hospitals" className="navbar-item">
          hospitals
        </Link>
        <Link to="/municipalities" className="navbar-item">
          municipalities
        </Link>
      </div>
    </main>
  );
};

export default Navbar;
