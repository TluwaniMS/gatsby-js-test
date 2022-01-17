import React from "react";
import { useQuery } from "@apollo/client";
import Layout from "../../components/layout-component/Layout";
import HospitalView from "../../components/hospital-component/HospitalView";
import { GET_HOSPITAL_BY_ID } from "../../queries/hospitals.query";

const Hospital = (props) => {
  const hospitalId = props.params.hospitalId;
  const { loading, error, data } = useQuery(GET_HOSPITAL_BY_ID, { variables: { hospitalKey: hospitalId } });

  return (
    <Layout pageTitle="Hospital">
      {data && <HospitalView detailedHospitalInformation={data.getHospitalByHospitalKey} />}
    </Layout>
  );
};

export default Hospital;
