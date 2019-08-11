const mongoose = require("mongoose");

const TrefleTokenSchema = new mongoose.Schema({
  id: String,
  refreshToken: String,
  apiKey: String,
  lastUpdated: Date
});

module.exports = mongoose.model("TrefleToken", TrefleTokenSchema);
