import React from "react";
import DoctorsView from "../components/doctors-component/DoctorsView";
import Layout from "../components/layout-component/Layout";
import { useStaticQuery } from "gatsby";
import { GET_ALL_DOCTORS } from "../queries/doctors.queries";

const Doctors = () => {
  const doctorsData = useStaticQuery(GET_ALL_DOCTORS);

  console.log(doctorsData);
  return (
    <Layout pageTitle="Doctors">
      <DoctorsView />
    </Layout>
  );
};

export default Doctors;
