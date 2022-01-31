import React from "react";
import "./HospitalDisplay.css";
import { Link } from "gatsby";
import hospitalImage from "../../images/kindpng_2646334.png";

const HospitalDisplay = ({ hospital }) => {
  return (
    <Link to={`/hospital/${hospital._id}`}>
      <img src={hospitalImage} className="hospital-image" alt="Avatar"></img>
      <div className="hospitals-container">
        <h4>{hospital.hospitalName}</h4>
      </div>
    </Link>
  );
};

export default HospitalDisplay;
