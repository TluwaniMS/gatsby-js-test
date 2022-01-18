import React from "react";
import { Link } from "gatsby";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMd, faHospitalAlt, faHospital } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <main>
      <div className="main-navbar-container">
        <Link to="/doctors" className="navbar-item">
          <FontAwesomeIcon icon={faUserMd} />
          doctors
        </Link>
        <Link to="/hospitals" className="navbar-item">
          <FontAwesomeIcon icon={faHospital} />
          hospitals
        </Link>
        <Link to="/municipalities" className="navbar-item">
          <FontAwesomeIcon icon={faHospitalAlt} />
          municipalities
        </Link>
      </div>
    </main>
  );
};

export default Navbar;
