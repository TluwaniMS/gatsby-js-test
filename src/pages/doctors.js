import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_DOCTORS } from "../queries/doctors.query";
import DoctorsView from "../components/doctors-component/DoctorsView";
import Layout from "../components/layout-component/Layout";
import SpinnerView from "../components/spinner-component/SpinnerView";
import NoContentView from "../components/no-content-component/NoContentView";

const Doctors = () => {
  const { loading, error, data } = useQuery(GET_ALL_DOCTORS);

  return (
    <Layout pageTitle="Doctors">
      {loading && <SpinnerView />}
      {data.getAllDoctors.length > 0 && <DoctorsView doctors={data.getAllDoctors} />}
      {data.getAllDoctors.length === 0 && <NoContentView />}
    </Layout>
  );
};

export default Doctors;
