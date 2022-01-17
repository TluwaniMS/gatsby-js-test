import React from "react";
import HospitalsView from "../components/hospitals-component/HospitalsView";
import Layout from "../components/layout-component/Layout";
import { useQuery } from "@apollo/client";
import { GET_ALL_HOSPITALS } from "../queries/hospitals.query";

const Hospitals = () => {
  const { loading, error, data } = useQuery(GET_ALL_HOSPITALS);
  return <Layout pageTitle="Hospitals">{data && <HospitalsView hospitals={data.getAllHospitals} />}</Layout>;
};

export default Hospitals;
