import React from "react";

const DoctorsView = ({ doctors }) => {
  return (
    <div>
      {doctors.map((doctor) => (
        <h4>{doctor.firstName}</h4>
      ))}
    </div>
  );
};

export default DoctorsView;
