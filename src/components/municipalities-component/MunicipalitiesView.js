import React from "react";
import "./MunicipalitiesView.css";
import municipalityImage from "../../images/city-hall.png";

const MunicipalitiesView = ({ municipalities }) => {
  return (
    <div className="main-content-container">
      {municipalities.map((municipality) => (
        <div className="card" key={municipality.municipalityKey}>
          <img src={municipalityImage} className="municipality-image" alt="Avatar"></img>
          <div className="municipality-container">
            <h4>{municipality.municipalityName}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MunicipalitiesView;
