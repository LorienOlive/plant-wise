const mongoose = require("mongoose");
const { ObjectID } = require("mongodb");

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const PlantSchema = new Schema({
  _id: ObjectID,
  name: String,
  scientificName: String,
  light: String,
  water: String,
  annual: Boolean
});

module.export = mongoose.model("Plant", PlantSchema);
