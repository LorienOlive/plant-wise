const query = {
  Query: {
    plants(root, args, context, info) {
      return "I'm a plant!";
    }
  }
};

module.exports = query;
