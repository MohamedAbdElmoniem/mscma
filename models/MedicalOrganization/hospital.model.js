var mongoose = require("mongoose");

var HospitalSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  lat: Number,
  lng: Number,
  capacity: Number,
  doctors: [{ type: mongoose.Schema.Types.ObjectId, ref: "doctor" }],
  medical_org: { type: mongoose.Schema.Types.ObjectId, ref: "medicalorg" }
});

var HospitalModel = new mongoose.model("hospital", HospitalSchema);

module.exports = HospitalModel;
