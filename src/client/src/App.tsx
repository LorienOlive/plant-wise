import React, { useEffect } from "react";
import { ApolloConsumer } from "react-apollo";

import Plants from "./app/graphql/queries/Plants";
import PlantsList from "./app/views/pages/plants/PlantsList";

import "./styles/App.css";

const App: React.FC = () => {
  return (
    <ApolloConsumer>
      {client => (
        <PlantsList>
          <Plants />
        </PlantsList>
      )}
    </ApolloConsumer>
  );
};

export default App;
