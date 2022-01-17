import React from "react";
import Layout from "../../components/layout-component/Layout";
import MunicipalityView from "../../components/municipality-component/MunicipalityView";
import { useStaticQuery, graphql } from "gatsby";

const Municipality = (props) => {
  const municipalityId = props.params.municipalityId;
  const detailedMunicipalityData = useStaticQuery(graphql``);

  return (
    <Layout pageTitle="Hospital">
      <MunicipalityView />
    </Layout>
  );
};

export default Municipality;
