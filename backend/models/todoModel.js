const { Schema, model } = require("../connection");

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  created_at: Date,
  updated_at: Date,
});


module.exports = model("todo", userSchema);
