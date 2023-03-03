const { Schema, model } = require("../connection");

const reminderSchema = new Schema({
  name: { type: String, required: true },
  time: { type: String, required: true },
  date: { type: Date, required: true },
  created_at: Date,
  updated_at: Date,
});


module.exports = model("reminder", reminderSchema);
