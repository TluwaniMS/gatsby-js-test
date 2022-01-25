import React from "react";
import "./Layout.css";
import { DataType } from "../../display-support/data-type";
import { ApolloProvider } from "@apollo/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMd, faHospitalAlt, faHospital } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../navbar-component/Navbar";
import Footer from "../footer-component/Footer";

const Layout = ({ pageTitle, children }) => {
  const DoctorsView = pageTitle === DataType.Doctors || pageTitle === DataType.Doctor;
  const HospitalsView = pageTitle === DataType.Hospitals || pageTitle === DataType.Hospital;
  const MunicipalitiesView = pageTitle === DataType.Municipalities || pageTitle === DataType.Municipality;

  return (
    <ApolloProvider>
      <div className="main-layout-container">
        <title>{pageTitle}</title>
        <Navbar />
        <main>
          {DoctorsView && (
            <div className="view-icon">
              <FontAwesomeIcon icon={faUserMd} />
            </div>
          )}
          {HospitalsView && (
            <div className="view-icon">
              <FontAwesomeIcon icon={faHospital} />
            </div>
          )}
          {MunicipalitiesView && (
            <div className="view-icon">
              <FontAwesomeIcon icon={faHospitalAlt} />
            </div>
          )}
          <h1 className="page-title-container">{pageTitle}</h1>
          {children}
        </main>
        <Footer />
      </div>
    </ApolloProvider>
  );
};

export default Layout;
