var graphql = require("graphql");
var graphqlTools = require("graphql-tools");
var resolvers = require("./resolvers");

var { GraphQLSchema, GraphQLObjectType } = graphql;

const typeDefs = `
  type Query {
    plants: String!
  }
`;

module.exports = graphqlTools.makeExecutableSchema({
  typeDefs,
  resolvers
});
