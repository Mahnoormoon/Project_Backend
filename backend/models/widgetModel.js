const { Schema, model } = require("../connection");

const widgetSchema = new Schema({
  id: { type: Int16Array, required: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: TimeRanges, required: true },
  created_at: Date,
  updated_at: Date,
});


module.exports = model("widget", widgetSchema);
