import React from "react";
import "./MunicipalitiesView.css";
import MunicipalityDisplay from "../../displays/municipality-display/MunicipalityDisplay";
import NoContentView from "../no-content-component/NoContentView";

const MunicipalitiesView = ({ municipalities }) => {
  return (
    <div className="main-content-container">
      {municipalities.length > 0 && municipalities.map((municipality) => (
        <div className="card" key={municipality.municipalityKey}>
          <MunicipalityDisplay municipality={municipality} />
        </div>
      ))}
      {municipalities.length === 0 && <NoContentView />}
    </div>
  );
};

export default MunicipalitiesView;
