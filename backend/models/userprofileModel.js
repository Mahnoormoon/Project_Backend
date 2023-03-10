const { Schema, model } = require("../connection");

const userprofileSchema = new Schema({
  pusername: { type: String, required: true },
  pemail: { type: String, required: true },
  pdescription: { type: String, required: true },
  pcontact: { type: String, required: true },
  pheader: { type: String, required: true },
  pimage: { type: String, required: true },
  created_at: Date,
  updated_at: Date,
});


module.exports = model("userprofile", userprofileSchema);
