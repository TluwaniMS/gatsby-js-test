import React from "react";
import DoctorsView from "../components/doctors-component/DoctorsView";
import Layout from "../components/layout-component/Layout";

const Doctors = () => {
  return (
    <Layout pageTitle="Doctors">
      <DoctorsView doctors={[]} />
    </Layout>
  );
};

export default Doctors;
