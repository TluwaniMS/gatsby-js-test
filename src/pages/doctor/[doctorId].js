import React from "react";
import Layout from "../../components/layout-component/Layout";
import DoctorView from "../../components/doctor-component/DoctorView";
import { useStaticQuery, graphql } from "gatsby";

const Doctor = (props) => {
  const doctorsId = props.params.doctorId;
  const detailedDoctorData = useStaticQuery(graphql``);

  return (
    <Layout pageTitle="Doctor">
      <DoctorView />
    </Layout>
  );
};

export default Doctor;
