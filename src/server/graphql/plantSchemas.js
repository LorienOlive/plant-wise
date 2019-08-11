const graphql = require("graphql");
const PlantModel = require("../models/Plant");
const TrefleTokenModel = require("../models/TrefleToken");
const logger = require("morgan");

// var GraphQLSchema = require("graphql").GraphQLSchema;
// var GraphQLObjectType = require("graphql").GraphQLObjectType;
var GraphQLList = require("graphql").GraphQLList;
// var GraphQLObjectType = require("graphql").GraphQLObjectType;
var GraphQLNonNull = require("graphql").GraphQLNonNull;
var GraphQLID = require("graphql").GraphQLID;
var GraphQLString = require("graphql").GraphQLString;
var GraphQLBoolean = require("graphql").GraphQLBoolean;
var GraphQLInt = require("graphql").GraphQLInt;
var GraphQLDate = require("graphql-date");

// NOTE: Add Aliases for Queries & Enums

const plantType = graphql.GraphQLObjectType({
  name: "Plant",
  fields: () => ({
    _id: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    scientificName: {
      type: GraphQLString
    },
    light: {
      type: GraphQLString
    },
    water: {
      type: GraphQLString
    },
    annual: {
      type: GraphQLBoolean
    }
  })
});

const trefleTokenType = graphql.GraphQLObjectType({
  name: "Plant",
  fields: () => ({
    id: {
      type: GraphQLString
    },
    refreshToken: {
      type: GraphQLString
    },
    apiKey: {
      type: GraphQLString
    },
    lastUpdated: {
      type: GraphQLDate
    }
  })
});

const queryType = graphql.GraphQLObjectType({
  name: "Query",
  fields: () => ({
    plants: {
      type: [plantType],
      resolve: () => {
        const plants = PlantModel.find().exec();
        if (!plants) {
          throw new Error("Error - Plants");
        }
        return plants;
      }
    },
    plant: {
      type: plantType,
      args: {
        id: {
          name: "_id",
          type: String
        }
      },
      resolve: (root, params) => {
        const plantDetails = PlantModel.findById(params.id).exec();
        if (!plantDetails) {
          throw new Error("Error - PlantDetail");
        }
        return plantDetails;
      }
    }
  }),
  trefleToken: {
    type: trefleTokenType,
    args: {
      refreshToken: {
        name: "refreshToken",
        type: GraphQLString
      }
    },
    resolve: () => {
      const trefleToken = TrefleTokenModel.findOne({
        type: "refreshToken"
      }).exec();
      if (trefleToken) {
        throw new Error("Error - TrefleToken");
      }
      return trefleToken;
    }
  }
});

const mutation = graphql.GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    addPlant: {
      plantType,
      args: {
        _id: {
          type: GraphQLNonNull(GraphQLString)
        },
        name: {
          type: GraphQLNonNull(GraphQLString)
        },
        scientificName: {
          type: GraphQLNonNull(GraphQLString)
        },
        light: {
          type: GraphQLNonNull(GraphQLString)
        },
        water: {
          type: GraphQLNonNull(GraphQLString)
        },
        annual: {
          type: GraphQLNonNull(GraphQLString)
        }
      },
      resolve: (root, params) => {
        const plantModel = new PlantModel(params);
        const newPlant = plantModel.save();
        if (!newPlant) {
          throw new Error("Error - AddPlant");
        }
        return newPlant;
      }
    }
  })
});

module.exports = new graphql.GraphQLSchema({
  query: queryType,
  mutation: mutation
});
