import React from "react";
import Layout from "../../components/layout-component/Layout";
import HospitalView from "../../components/hospital-component/HospitalView";

const Hospital = (props) => {
  console.log(props.params.hospitalId);
  return (
    <Layout pageTitle="Hospital">
      <HospitalView />
    </Layout>
  );
};

export default Hospital;
