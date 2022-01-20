import { gql } from "@apollo/client";

export const DELETE_MUNICIPALITY_BY_ID = gql`
  mutation DeleteMunicipalityById($municipalityKey: String!) {
    deleteMunicipalityByMunicipalKey(municipalityKey: $municipalityKey)
  }
`;
