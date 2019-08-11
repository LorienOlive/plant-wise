var graphql = require("graphql");
var { buildSchema } = require("graphql");
var PlantModel = require("../models/Plant");
var TrefleTokenModel = require("../models/TrefleToken");
var logger = require("morgan");

var {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
  GraphQLDate
} = graphql;

// NOTE: Add Aliases for Queries & Enums

var fakePlantDatabase = [
  {
    id: "938470459386724598076",
    name: "Jade Plant",
    scientificName: "Jadus Plantus",
    light: "full sun",
    water: "semi-arid",
    annual: false
  }
];

const PlantType = new GraphQLObjectType({
  name: "Plant",
  fields: () => ({
    id: {
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

// const trefleTokenType = new GraphQLObjectType({
//   name: "Plant",
//   fields: () => ({
//     id: {
//       type: GraphQLString
//     },
//     refreshToken: {
//       type: GraphQLString
//     },
//     apiKey: {
//       type: GraphQLString
//     },
//     lastUpdated: {
//       type: GraphQLDate
//     }
//   })
// });

const RootQuery = new GraphQLObjectType({
  name: "Query",
  fields: {
    plants: {
      type: [PlantType],
      resolve: () => {
        return plants;
      }
    }
  }
});

// const mutation = graphql.GraphQLObjectType({
//   name: "Mutation",
//   fields: () => ({
//     addPlant: {
//       plantType,
//       args: {
//         _id: {
//           type: GraphQLNonNull(GraphQLString)
//         },
//         name: {
//           type: GraphQLNonNull(GraphQLString)
//         },
//         scientificName: {
//           type: GraphQLNonNull(GraphQLString)
//         },
//         light: {
//           type: GraphQLNonNull(GraphQLString)
//         },
//         water: {
//           type: GraphQLNonNull(GraphQLString)
//         },
//         annual: {
//           type: GraphQLNonNull(GraphQLString)
//         }
//       },
//       resolve: (root, params) => {
//         const plantModel = new PlantModel(params);
//         const newPlant = plantModel.save();
//         if (!newPlant) {
//           throw new Error("Error - AddPlant");
//         }
//         return newPlant;
//       }
//     }
//   })
// });

module.exports = new GraphQLSchema({
  query: RootQuery
  // mutation: mutation
});
