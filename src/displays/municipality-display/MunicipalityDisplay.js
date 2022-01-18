import React from "react";
import { Link } from "gatsby";
import "./MunicipalityDisplay.css";
import municipalityImage from "../../images/city-hall.png";

const MunicipalityDisplay = ({ municipality }) => {
  return (
    <Link to={`/municipality/${municipality.municipalityKey}`}>
      <img src={municipalityImage} className="municipality-image" alt="Avatar"></img>
      <div className="municipality-container">
        <h4>{municipality.municipalityName}</h4>
      </div>
    </Link>
  );
};

export default MunicipalityDisplay;
