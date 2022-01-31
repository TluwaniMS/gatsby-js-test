import React from "react";
import "./DoctorsView.css";
import { DataType } from "../../display-support/data-type";
import DoctorsDisplay from "../../displays/doctors-display/DoctorsDisplay";
import NoContentView from "../no-content-component/NoContentView";

const DoctorsView = ({ doctors }) => {
  return (
    <div className="main-content-container">
      {doctors.length > 0 &&
        doctors.map((doctor) => (
          <div className="doctors-card" key={doctor._id}>
            <DoctorsDisplay doctor={doctor} />
          </div>
        ))}
      {doctors.length === 0 && <NoContentView dataType={DataType.Doctors} />}
    </div>
  );
};

export default DoctorsView;
