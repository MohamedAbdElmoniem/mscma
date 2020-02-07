var mongoose = require("mongoose");

var TestCenterSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    lat: Number,
    lng: Number,
    type: String,
    medical_org: { type: mongoose.Schema.Types.ObjectId, ref: "medicalorg" }
});

var TestCenterModel = new mongoose.model("testcenter", TestCenterSchema);

module.exports = TestCenterModel;
