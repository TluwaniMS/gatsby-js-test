import React from "react";
import "./HospitalsView.css";
import hospitalImage from "../../images/kindpng_2646334.png";

const HospitalsView = ({ hospitals }) => {
  return (
    <div className="main-content-container">
      {hospitals.map((hospital) => (
        <div className="hospitals-card" key={hospital.hospitalKey}>
          <img src={hospitalImage} className="hospital-image" alt="Avatar"></img>
          <div className="hospitals-container">
            <h4>{hospital.hospitalName}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HospitalsView;
