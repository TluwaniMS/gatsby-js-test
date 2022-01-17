import React from "react";
import HospitalsView from "../components/hospitals-component/HospitalsView";
import Layout from "../components/layout-component/Layout";

const Hospitals = () => {
  return (
    <Layout pageTitle="Hospitals">
      <HospitalsView hospitals={[]} />
    </Layout>
  );
};

export default Hospitals;
