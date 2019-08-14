import React, { useEffect } from "react";
import { ApolloConsumer } from "react-apollo";

import Plants from "./app/graphql/queries/Plants";

import "./styles/App.css";

const App: React.FC = () => {
  return <ApolloConsumer>{client => <Plants />}</ApolloConsumer>;
};

export default App;
