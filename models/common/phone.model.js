var mongoose = require("mongoose")

// create schema

var PhoneSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    phone: { type: String, required: true, maxlength: 15 },
    citizin: { type: mongoose.Schema.Types.ObjectId, ref: "citizen" },
    medical_org: { type: mongoose.Schema.Types.ObjectId, ref: "medicalorg" },
})

var PhoneModel = new mongoose.model("phone", PhoneSchema)

module.exports = PhoneModel

