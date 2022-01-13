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

  return (
    <Layout pageTitle="Municipalities">
      <MunicipalitiesView municipalities={municipalitiesData.doctors_directory.getAllMunicipalities} />
    </Layout>
  );
};

export default Municipalities;
