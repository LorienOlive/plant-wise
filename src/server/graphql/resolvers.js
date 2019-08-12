const resolvers = {
  Query: {
    allPlants: async (root, args, context) => {
      const plants = context.db
        .collection("plants")
        .find()
        .toArray()
        .then(res => res)
        .catch(err => console.log(err));
      console.log("line 19: ", plants);
      return plants;
    }
  }
};

module.exports = resolvers;
