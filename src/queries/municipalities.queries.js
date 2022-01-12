import { graphql } from "gatsby";

export const GET_ALL_MUNICIPALITIES = graphql`
  query {
    doctors_directory {
      getAllMunicipalities {
        municipalityName
        municipalityKey
      }
    }
  }
`;
