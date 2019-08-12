var graphqlTools = require("graphql-tools");
const { gql } = require("apollo-server-express");
var resolvers = require("./resolvers");

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

module.exports = graphqlTools.makeExecutableSchema({
  typeDefs,
  resolvers
});
