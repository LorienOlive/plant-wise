const fetch = require("node-fetch");
const bluebird = require("bluebird");

const resolvers = {
  Query: {
    allPlants: async () => {
      fetch.Promise = bluebird;
      require("dotenv").config();
      var results;
      await fetch(`https://trefle.io/api/plants`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.TREFLE_ACCESS_TOKEN}`
        }
      })
        .then(res => res.json())
        .then(plants => {
          console.log("plants: ", plants);
          results = plants;
        })
        .catch(err => console.log("Trefle getPlants: ", err));
      return results;
    }
  }
};

module.exports = resolvers;
