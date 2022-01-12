import { graphql } from "gatsby";

export const GET_ALL_HOSPITALS = graphql`
  query {
    doctors_directory {
      getAllHospitals {
        hospitalName
        hospitalKey
      }
    }
  }
`;
