import React from "react";
import { useQuery } from "@apollo/client";
import Layout from "../../components/layout-component/Layout";
import MunicipalityView from "../../components/municipality-component/MunicipalityView";
import { GET_MUNICIPALITY_BY_ID } from "../../queries/municipalities.query";

const Municipality = (props) => {
  const municipalityId = props.params.municipalityId;
  const { loading, error, data } = useQuery(GET_MUNICIPALITY_BY_ID, {
    variables: { municipalityKey: municipalityId }
  });

  return (
    <Layout pageTitle="Hospital">
      {data && <MunicipalityView detailedMunicipalityView={data.getMunicipalityByMunicipalityKey} />}
    </Layout>
  );
};

export default Municipality;
