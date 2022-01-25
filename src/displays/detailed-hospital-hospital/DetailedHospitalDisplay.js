import React from "react";
import "./DetailedHospitalDisplay.css";
import hospitalImage from "../../images/kindpng_2646334.png";
import { Municipalities } from "../../display-support/municipality-data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { navigate } from "@reach/router";
import { GET_ALL_HOSPITALS } from "../../queries/hospitals.query";
import { DELETE_HOSPITAL_BY_ID } from "../../mutations/hospitals.mutation";
import { useMutation } from "@apollo/client";

const DetailedHospitalDisplay = ({ detailedHospitalInformation }) => {
  const [deleteHospitalById, { data, loading, error }] = useMutation(DELETE_HOSPITAL_BY_ID, {
    refetchQueries: [GET_ALL_HOSPITALS]
  });

  const municipalityName = Municipalities.filter(
    (municipality) => municipality.municipalityKey === detailedHospitalInformation.municipality
  ).map((municipality) => municipality.municipalityName)[0];

  const deleteHospital = (hospitalId) => {
    deleteHospitalById({ variables: { hospitalKey: hospitalId } });
    navigate("/hospitals", { replace: true });
  };

  return (
    <div className="detailed-hospital-card">
      <img src={hospitalImage} className="hospitals-image" alt="Avatar"></img>
      <div className="detailed-information-container">
        <div className="information-label">{detailedHospitalInformation.hospitalName}</div>
        <div className="information-label">municipality:</div>
        <div className="information">{municipalityName}</div>
        <div
          className="delete-button-container"
          onClick={() => {
            deleteHospital(detailedHospitalInformation.hospitalKey);
          }}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </div>
      </div>
    </div>
  );
};

export default DetailedHospitalDisplay;
