var mongoose = require("mongoose")

// create schema

var MedicalAnalysisSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    medical_org: { type: mongoose.Schema.Types.ObjectId, ref: "medicalorg" }
})

var MedicalAnalysisModel = new mongoose.model("medicalanalysis", MedicalAnalysisSchema)

module.exports = MedicalAnalysisModel

