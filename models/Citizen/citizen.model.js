var mongoose = require("mongoose");

//create schema
var CitizenSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  national_id: { type: Number, unique: true, required: true },
  first_name: { type: String, max: 15 },
  middle_name: { type: String, max: 15 },
  last_name: { type: String, max: 15 },
  email: { type: String, required: true },
  password: { type: String, max: 50, min: 8, required: true },
  gender: String,
  pic_url: String,
  birth_date: Date,
  role: Number,
  verification: Boolean,
  street: { type: mongoose.Schema.Types.ObjectId, ref: "street" }
});

//streetcode
//phonecode


// create model of schema to be enabled to do any query
var CitizenModel = new mongoose.model("citizen", CitizenSchema);
module.exports = CitizenModel
