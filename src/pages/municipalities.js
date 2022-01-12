import React from "react";
import Layout from "../components/layout-component/Layout";
import MunicipalitiesView from "../components/municipalities-component/MunicipalitiesView";
import { useStaticQuery } from "gatsby";
import { GET_ALL_MUNICIPALITIES } from "../queries/municipalities.queries";

const Municipalities = () => {
  const municipalitiesData = useStaticQuery(GET_ALL_MUNICIPALITIES);

  console.log(municipalitiesData);
  return (
    <Layout pageTitle="Municipalities">
      <MunicipalitiesView />
    </Layout>
  );
};

export default Municipalities;
