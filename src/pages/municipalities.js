import React from "react";
import Layout from "../components/layout-component/Layout";
import MunicipalitiesView from "../components/municipalities-component/MunicipalitiesView";

const municipalities = () => {
  return (
    <Layout pageTitle="Municipalities">
      <MunicipalitiesView />
    </Layout>
  );
};

export default municipalities;
