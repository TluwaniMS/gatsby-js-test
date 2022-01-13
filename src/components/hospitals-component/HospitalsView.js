import React from "react";

const HospitalsView = ({ hospitals }) => {
  return (
    <div>
      {hospitals.map((hospital) => (
        <h4>{hospital.hospitalName}</h4>
      ))}
    </div>
  );
};

export default HospitalsView;
