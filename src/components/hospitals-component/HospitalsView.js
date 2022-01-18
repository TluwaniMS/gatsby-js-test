import React from "react";
import "./HospitalsView.css";
import HospitalDisplay from "../../displays/hospital-display/HospitalDisplay";

const HospitalsView = ({ hospitals }) => {
  return (
    <div className="main-content-container">
      {hospitals.map((hospital) => (
        <div key={hospital.hospitalKey} className="hospitals-card">
          <HospitalDisplay hospital={hospital} />
        </div>
      ))}
    </div>
  );
};

export default HospitalsView;
