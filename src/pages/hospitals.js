import React from "react";
import { DataType } from "../display-support/data-type";
import { useQuery } from "@apollo/client";
import { GET_ALL_HOSPITALS } from "../queries/hospitals.query";
import HospitalsView from "../components/hospitals-component/HospitalsView";
import Layout from "../components/layout-component/Layout";
import SpinnerView from "../components/spinner-component/SpinnerView";
import ErrorView from "../components/error-component/ErrorView";

const Hospitals = () => {
  const { loading, error, data } = useQuery(GET_ALL_HOSPITALS);

  return (
    <Layout pageTitle={DataType.Hospitals}>
      {loading && <SpinnerView />}
      {data && <HospitalsView hospitals={data.getAllHospitals} />}
      {error && <ErrorView />}
    </Layout>
  );
};

export default Hospitals;
