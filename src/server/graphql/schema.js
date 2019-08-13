const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Plant {
    id: Int!
    slug: String
    scientific_name: String
    link: String
    complete_data: Boolean
    common_name: String
  }
  type Query {
    hello: String
    allPlants: [Plant]
  }
`;

module.exports = typeDefs;
