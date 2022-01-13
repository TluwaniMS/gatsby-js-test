import React from "react";
import "./HospitalsView.css";

const HospitalsView = ({ hospitals }) => {
  return (
    <div>
      {hospitals.map((hospital) => (
        <div className="card" key={hospital.hospitalKey}>
          <h4>{hospital.hospitalName}</h4>
        </div>
      ))}
    </div>
  );
};

export default HospitalsView;
