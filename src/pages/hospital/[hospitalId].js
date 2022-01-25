import React from "react";
import { DataType } from "../../display-support/data-type";
import { useQuery } from "@apollo/client";
import { GET_HOSPITAL_BY_ID } from "../../queries/hospitals.query";
import Layout from "../../components/layout-component/Layout";
import HospitalView from "../../components/hospital-component/HospitalView";
import SpinnerView from "../../components/spinner-component/SpinnerView";
import ErrorView from "../../components/error-component/ErrorView";

const Hospital = (props) => {
  const hospitalId = props.params.hospitalId;
  const { loading, error, data } = useQuery(GET_HOSPITAL_BY_ID, { variables: { hospitalKey: hospitalId } });

  return (
    <Layout pageTitle={DataType.Hospital}>
      {loading && <SpinnerView />}
      {data && <HospitalView detailedHospitalInformation={data.getHospitalByHospitalKey} />}
      {error && <ErrorView />}
    </Layout>
  );
};

export default Hospital;
