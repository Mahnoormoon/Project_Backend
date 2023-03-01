const { Schema, model } = require("../connection");

const musicSchema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  //duration: { type: TimeRanges, required: true },
  credits: { type: String, required: true },
  artist: { type: String, required: true },
  //playlist: { type: String, required: true },
  created_at: Date,
  updated_at: Date,
});


module.exports = model("music", musicSchema);
