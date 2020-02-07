var mongoose = require("mongoose")

var ScreeningResultSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    positive: Boolean,
    degree: Number,
    desc: String,
    citizen: { type: mongoose.Schema.Types.ObjectId, ref: "citizen" },
    testcenter: { type: mongoose.Schema.Types.ObjectId, ref: "testcenter" },
})

var ScreeningResultModel = new mongoose.model("screeningresult", ScreeningResultSchema)

module.exports = ScreeningResultModel