import React from "react";
import "./DoctorsView.css";

const DoctorsView = ({ doctors }) => {
  return (
    <div className="main-content-container">
      {doctors.map((doctor) => (
        <div className="doctors-card " key={doctor.id}>
          <div className="container">
            <h4>{doctor.firstName}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DoctorsView;
