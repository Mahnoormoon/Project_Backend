const { Schema, model } = require("../connection");
const widgetModel = require("./widgetModel");

const userprofileSchema = new Schema({
  id: { type: Number, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: String, required: true },
  //image: { type: Image, required: true },
  //header: { type: Image, required: true },
  //widgets: { type: widgetModel, required: true },
  created_at: Date,
  updated_at: Date,
});


module.exports = model("userprofile", userprofileSchema);
