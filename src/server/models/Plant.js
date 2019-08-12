const mongoose = require("mongoose");

const PlantSchema = new mongoose.Schema({
  _id: String,
  name: String,
  scientificName: String,
  light: String,
  water: String,
  annual: Boolean
});

module.exports = mongoose.model("Plant", PlantSchema);
