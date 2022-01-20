import React from "react";
import "./ErrorView.css";

const ErrorView = () => {
  return (
    <div className="error-display-container">
      An error was encountered in the process of retrieving the requested data, please try again later.
    </div>
  );
};

export default ErrorView;
