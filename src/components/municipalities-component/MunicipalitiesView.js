import React from "react";
import "./MunicipalitiesView.css";

const MunicipalitiesView = ({ municipalities }) => {
  return (
    <div>
      {municipalities.map((municipality) => (
        <div className="card" key={municipality.municipalityKey}>
          <h4>{municipality.municipalityName}</h4>
        </div>
      ))}
    </div>
  );
};

export default MunicipalitiesView;
