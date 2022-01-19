import React from "react";
import { GET_ALL_MUNICIPALITIES } from "../queries/municipalities.query";
import { useQuery } from "@apollo/client";
import Layout from "../components/layout-component/Layout";
import MunicipalitiesView from "../components/municipalities-component/MunicipalitiesView";
import SpinnerView from "../components/spinner-component/SpinnerView";
import NoContentView from "../components/no-content-component/NoContentView";

const Municipalities = () => {
  const { loading, error, data } = useQuery(GET_ALL_MUNICIPALITIES);

  return (
    <Layout pageTitle="Municipalities">
      {loading && <SpinnerView />}
      {data.getAllMunicipalities.length > 0 && <MunicipalitiesView municipalities={data.getAllMunicipalities} />}
      {data.getAllMunicipalities.length === 0 && <NoContentView />}
    </Layout>
  );
};

export default Municipalities;
