import React, { useEffect } from "react";
import { ApolloConsumer } from "react-apollo";

import Plants from "./app/graphql/queries/Plants";
import PlantsList from "./app/views/pages/plants/PlantsList";

import Species from "./app/graphql/queries/Species";
import SpeciesList from "./app/views/pages/plants/SpeciesList";

import "./styles/App.css";

const App: React.FC = () => {
  return (
    <ApolloConsumer>
      {client => (
        <SpeciesList>
          <Species />
        </SpeciesList>
      )}
    </ApolloConsumer>

  );
};

export default App;
