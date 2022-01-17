import React from "react";
import "./DoctorView.css";
import femaleDoctorImage from "../../images/female-doctor.jpg";
import maleDoctorImage from "../../images/2716211571598811054-128.png";

const DoctorView = ({ detailedDoctorsInformation }) => {
  console.log(detailedDoctorsInformation);

  return (
    <div className="main-detailed-doctor-information-container">
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
        </div>
      </div>
    </div>
  );
};

export default DoctorView;
