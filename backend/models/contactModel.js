const { Schema, model } = require("../connection");

const studySchema = new Schema({
  cname: { type: String, required: true },
  cemail: { type: String, required: true, unique: true },
  cmessage: { type: String, required: true },
  added_at: Date,
  updated_at: Date,
});


module.exports = model("contact", studySchema);