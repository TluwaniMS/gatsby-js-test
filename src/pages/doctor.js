import React from "react";
import Layout from "../components/layout-component/Layout";
import DoctorView from "../components/doctor-component/DoctorView";

const Doctor = () => {
  return (
    <Layout pageTitle="Doctor">
      <DoctorView />
    </Layout>
  );
};

export default Doctor;
