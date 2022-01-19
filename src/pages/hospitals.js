import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_HOSPITALS } from "../queries/hospitals.query";
import HospitalsView from "../components/hospitals-component/HospitalsView";
import Layout from "../components/layout-component/Layout";
import SpinnerView from "../components/spinner-component/SpinnerView";
import NoContentView from "../components/no-content-component/NoContentView";

const Hospitals = () => {
  const { loading, error, data } = useQuery(GET_ALL_HOSPITALS);

  return (
    <Layout pageTitle="Hospitals">
      {loading && <SpinnerView />}
      {data.getAllHospitals.length > 0 && <HospitalsView hospitals={data.getAllHospitals} />}
      {data.getAllHospitals.length === 0 && <NoContentView />}
    </Layout>
  );
};

export default Hospitals;
