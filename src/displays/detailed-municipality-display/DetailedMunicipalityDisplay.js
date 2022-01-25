import React from "react";
import "./DetailedMunicipalityDisplay.css";
import { navigate } from "@reach/router";
import { useMutation } from "@apollo/client";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DELETE_MUNICIPALITY_BY_ID } from "../../mutations/municipalities.mutation";
import { GET_ALL_MUNICIPALITIES } from "../../queries/municipalities.query";
import municipalityImage from "../../images/city-hall.png";

const DetailedMunicipalityDisplay = ({ detailedMunicipalityView }) => {
  const [deleteMunicipalityByMunicipalKey] = useMutation(DELETE_MUNICIPALITY_BY_ID, {
    refetchQueries: [GET_ALL_MUNICIPALITIES]
  });

  const deleteMunicipality = (municipalityId) => {
    deleteMunicipalityByMunicipalKey({ variables: { municipalityKey: municipalityId } });
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
