import { gql } from "@apollo/client";

export const DELETE_MUNICIPALITY_BY_ID = gql`
  mutation DeleteMunicipalityById($_id: String!) {
    deleteMunicipalityByMunicipalId(_id: $_id)
  }
`;
