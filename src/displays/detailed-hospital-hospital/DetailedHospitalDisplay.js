import React from "react";
import "./DetailedHospitalDisplay.css";
import hospitalImage from "../../images/kindpng_2646334.png";

const DetailedHospitalDisplay = ({ detailedHospitalInformation }) => {
  return (
    <div className="detailed-hospital-card">
      <img src={hospitalImage} className="hospitals-image" alt="Avatar"></img>
      <div className="detailed-information-container">
        <div className="information-label">{detailedHospitalInformation.hospitalName}</div>
      </div>
    </div>
  );
};

export default DetailedHospitalDisplay;
