const { Schema, model } = require("../connection");

const todoSchema = new Schema({
  id: { type: Int16Array, required: true },
  name: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: TimeRanges, required: true },
  created_at: Date,
  updated_at: Date,
});


module.exports = model("todo", todoSchema);
