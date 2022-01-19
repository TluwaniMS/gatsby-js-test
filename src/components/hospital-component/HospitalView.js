import React from "react";
import "./HospitalView.css";
import DetailedHospitalDisplay from "../../displays/detailed-hospital-hospital/DetailedHospitalDisplay";
import DoctorsDisplay from "../../displays/doctors-display/DoctorsDisplay";
import NoContentView from "../no-content-component/NoContentView";

const HospitalView = ({ detailedHospitalInformation }) => {
  return (
    <div className="main-detailed-hospital-information-container">
      <div className="view-container">
        <DetailedHospitalDisplay detailedHospitalInformation={detailedHospitalInformation} />
      </div>
      <div className="view-container">
        {detailedHospitalInformation.doctors.length > 0 &&
          detailedHospitalInformation.doctors.map((doctor) => (
            <div className="doctors-card" key={doctor.id}>
              <DoctorsDisplay doctor={doctor} />
            </div>
          ))}
        {detailedHospitalInformation.doctors.length === 0 && <NoContentView />}
      </div>
    </div>
  );
};

export default HospitalView;
