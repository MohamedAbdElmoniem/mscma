var mongoose = require("mongoose");

var MedicationSupplierSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    medical_org: { type: mongoose.Schema.Types.ObjectId, ref: "medicalorg" }
});

var MedicationSupplierModel = new mongoose.model("hospital", MedicationSupplierSchema);

module.exports = MedicationSupplierModel;
