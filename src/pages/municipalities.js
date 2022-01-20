import React from "react";
import { GET_ALL_MUNICIPALITIES } from "../queries/municipalities.query";
import { useQuery } from "@apollo/client";
import Layout from "../components/layout-component/Layout";
import MunicipalitiesView from "../components/municipalities-component/MunicipalitiesView";
import SpinnerView from "../components/spinner-component/SpinnerView";

const Municipalities = () => {
  const { loading, error, data } = useQuery(GET_ALL_MUNICIPALITIES);

  return (
    <Layout pageTitle="Municipalities">
      {loading && <SpinnerView />}
      {data && <MunicipalitiesView municipalities={data.getAllMunicipalities} />}
    </Layout>
  );
};

export default Municipalities;
