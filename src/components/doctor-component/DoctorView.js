import React from "react";
import "./DoctorView.css";
import DetailedDoctorsDisplay from "../../displays/detailed-doctors-display/DetailedDoctorsDisplay";

const DoctorView = ({ detailedDoctorsInformation }) => {
  return (
    <div className="main-detailed-doctor-information-container">
      <DetailedDoctorsDisplay detailedDoctorsInformation={detailedDoctorsInformation} />
    </div>
  );
};

export default DoctorView;
