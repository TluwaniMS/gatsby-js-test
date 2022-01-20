import React from "react";
import "./DetailedHospitalDisplay.css";
import hospitalImage from "../../images/kindpng_2646334.png";
import { Municipalities } from "../../display-support/municipality-data";

const DetailedHospitalDisplay = ({ detailedHospitalInformation }) => {
  const municipalityName = Municipalities.filter(
    (municipality) => municipality.municipalityKey === detailedHospitalInformation.municipality
  ).map((municipality) => municipality.municipalityName)[0];

  return (
    <div className="detailed-hospital-card">
      <img src={hospitalImage} className="hospitals-image" alt="Avatar"></img>
      <div className="detailed-information-container">
        <div className="information-label">{detailedHospitalInformation.hospitalName}</div>
        <div className="information-label">municipality:</div>
        <div className="information">{municipalityName}</div>
      </div>
    </div>
  );
};

export default DetailedHospitalDisplay;
