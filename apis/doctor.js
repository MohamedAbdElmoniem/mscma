var DoctorModel = require("../models/Citizen/doctor.model");
var CitizenModel = require("../models/Citizen/citizen.model");
var mongoose = require("mongoose");

function DoctorAPIS(app) {
  app.get("/getalldoctor", async (req, resp) => {
    var doctors = await DoctorModel.find({}); // async
    resp.json(doctors);
  });

  app.post("/adddoctor", async (req, resp) => {
    try {
      let nid = req.body.nid;
      let fname = req.body.fname;
      let mname = req.body.mname;
      let lname = req.body.lname;
      let email = req.body.email;
      let password = req.body.password;
      let gender = req.body.gender;
      let pic_url = req.body.pic_url;
      let b_date = req.body.b_date;
      let role = req.body.role;
      let ver = req.body.verification;
      let spec = req.body.specialization;

      let citizen = await new CitizenModel({
        _id: mongoose.Types.ObjectId(),
        nid: nid,
        fname: fname,
        mname: mname,
        lname: lname,
        email: email,
        password: password,
        gender: gender,
        PIC_URL: pic_url,
        B_date: b_date,
        role: role,
        verification: ver
      });

      let doctor = new DoctorModel({
        _id: mongoose.Types.ObjectId(),
        //nid: nid,
        citizen: citizen._id,
        specialization: spec
      });

      await citizen.save(); // async
      resp.json({ message: "success" });

      await doctor.save(); // async
      resp.json({ message: "success" });
    } catch (e) {
      resp.json(e);
    }
  });

  app.post("/savedoctor", async (req, resp) => {
    try {
      let citizen = req.body.citizen;
      let specialization = req.body.specialization;

      let doctor = new DoctorModel({
        _id: mongoose.Types.ObjectId(),
        citizen: citizen,
        specialization: specialization
      });

      await doctor.save(); // async
      resp.json({ message: "success" });
    } catch (e) {
      resp.json(e);
    }
  });


  app.get("/getalldoctors", async (req, resp) => {
    try {
      let doctors = await DoctorModel.find({}).populate("citizen");
      resp.json(doctors);
    } catch (e) {
      resp.json(e);
    }
  });


  app.post("/getdoctorbyname", async (req, resp) => {
    try {
      let name = req.body.name;
      //.populate("citizen")
      let doctors = await DoctorModel.citizen.findOne({ fname: name }).populate("citizen");

      resp.json(doctors);

    } catch (e) {
      resp.json(e);
    }
  });



  // app.post("/getdoctorbyname", async (req, resp) => {
  //   try {
  //     let name = req.body.name;
  //     //.populate("citizen")
  //     let doctors = await CitizenModel.findOne({ fname: name }).populate(
  //       "citizen"
  //     );
  //     let doctor = await DoctorModel.findOne({ _id: doctors._id });

  //     let doctorrrrr = new DoctorModel({
  //       citizen: doctors,
  //       specialization: doctor.specialization
  //     });
  //     resp.json(doctorrrrr);
  //   } catch (e) {
  //     resp.json(e);
  //   }
  // });




  // app.get("/getdoctorscount", async (req, resp) => {
  //   let count = await DoctorModel.count();
  //   resp.json({ count: count });
  // });

  // app.post("/removedoctor", async (req, resp) => {
  //   let doctorId = req.body.id;
  //   await DoctorModel.remove({ _id: doctorId });
  //   resp.json({ message: "deleted" });
  // });

  // app.post("/updatedoctorname", async (req, resp) => {
  //   let doctorId = req.body.id;
  //   let newName = req.body.name;
  //   let spec = req.body.specialization;

  //   await DoctorModel.findOneAndUpdate(
  //     { _id: doctorId },
  //     { name: newName, specialization: spec }
  //   );
  //   resp.json({ message: "updated" });
  // });

  // app.get("/getdoctornames",async(req,resp)=>{
  //     let doctors = await DoctorModel.find({}).select("name age")
  //     resp.json(doctors)

  // })
}

module.exports = DoctorAPIS;
