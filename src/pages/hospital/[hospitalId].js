import React from "react";
import Layout from "../../components/layout-component/Layout";
import HospitalView from "../../components/hospital-component/HospitalView";
import { useStaticQuery, graphql } from "gatsby";

const Hospital = (props) => {
  const hospitalId = props.params.hospitalId;
  const detailedHospitalData = useStaticQuery(graphql``);

  return (
    <Layout pageTitle="Hospital">
      <HospitalView />
    </Layout>
  );
};

export default Hospital;
