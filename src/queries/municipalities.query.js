import { gql } from "@apollo/client";

export const GET_ALL_MUNICIPALITIES = gql`
  query GetAllMunicipalities {
    getAllMunicipalities {
      municipalityName
      municipalityKey
    }
  }
`;

export const GET_MUNICIPALITY_BY_ID = gql`
  query getMunicipalityByKey($municipalityKey: String!) {
    getMunicipalityByMunicipalityKey(municipalityKey: $municipalityKey) {
      municipalityName
      municipalityKey
      hospitals {
        hospitalName
      }
    }
  }
`;
