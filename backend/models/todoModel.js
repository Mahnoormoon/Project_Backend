const { Schema, model } = require("../connection");

const todoSchema = new Schema({
  category: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  created_at: Date,
  added_at: Date,
  updated_at: Date,
});


module.exports = model("todo", todoSchema);
