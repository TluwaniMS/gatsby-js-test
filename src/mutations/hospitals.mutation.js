import { gql } from "@apollo/client";

export const DELETE_HOSPITAL_BY_ID = gql`
  mutation DeleteHospitalById($_id: String!) {
    deleteHospitalById(_id: $_id)
  }
`;
