import { gql } from "@apollo/client";

export const DELETE_DOCTOR_BY_ID = gql`
  mutation DeleteDoctorById($doctorsId: Int!) {
    deleteDoctorById(doctorsId: $doctorsId)
  }
`;
