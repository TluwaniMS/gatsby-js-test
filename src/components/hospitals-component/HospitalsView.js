import React from "react";
import "./HospitalsView.css";
import { DataType } from "../../display-support/data-type";
import HospitalDisplay from "../../displays/hospital-display/HospitalDisplay";
import NoContentView from "../no-content-component/NoContentView";

const HospitalsView = ({ hospitals }) => {
  return (
    <div className="main-content-container">
      {hospitals.length > 0 &&
        hospitals.map((hospital) => (
          <div key={hospital._id} className="hospitals-card">
            <HospitalDisplay hospital={hospital} />
          </div>
        ))}
      {hospitals.length === 0 && <NoContentView dataType={DataType.Hospitals} />}
    </div>
  );
};

export default HospitalsView;
