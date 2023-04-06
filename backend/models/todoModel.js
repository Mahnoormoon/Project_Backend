const { Schema, model, Types } = require("../connection");

const todoSchema = new Schema({
  title: { type: String, required: true },
  task: [{ type: Object, required: true }],
  user: { type: Types.ObjectId, required: true },
  created_at: Date,
  updated_at: Date,
});

module.exports = model("todolist", todoSchema);