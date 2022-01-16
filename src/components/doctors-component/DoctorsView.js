import React from "react";
import "./DoctorsView.css";
import femaleDoctorImage from "../../images/female-doctor.jpg";
import maleDoctorImage from "../../images/2716211571598811054-128.png";

const DoctorsView = ({ doctors }) => {
  return (
    <div className="main-content-container">
      {doctors.map((doctor) => (
        <div className="doctors-card " key={doctor.id}>
          <img
            src={doctor.gender === "Female" ? femaleDoctorImage : maleDoctorImage}
            className="doctors-image"
            alt="Avatar"
          ></img>
          <div className="names-container">
            <span className="name-container">{doctor.firstName}</span>
            <span className="name-container">{doctor.lastName}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DoctorsView;
