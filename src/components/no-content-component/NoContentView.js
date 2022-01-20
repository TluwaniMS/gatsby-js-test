import React from "react";
import "./NoContentView.css";

const NoContentView = ({ dataType }) => {
  return <div className="no-content-display-container">There are currently no {dataType}.</div>;
};

export default NoContentView;
