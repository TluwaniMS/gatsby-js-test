import { gql } from "@apollo/client";

export const GET_ALL_DOCTORS = gql`
  query GetAllDoctors {
    getAllDoctors {
      _id
      firstName
      lastName
      gender
    }
  }
`;

export const GET_DOCTOR_BY_ID = gql`
  query GetDoctorById($_id: String!) {
    getDoctorById(_id: $_id) {
      _id
      firstName
      lastName
      gender
      email
      hospital
      info {
        specialty
        hospital
      }
    }
  }
`;
