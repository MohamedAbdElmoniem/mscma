var mongoose = require("mongoose");

var MedicalOrgSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    from: String,
    to: String,
    pic_url: String,
    type: String,
    phone: { type: mongoose.Schema.Types.ObjectId, ref: "phone" }
})

var MedicalOrgModel = new mongoose.model("medicalorg", MedicalOrgSchema)

module.exports - MedicalOrgModel