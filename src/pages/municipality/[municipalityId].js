import React from "react";
import { useQuery } from "@apollo/client";
import { GET_MUNICIPALITY_BY_ID } from "../../queries/municipalities.query";
import Layout from "../../components/layout-component/Layout";
import MunicipalityView from "../../components/municipality-component/MunicipalityView";
import SpinnerView from "../../components/spinner-component/SpinnerView";
import ErrorView from "../../components/error-component/ErrorView";

const Municipality = (props) => {
  const municipalityId = props.params.municipalityId;
  const { loading, error, data } = useQuery(GET_MUNICIPALITY_BY_ID, {
    variables: { municipalityKey: municipalityId }
  });

  return (
    <Layout pageTitle="Hospital">
      {loading && <SpinnerView />}
      {data && <MunicipalityView detailedMunicipalityView={data.getMunicipalityByMunicipalityKey} />}
      {error && <ErrorView />}
    </Layout>
  );
};

export default Municipality;
