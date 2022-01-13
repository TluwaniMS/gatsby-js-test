import React from "react";
import "./HospitalsView.css";

const HospitalsView = ({ hospitals }) => {
  return (
    <div className="main-content-container">
      {hospitals.map((hospital) => (
        <div className="card" key={hospital.hospitalKey}>
          <h4>{hospital.hospitalName}</h4>
        </div>
      ))}
    </div>
  );
};

export default HospitalsView;
