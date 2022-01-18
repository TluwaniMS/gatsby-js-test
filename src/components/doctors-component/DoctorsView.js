import React from "react";
import "./DoctorsView.css";
import DoctorsDisplay from "../../displays/doctors-display/DoctorsDisplay";

const DoctorsView = ({ doctors }) => {
  return (
    <div className="main-content-container">
      {doctors.map((doctor) => (
        <div className="doctors-card" key={doctor.id}>
          <DoctorsDisplay doctor={doctor} />
        </div>
      ))}
    </div>
  );
};

export default DoctorsView;
