const { Schema, model } = require("../connection");

const musicSchema = new Schema({
  name: { type: String, required: true },
  artist: { type: String, required: true },
  duration: { type: String, required: true },
  credits: { type: String, required: true },
  //playlist: { type: String, required: true },
  added_at: Date,
  updated_at: Date,
});


module.exports = model("music", musicSchema);
