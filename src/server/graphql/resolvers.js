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

const resolvers = {
  Query: {
    hello: () => "Hello world",
    allPlants: () => fakePlants
    // plants: async (root, _, context) => {
    //   const plants = new Promise((resolve, reject) => {
    //     const plantsCollection = db
    //       .collection("plants")
    //       .find({})
    //       .exec();
    //     if (!plantsCollection) {
    //       reject("Error");
    //     } else {
    //       resolve(plantsCollection);
    //     }
    //   });
    //   const res = await plants
    //     .then(data => {
    //       console.log("55: ", data);
    //       const array = data.toArray();
    //       return array.map(obj => (obj._id = obj._id.toString()));
    //     })
    //     .catch(err => console.log("Error: ", err));
    //   console.log(res);
    //   return res;
    // }
  }
};

module.exports = resolvers;
