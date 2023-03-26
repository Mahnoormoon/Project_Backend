const { Schema, model } = require("../connection");

const todoSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  created_at: Date,
});

module.exports = model("todo", todoSchema);