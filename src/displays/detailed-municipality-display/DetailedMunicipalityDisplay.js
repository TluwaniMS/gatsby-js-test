import React from "react";
import "./DetailedMunicipalityDisplay.css";
import municipalityImage from "../../images/city-hall.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { navigate } from "@reach/router";

const DetailedMunicipalityDisplay = ({ detailedMunicipalityView }) => {
  const deleteMunicipality = (municipalityId) => {
    navigate("/municipalities", { replace: true });
  };

  return (
    <div className="municipality-information-card ">
      <img src={municipalityImage} className="municipality-image" alt="Avatar"></img>
      <div className="municipality-information-container">
        <h4>{detailedMunicipalityView.municipalityName}</h4>
        <div
          className="delete-button-container"
          onClick={() => deleteMunicipality(detailedMunicipalityView.municipalityKey)}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </div>
      </div>
    </div>
  );
};

export default DetailedMunicipalityDisplay;
