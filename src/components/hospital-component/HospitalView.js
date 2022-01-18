import React from "react";
import "./HospitalView.css";
import DetailedHospitalDisplay from "../../displays/detailed-hospital-hospital/DetailedHospitalDisplay";
import DoctorsDisplay from "../../displays/doctors-display/DoctorsDisplay";

const HospitalView = ({ detailedHospitalInformation }) => {

  return (
    <div className="main-detailed-hospital-information-container">
      <div className="view-container">
        <DetailedHospitalDisplay detailedHospitalInformation={detailedHospitalInformation} />
      </div>
      <div className="view-container">
        {detailedHospitalInformation.doctors.map((doctor) => (
          <div className="doctors-card" key={doctor.id}>
            <DoctorsDisplay doctor={doctor} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HospitalView;
