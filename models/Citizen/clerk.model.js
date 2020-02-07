var mongoose = require("mongoose")

// create schema

var ClerkSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    medical_org: { type: mongoose.Schema.Types.ObjectId, ref: "medicalorg" }
})

var ClerkModel = new mongoose.model("phone", ClerkSchema)

module.exports = ClerkModel

