const { Schema, model } = require("../connection");

const reminderSchema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  date: { type: Date, required: true },
  created_at: Date,
  updated_at: Date,
});


module.exports = model("reminder", reminderSchema);
