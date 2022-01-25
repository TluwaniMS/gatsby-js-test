import React from "react";
import { useQuery } from "@apollo/client";
import { DataType } from "../display-support/data-type";
import { GET_ALL_MUNICIPALITIES } from "../queries/municipalities.query";
import Layout from "../components/layout-component/Layout";
import MunicipalitiesView from "../components/municipalities-component/MunicipalitiesView";
import SpinnerView from "../components/spinner-component/SpinnerView";
import ErrorView from "../components/error-component/ErrorView";

const Municipalities = () => {
  const { loading, error, data } = useQuery(GET_ALL_MUNICIPALITIES);

  return (
    <Layout pageTitle={DataType.Municipalities}>
      {loading && <SpinnerView />}
      {data && <MunicipalitiesView municipalities={data.getAllMunicipalities} />}
      {error && <ErrorView />}
    </Layout>
  );
};

export default Municipalities;
