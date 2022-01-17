import React from "react";
import "./MunicipalitiesView.css";
import municipalityImage from "../../images/city-hall.png";
import { Link } from "gatsby";

const MunicipalitiesView = ({ municipalities }) => {
  return (
    <div className="main-content-container">
      {municipalities.map((municipality) => (
        <Link to={`/municipality/${municipality.municipalityKey}`} className="card" key={municipality.municipalityKey}>
          <img src={municipalityImage} className="municipality-image" alt="Avatar"></img>
          <div className="municipality-container">
            <h4>{municipality.municipalityName}</h4>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MunicipalitiesView;
