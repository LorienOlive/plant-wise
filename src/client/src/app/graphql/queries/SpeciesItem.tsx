import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_ONE_SPECIES = gql`
  query {
    oneSpecies {
      id
      type
      common_name
      images {
        url
      }
    }
  }
`;

function SpeciesItemQuery() {
  const { loading, error, data } = useQuery(GET_ONE_SPECIES);
  if (loading) return <p>Loading Plant ...</p>;
  try {
    return data.speciesItem;
  } catch {
    console.log(error);
    return error;
  }
}

export default {
  action: GET_ONE_SPECIES,
  query: SpeciesItemQuery
};
