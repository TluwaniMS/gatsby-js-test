import React from "react";
import DoctorsView from "../components/doctors-component/DoctorsView";
import Layout from "../components/layout-component/Layout";
import { useStaticQuery, graphql } from "gatsby";

const Doctors = () => {
  const doctorsData = useStaticQuery(graphql`
    query {
      doctors_directory {
        getAllDoctors {
          id
          firstName
          lastName
          gender
        }
      }
    }
  `);

  return (
    <Layout pageTitle="Doctors">
      <DoctorsView doctors={doctorsData.doctors_directory.getAllDoctors} />
    </Layout>
  );
};

export default Doctors;
