import React from "react";
import "./NoContentView.css";

const NoContentView = ({ dataType }) => {
  return <div>There are currently no {dataType}.</div>;
};

export default NoContentView;
