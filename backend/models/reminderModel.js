const { Schema, model } = require("../connection");

const reminderSchema = new Schema({
  rname: { type: String, required: true },
  rtime: { type: String, required: true },
  rdate: { type: Date, required: true },
  created_at: Date,
  updated_at: Date,
});


module.exports = model("reminder", reminderSchema);
