import React from "react";
import "./SpinnerView.css";

const SpinnerView = () => {
  return (
    <div className="main-spinner-view-container">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default SpinnerView;
