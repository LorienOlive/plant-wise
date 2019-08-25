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
      images {
        url
      }
    }
  }
`;

const Plants = () => {
  const { loading, error, data } = useQuery(GET_PLANTS);
    console.log('data', data);
  if (error) return <div>Oooops This is not working there are no plants!</div>;
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
            images: {
              url: string;
            }
          }) => <PlantItem key={plant.id} plant={plant} />
        )}
    </div>
  );
};

export default Plants;
