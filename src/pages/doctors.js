import React from "react";
import { useQuery } from "@apollo/client";
import DoctorsView from "../components/doctors-component/DoctorsView";
import Layout from "../components/layout-component/Layout";
import { GET_ALL_DOCTORS } from "../queries/doctors.query";

const Doctors = () => {
  const { loading, error, data } = useQuery(GET_ALL_DOCTORS);

  return <Layout pageTitle="Doctors">{data && <DoctorsView doctors={data.getAllDoctors} />}</Layout>;
};

export default Doctors;
