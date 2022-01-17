import React from "react";
import "./HospitalView.css";
import hospitalImage from "../../images/kindpng_2646334.png";

const HospitalView = ({ detailedHospitalInformation }) => {
  console.log(detailedHospitalInformation);

  return (
    <div className="main-detailed-hospital-information-container">
      <div className="detailed-hospital-card">
        <img src={hospitalImage} className="hospitals-image" alt="Avatar"></img>
        <div className="detailed-information-container">
          <div className="information-label">{detailedHospitalInformation.hospitalName}</div>
        </div>
      </div>
    </div>
  );
};

export default HospitalView;
