var HospitalModel = require("../models/MedicalOrganization/hospital.model");
var mongoose = require("mongoose");

function HospitalAPIS(app) {
  app.post("/inserthospital", async (req, resp) => {
    let name = req.body.name;
    let doctors = req.body.doctors; //array

    let newHospital = new HospitalModel({
      _id: mongoose.Types.ObjectId(),
      name: name,
      doctors: doctors
    });
    await newHospital.save();
    resp.json({ message: "success" });
  });

  app.get("/hospitals", async (req, resp) => {
    let hospitals = await HospitalModel.find({}).populate("doctors");
    resp.json(hospitals);
  });
}

module.exports = HospitalAPIS;
