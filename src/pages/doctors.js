import React from "react";
import DoctorsView from "../components/doctors-component/DoctorsView";
import Layout from "../components/layout-component/Layout";

const doctors = () => {
  return (
    <Layout pageTitle="Doctors">
      <DoctorsView />
    </Layout>
  );
};

export default doctors;
