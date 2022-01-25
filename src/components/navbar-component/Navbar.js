import React from "react";
import "./Navbar.css";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMd, faHospitalAlt, faHospital } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <main>
      <div className="main-navbar-container">
        <Link to="/doctors" className="navbar-item">
          <FontAwesomeIcon icon={faUserMd} className="navbar-icon" />
          doctors
        </Link>
        <Link to="/hospitals" className="navbar-item">
          <FontAwesomeIcon icon={faHospital} className="navbar-icon" />
          hospitals
        </Link>
        <Link to="/municipalities" className="navbar-item">
          <FontAwesomeIcon icon={faHospitalAlt} className="navbar-icon" />
          municipalities
        </Link>
      </div>
    </main>
  );
};

export default Navbar;
