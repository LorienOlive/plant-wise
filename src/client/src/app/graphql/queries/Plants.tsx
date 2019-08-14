import React, { Fragment } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import PlantItem from "../../views/pages/plants/PlantItem";

const GET_PLANTS = gql`
  query {
    allPlants {
      id
      slug
      scientific_name
      link
      complete_data
      common_name
    }
  }
`;

const Plants = () => {
  const { loading, error, data } = useQuery(GET_PLANTS);
  console.log(loading, error, data);
  if (error) return <div>Oooops</div>;
  if (loading) return <p>Loading Plants ...</p>;

  const { allPlants } = data;
  return (
    <div>
      {allPlants &&
        !!allPlants.length &&
        allPlants.map(
          (plant: {
            id: string;
            slug: string;
            scientific_name: string;
            link: string;
            complete_data: boolean;
            common_name: string;
          }) => <PlantItem plant={plant} />
        )}
    </div>
  );
};

export default Plants;
