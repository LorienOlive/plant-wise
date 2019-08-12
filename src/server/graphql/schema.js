const { gql } = require("apollo-server-express");

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
    hello: String
    allPlants: [Plant]
  }
`;

module.exports = typeDefs;
