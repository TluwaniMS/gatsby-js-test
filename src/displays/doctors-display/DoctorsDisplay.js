import React from "react";
import "./DoctorsDisplay.css";
import { Link } from "gatsby";
import femaleDoctorImage from "../../images/female-doctor.jpg";
import maleDoctorImage from "../../images/2716211571598811054-128.png";

const DoctorsDisplay = ({ doctor }) => {
  return (
    <Link to={`/doctor/${doctor._id}`}>
      <img
        src={doctor.gender === "Female" ? femaleDoctorImage : maleDoctorImage}
        className="doctors-image"
        alt="Avatar"
      ></img>
      <div className="names-container">
        <span className="name-container">{doctor.firstName}</span>
        <span className="name-container">{doctor.lastName}</span>
      </div>
    </Link>
  );
};

export default DoctorsDisplay;
