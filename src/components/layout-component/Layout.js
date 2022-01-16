import React from "react";
import Navbar from "../navbar-component/Navbar";
import "./Layout.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="">
      <title>{pageTitle}</title>
      <Navbar />
      <main>
        <h1 className="page-title-container">{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
