import React from "react";
import HospitalsView from "../components/hospitals-component/HospitalsView";
import Layout from "../components/layout-component/Layout";

const hospitals = () => {
  return (
    <Layout pageTitle="Hospitals">
      <HospitalsView />
    </Layout>
  );
};

export default hospitals;
