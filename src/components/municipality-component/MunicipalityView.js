import React from "react";
import "./MunicipalityView.css";
import { DataType } from "../../display-support/data-type";
import DetailedMunicipalityDisplay from "../../displays/detailed-municipality-display/DetailedMunicipalityDisplay";
import HospitalDisplay from "../../displays/hospital-display/HospitalDisplay";
import NoContentView from "../no-content-component/NoContentView";

const MunicipalityView = ({ detailedMunicipalityView }) => {

  return (
    <div className="main-detailed-municipality-information-container">
      <div className="view-container">
        <DetailedMunicipalityDisplay detailedMunicipalityView={detailedMunicipalityView} />
      </div>

      <div className="view-container">
        {detailedMunicipalityView.hospitals.length > 0 &&
          detailedMunicipalityView.hospitals.map((hospital) => (
            <div key={hospital.hospitalKey} className="hospitals-card">
              <HospitalDisplay hospital={hospital} />
            </div>
          ))}
        {detailedMunicipalityView.hospitals.length === 0 && <NoContentView dataType={DataType.Hospitals} />}
      </div>
    </div>
  );
};

export default MunicipalityView;
