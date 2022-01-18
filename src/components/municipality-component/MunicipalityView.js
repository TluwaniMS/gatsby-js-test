import React from "react";
import "./MunicipalityView.css";
import DetailedMunicipalityDisplay from "../../displays/detailed-municipality-display/DetailedMunicipalityDisplay";

const MunicipalityView = ({ detailedMunicipalityView }) => {
  console.log(detailedMunicipalityView);

  return (
    <div className="main-detailed-municipality-information-container">
      <DetailedMunicipalityDisplay detailedMunicipalityView={detailedMunicipalityView} />
    </div>
  );
};

export default MunicipalityView;
