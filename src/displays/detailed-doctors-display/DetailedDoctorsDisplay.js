import React from "react";
import "./DetailedDoctorsDisplay.css";
import femaleDoctorImage from "../../images/female-doctor.jpg";
import maleDoctorImage from "../../images/2716211571598811054-128.png";
import { Hospitals } from "../../display-support/hospital-data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const DetailedDoctorsDisplay = ({ detailedDoctorsInformation }) => {
  const hospitalName = Hospitals.filter((hospital) => hospital.hospitalKey === detailedDoctorsInformation.hospital).map(
    (hospital) => hospital.hospitalName
  )[0];

  return (
    <div className="detailed-doctor-card">
      <img
        src={detailedDoctorsInformation.gender === "Female" ? femaleDoctorImage : maleDoctorImage}
        className="doctors-image"
        alt="Avatar"
      ></img>
      <div className="detailed-information-container">
        <div className="information-label">Name:</div>
        <div className="information">{`${detailedDoctorsInformation.firstName} ${detailedDoctorsInformation.lastName}`}</div>
        <div className="information-label">Email:</div>
        <div className="information">{detailedDoctorsInformation.email}</div>
        <div className="information-label">gender:</div>
        <div className="information">{detailedDoctorsInformation.gender}</div>
        <div className="information-label">hospital:</div>
        <div className="information">{hospitalName}</div>

        <div className="delete-button-container">
          <FontAwesomeIcon icon={faTrashAlt} />
        </div>
      </div>
    </div>
  );
};

export default DetailedDoctorsDisplay;
