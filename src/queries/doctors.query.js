import { gql } from "@apollo/client";

export const GET_ALL_DOCTORS = gql`
  query GetAllDoctors {
    getAllDoctors {
      id
      firstName
      lastName
      gender
    }
  }
`;

export const GET_DOCTOR_BY_ID = gql`
  query GetDoctorById($doctorsId: Int!) {
    getDoctorById(doctorsId: $doctorsId) {
      id
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
