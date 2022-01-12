import { graphql } from "gatsby";

export const GET_ALL_DOCTORS = graphql`
  query {
    doctors_directory {
      getAllDoctors {
        id
        firstName
        lastName
      }
    }
  }
`;
