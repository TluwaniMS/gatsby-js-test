import React from "react";
import HospitalsView from "../components/hospitals-component/HospitalsView";
import Layout from "../components/layout-component/Layout";
import { useStaticQuery } from "gatsby";
import { GET_ALL_HOSPITALS } from "../queries/hospitals.queries";

const Hospitals = () => {
  const hospitalsData = useStaticQuery(GET_ALL_HOSPITALS);

  console.log(hospitalsData);
  return (
    <Layout pageTitle="Hospitals">
      <HospitalsView />
    </Layout>
  );
};

export default Hospitals;
