import React from "react";
import Layout from "../components/layout-component/Layout";
import MunicipalitiesView from "../components/municipalities-component/MunicipalitiesView";

const Municipalities = () => {
  return (
    <Layout pageTitle="Municipalities">
      <MunicipalitiesView municipalities={[]} />
    </Layout>
  );
};

export default Municipalities;
