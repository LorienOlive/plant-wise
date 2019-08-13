const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const mongoose = require("mongoose");
const bluebird = require("bluebird");
const bodyParser = require("body-parser");

const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

// Mongo & Apollo server setup
function main() {
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

  const app = express(); // Export app for other routes to use

  app.use(
    bodyParser.urlencoded({
      // Middleware
      extended: true
    })
  );
  app.use(bodyParser.json());

  //   app.get("/plants", (req, res) => {
  //     fetch("https://trefle.io/api/plants", {
  //       method: "POST",
  //       headers: {
  //         Authorization: `Bearer ${env.TREFLE_ACCESS_TOKEN}`
  //       }
  //     })
  //       .then(res => res.json())
  //       .then(plants => {
  //         console.log(plants);
  //         res.send(plants);
  //       })
  //       .catch(err => console.log("Trefle getPlants: ", err));
  //   });

  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

main();
