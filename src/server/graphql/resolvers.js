const query = {
  Query: {
    plants(root, args, context, info) {
      console.log(info);
      return info;
    }
  }
};

module.exports = query;
