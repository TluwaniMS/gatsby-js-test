import React from "react";
import Layout from "../components/layout-component/Layout";
import MunicipalitiesView from "../components/municipalities-component/MunicipalitiesView";
import { GET_ALL_MUNICIPALITIES } from "../queries/municipalities.query";
import { useQuery } from "@apollo/client";

const Municipalities = () => {
  const { loading, error, data } = useQuery(GET_ALL_MUNICIPALITIES);

  return (
    <Layout pageTitle="Municipalities">
      {data && <MunicipalitiesView municipalities={data.getAllMunicipalities} />}
    </Layout>
  );
};

export default Municipalities;
