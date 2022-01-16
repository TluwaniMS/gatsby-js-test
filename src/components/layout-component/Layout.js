import React from "react";
import Navbar from "../navbar-component/Navbar";
import Footer from "../footer-component/Footer";
import "./Layout.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="main-layout-container">
      <title>{pageTitle}</title>
      <Navbar />
      <main>
        <h1 className="page-title-container">{pageTitle}</h1>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
