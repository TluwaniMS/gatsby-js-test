import React from "react";
import "./HospitalView.css";
import DetailedHospitalDisplay from "../../displays/detailed-hospital-hospital/DetailedHospitalDisplay";

const HospitalView = ({ detailedHospitalInformation }) => {
  console.log(detailedHospitalInformation);

  return (
    <div className="main-detailed-hospital-information-container">
      <DetailedHospitalDisplay detailedHospitalInformation={detailedHospitalInformation} />
    </div>
  );
};

export default HospitalView;
