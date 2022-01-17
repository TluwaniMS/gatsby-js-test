import React from "react";
import { useQuery } from "@apollo/client";
import Layout from "../../components/layout-component/Layout";
import DoctorView from "../../components/doctor-component/DoctorView";
import { GET_DOCTOR_BY_ID } from "../../queries/doctors.query";

const Doctor = (props) => {
  const doctorsId = props.params.doctorId;
  const { loading, error, data } = useQuery(GET_DOCTOR_BY_ID, { variables: { doctorsId: parseInt(doctorsId) } });

  return <Layout pageTitle="Doctor">{data && <DoctorView />}</Layout>;
};

export default Doctor;
