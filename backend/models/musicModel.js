const { Schema, model } = require("../connection");

const musicSchema = new Schema({
  mtitle: { type: String, required: true },
  aname: { type: String, required: true },
  mcredits: { type: String, required: true },
  maudio: { type: String, required: true },
  mimage: { type: String, required: true },
  //playlist: { type: String, required: true },
  added_at: Date,
  updated_at: Date
});


module.exports = model("music", musicSchema);
