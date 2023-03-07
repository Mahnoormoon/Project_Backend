const { Schema, model } = require("../connection");

const studySchema = new Schema({
  sname: { type: String, required: true },
  sdescription: { type: String, required: true },
  scredits: { type: String, required: true },
  created_at: Date,
  updated_at: Date,
});


module.exports = model("study", studySchema);
