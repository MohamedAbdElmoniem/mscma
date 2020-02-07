var mongoose = require("mongoose");

//create schema
var DoctorSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  citizen: { type: mongoose.Schema.Types.ObjectId, ref: "citizen" },
  //nid: {type: Number, unique: true , ref: "citizen" },
  specialization: { type: String }
});

// create model from schema to be enabled to do any query
var DoctorModel = new mongoose.model("doctor", DoctorSchema);

module.exports = DoctorModel;
