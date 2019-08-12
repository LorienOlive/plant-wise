const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 3000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
