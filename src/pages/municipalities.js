import React from "react";
import Layout from "../components/layout-component/Layout";
import MunicipalitiesView from "../components/municipalities-component/MunicipalitiesView";
import { useStaticQuery, graphql } from "gatsby";

const Municipalities = () => {
  const municipalitiesData = useStaticQuery(graphql`
    query {
      doctors_directory {
        getAllMunicipalities {
          municipalityName
          municipalityKey
        }
      }
    }
  `);

  console.log(municipalitiesData);
  return (
    <Layout pageTitle="Municipalities">
      <MunicipalitiesView />
    </Layout>
  );
};

export default Municipalities;
