import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import * as serviceWorker from "./serviceWorker";

const cache = new InMemoryCache();
const link = new HttpLink({ uri: "http://localhost:4000/graphql" });
const client = new ApolloClient({ cache, link });

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
