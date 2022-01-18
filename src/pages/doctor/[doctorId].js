import React from "react";
import { useQuery } from "@apollo/client";
import { GET_DOCTOR_BY_ID } from "../../queries/doctors.query";
import Layout from "../../components/layout-component/Layout";
import DoctorView from "../../components/doctor-component/DoctorView";
import SpinnerView from "../../components/spinner-component/SpinnerView";

const Doctor = (props) => {
  const doctorsId = props.params.doctorId;
  const { loading, error, data } = useQuery(GET_DOCTOR_BY_ID, { variables: { doctorsId: parseInt(doctorsId) } });

  return (
    <Layout pageTitle="Doctor">
      {loading && <SpinnerView />}
      {data && <DoctorView detailedDoctorsInformation={data.getDoctorById} />}
    </Layout>
  );
};

export default Doctor;
