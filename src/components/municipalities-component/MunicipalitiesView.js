import React from "react";
import "./MunicipalitiesView.css";
import MunicipalityDisplay from "../../displays/municipality-display/MunicipalityDisplay";

const MunicipalitiesView = ({ municipalities }) => {
  return (
    <div className="main-content-container">
      {municipalities.map((municipality) => (
        <div className="card" key={municipality.municipalityKey}>
          <MunicipalityDisplay municipality={municipality} />
        </div>
      ))}
    </div>
  );
};

export default MunicipalitiesView;
