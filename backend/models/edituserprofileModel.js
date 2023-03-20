const { Schema, model } = require("../connection");

const userprofileSchema = new Schema({
  eusername: { type: String, required: true },
  eemail: { type: String, required: true },
  edescription: { type: String },
  econtact: { type: String, required: true },
  eheader: { type: String, required: true },
  eimage: { type: String, required: true },
  edited_at: Date,
  updated_at: Date,
});


module.exports = model("edituserprofile", userprofileSchema);
