import React from "react";

const MunicipalitiesView = ({ municipalities }) => {
  return (
    <div>
      {municipalities.map((municipality) => (
        <h4>{municipality.municipalityName}</h4>
      ))}
    </div>
  );
};

export default MunicipalitiesView;
