import React from "react";
import Layout from "../../components/layout-component/Layout";
import DoctorView from "../../components/doctor-component/DoctorView";

const Doctor = (props) => {
  const doctorsId = props.params.doctorId;

  return (
    <Layout pageTitle="Doctor">
      <DoctorView />
    </Layout>
  );
};

export default Doctor;
