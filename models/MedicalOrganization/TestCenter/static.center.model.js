var mongoose = require("mongoose");

var StaticTestCenterSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    test_center: { type: mongoose.Schema.Types.ObjectId, ref: "testcenter" }
});

var StaticTestCenterModel = new mongoose.model("testcenter", StaticTestCenterSchema);

module.exports = StaticTestCenterModel;
