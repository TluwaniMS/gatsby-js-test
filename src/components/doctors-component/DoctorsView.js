import React from "react";
import "./DoctorsView.css";

const DoctorsView = ({ doctors }) => {
  return (
    <div>
      {doctors.map((doctor) => (
        <div className="card" key={doctor.id}>
          <h4>{doctor.firstName}</h4>
        </div>
      ))}
    </div>
  );
};

export default DoctorsView;
