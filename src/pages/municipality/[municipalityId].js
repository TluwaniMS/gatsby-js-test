import React from "react";
import Layout from "../../components/layout-component/Layout";
import MunicipalityView from "../../components/municipality-component/MunicipalityView";

const Municipality = (props) => {
  console.log(props.params.municipalityId);
  return (
    <Layout pageTitle="Hospital">
      <MunicipalityView />
    </Layout>
  );
};

export default Municipality;
