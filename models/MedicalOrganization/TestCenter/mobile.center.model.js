var mongoose = require("mongoose");

var MobileTestCenterSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    test_center: { type: mongoose.Schema.Types.ObjectId, ref: "testcenter" }
});

var MobileTestCenterModel = new mongoose.model("testcenter", MobileTestCenterSchema);

module.exports = MobileTestCenterModel;
