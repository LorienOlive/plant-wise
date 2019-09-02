import React, { Fragment } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import SpeciesItem from "../../views/pages/plants/SpeciesItem";

const GET_SPECIES = gql`
  query {
    allSpecies {
      id
      type
      common_name
      images {
        url
      }
    }
  }
`;

const Species = () => {
  const { loading, error, data } = useQuery(GET_SPECIES);
  if (error) return <div>Oooops This is not working there are no plants!</div>;
  if (loading) return <p>Loading Plants ...</p>;

  const { allSpecies } = data;
  return (
    <div>
      {allSpecies &&
        !!allSpecies.length &&
        allSpecies.map(
          (speciesItem: {
            id: string;
            type: string;
            common_name: string;
            images: {
              url: string;
            }
          }) => <SpeciesItem key={speciesItem.type} speciesItem={speciesItem} />
        )}
    </div>
  );
};

export default Species;
