import React from "react";
import "./DetailedDoctorsDisplay.css";
import { useMutation } from "@apollo/client";
import { navigate } from "@reach/router";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Hospitals } from "../../display-support/hospital-data";
import { DELETE_DOCTOR_BY_ID } from "../../mutations/doctors.mutation";
import { GET_ALL_DOCTORS } from "../../queries/doctors.query";
import femaleDoctorImage from "../../images/female-doctor.jpg";
import maleDoctorImage from "../../images/2716211571598811054-128.png";

const DetailedDoctorsDisplay = ({ detailedDoctorsInformation }) => {
  const [deleteDoctorById] = useMutation(DELETE_DOCTOR_BY_ID, {
    refetchQueries: [GET_ALL_DOCTORS]
  });

  const hospitalName = Hospitals.filter((hospital) => hospital.hospitalKey === detailedDoctorsInformation.hospital).map(
    (hospital) => hospital.hospitalName
  )[0];

  const deleteDoctor = (doctorId) => {
    deleteDoctorById({ variables: { doctorsId: parseInt(doctorId) } });
    navigate("/doctors", { replace: true });
  };

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

        <div
          className="delete-button-container"
          onClick={() => {
            deleteDoctor(detailedDoctorsInformation.id);
          }}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </div>
      </div>
    </div>
  );
};

export default DetailedDoctorsDisplay;
