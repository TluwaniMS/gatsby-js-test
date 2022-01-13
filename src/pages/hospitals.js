import React from "react";
import HospitalsView from "../components/hospitals-component/HospitalsView";
import Layout from "../components/layout-component/Layout";
import { useStaticQuery, graphql } from "gatsby";

const Hospitals = () => {
  const hospitalsData = useStaticQuery(graphql`
    query {
      doctors_directory {
        getAllHospitals {
          hospitalName
          hospitalKey
        }
      }
    }
  `);

  console.log(hospitalsData);
  return (
    <Layout pageTitle="Hospitals">
      <HospitalsView />
    </Layout>
  );
};

export default Hospitals;
