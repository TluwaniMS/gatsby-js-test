import React from "react";
import "./HospitalsView.css";
import HospitalDisplay from "../../displays/hospital-display/HospitalDisplay";
import NoContentView from "../no-content-component/NoContentView";
import { DataType } from "../../display-support/data-type";

const HospitalsView = ({ hospitals }) => {
  return (
    <div className="main-content-container">
      {hospitals.length > 0 &&
        hospitals.map((hospital) => (
          <div key={hospital.hospitalKey} className="hospitals-card">
            <HospitalDisplay hospital={hospital} />
          </div>
        ))}
      {hospitals.length === 0 && <NoContentView dataType={DataType.Hospitals} />}
    </div>
  );
};

export default HospitalsView;
