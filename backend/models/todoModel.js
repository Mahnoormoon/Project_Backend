const { Schema, model } = require("../connection");

const todoSchema = new Schema({
  title: { type: String, required: true },
  task: { type: String, required: true },
  created_at: Date,
});

module.exports = model("todo", todoSchema);