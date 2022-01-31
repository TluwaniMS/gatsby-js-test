import { gql } from "@apollo/client";

export const DELETE_DOCTOR_BY_ID = gql`
  mutation DeleteDoctorById($_id: String!) {
    deleteDoctorById(_id: $_id)
  }
`;
