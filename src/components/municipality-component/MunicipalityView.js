import React from "react";
import "./MunicipalityView.css";
import DetailedMunicipalityDisplay from "../../displays/detailed-municipality-display/DetailedMunicipalityDisplay";
import HospitalDisplay from "../../displays/hospital-display/HospitalDisplay";

const MunicipalityView = ({ detailedMunicipalityView }) => {
  console.log(detailedMunicipalityView);

  return (
    <div className="main-detailed-municipality-information-container">
      <div className="view-container">
        <DetailedMunicipalityDisplay detailedMunicipalityView={detailedMunicipalityView} />
      </div>

      <div className="view-container">
        {detailedMunicipalityView.hospitals.map((hospital) => (
          <div key={hospital.hospitalKey} className="hospitals-card">
            <HospitalDisplay hospital={hospital} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MunicipalityView;
