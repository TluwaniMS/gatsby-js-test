import React from "react";
import "./MunicipalityView.css";
import municipalityImage from "../../images/city-hall.png";

const MunicipalityView = ({ detailedMunicipalityView }) => {
  console.log(detailedMunicipalityView);

  return (
    <div className="main-detailed-municipality-information-container">
      <div className="card">
        <img src={municipalityImage} className="municipality-image" alt="Avatar"></img>
        <div className="municipality-container">
          <h4>{detailedMunicipalityView.municipalityName}</h4>
        </div>
      </div>
    </div>
  );
};

export default MunicipalityView;
