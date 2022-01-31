import { gql } from "@apollo/client";

export const GET_ALL_HOSPITALS = gql`
  query GetAllHospitals {
    getAllHospitals {
      _id
      hospitalName
      hospitalKey
    }
  }
`;

export const GET_HOSPITAL_BY_ID = gql`
  query GetHospitalByHospitalKey($_id: String!) {
    getHospitalByHospitalById(_id: $_id) {
      _id
      hospitalName
      municipality
      doctors {
        _id
        firstName
        lastName
        gender
        email
      }
    }
  }
`;
