import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_ONE_PLANT = gql`
  query onePlant {
    id
    slug
    scientific_name
    link
    complete_data
    common_name
    images {
      url
    }
  }
`;

function PlantQuery() {
  const { loading, error, data } = useQuery(GET_ONE_PLANT);
  if (loading) return <p>Loading Plant ...</p>;
  try {
    return data.plant;
  } catch {
    console.log(error);
    return error;
  }
}

export default {
  action: GET_ONE_PLANT,
  query: PlantQuery
};
