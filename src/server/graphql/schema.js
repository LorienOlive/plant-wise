const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Image {
    url: String
  }
  type Plants {
    id: Int!
    slug: String
    scientific_name: String
    link: String
    complete_data: Boolean
    common_name: String
  }
  type Plant {
    id: Int!
    slug: String
    scientific_name: String
    link: String
    complete_data: Boolean
    common_name: String
    images: [Image]
  }
  type Query {
    hello: String
    allPlants: [Plants]
    onePlant: Plant
  }
`;

module.exports = typeDefs;
