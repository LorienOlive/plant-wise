const express = require("express");
const mongoose = require("mongoose");
var MongoClient = require("mongodb").MongoClient;
var PlantModel = require("./models/Plant");
const logger = require("morgan");
const { ApolloServer, gql } = require("apollo-server-express");
const cors = require("cors");
const bluebird = require("bluebird");

var db = mongoose.connection;

const fakePlants = [
  {
    _id: "5d50780a851b970f4751fe40",
    name: "Jade Plant",
    scientificName: "Jadus Plantus",
    light: "full sun",
    water: "semi-arid",
    annual: false
  }
];

MongoClient.connect("mongodb://localhost/27017", {
  promiseLibrary: bluebird,
  useNewUrlParser: true
})
  .then(() => console.log("connection successful"))
  .catch(err => console.error(err));

// const Plants = db.collection("plants");

const typeDefs = gql`
  type Plant {
    _id: ID!
    name: String!
    scientificName: String!
    light: String!
    water: String!
    annual: Boolean!
  }
  type Query {
    plants: [Plant]
  }
`;

const resolvers = {
  Query: {
    plants: async (root, _, context) => {
      // var plants = fakePlants;
      const plants = new Promise((resolve, reject) => {
        const plantsCollection = db
          .collection("plants")
          .find({})
          .exec();
        if (!plantsCollection) {
          reject("Error");
        } else {
          resolve(plantsCollection);
        }
      });
      const res = await plants
        .then(data => {
          console.log("55: ", data);
          const array = data.toArray();
          return array.map(obj => (obj._id = obj._id.toString()));
        })
        .catch(err => console.log("Error: ", err));
      console.log(res);
      return res;
    }
  }
};

const app = express();

app.get("/", (req, res) => {
  let query = `{
    plants {
      _id
      name
      scientificName
      light
      water
      annual
    }
  }`;
  graphql(
    schema,
    query.then(result => {
      res.json(result);
    })
  );
});
app.use(logger("dev"));
app.use("/*", cors());

const server = new ApolloServer({ typeDefs, resolvers, context: db });
server.applyMiddleware({ app, path: "/graphql" });

app.listen(3000, () => {
  console.log("🚀 Server ready at http://localhost:3000/graphql");
});

module.exports = app;
