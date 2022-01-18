import React from "react";
import "./DetailedMunicipalityDisplay.css";
import municipalityImage from "../../images/city-hall.png";

const DetailedMunicipalityDisplay = ({ detailedMunicipalityView }) => {
  return (
    <div className="card">
      <img src={municipalityImage} className="municipality-image" alt="Avatar"></img>
      <div className="municipality-container">
        <h4>{detailedMunicipalityView.municipalityName}</h4>
      </div>
    </div>
  );
};

export default DetailedMunicipalityDisplay;
