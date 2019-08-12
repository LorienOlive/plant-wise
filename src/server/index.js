const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const mongoose = require("mongoose");
const bluebird = require("bluebird");

const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

const db = mongoose.connection;
mongoose
  .connect("mongodb://localhost:27017/plantwise", {
    useNewUrlParser: true,
    promiseLibrary: bluebird
  })
  .then(() => console.log("connection successful"))
  .catch(err => console.error(err));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    db: db
  }
});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 3000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
