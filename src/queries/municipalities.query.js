import { gql } from "@apollo/client";

export const GET_ALL_MUNICIPALITIES = gql`
  query GetAllMunicipalities {
    getAllMunicipalities {
      _id
      municipalityName
    }
  }
`;

export const GET_MUNICIPALITY_BY_ID = gql`
  query getMunicipalityByKey($_id: String!) {
    getMunicipalityByMunicipalityId(_id: $_id) {
      _id
      municipalityName
      hospitals {
        _id
        hospitalName
      }
    }
  }
`;
