var CitizenModel = require("../models/Citizen/citizen.model");
var StreetModel = require("../models/common/street.model");
var mongoose = require("mongoose");
var Utils = require('../util/index')

function CitizenAPIS(app) {

  app.post('/signin', async (req, resp) => {
    const { email, password } = req.body
    let citizen = await CitizenModel.findOne({ email, password })
    if (citizen) {
      req.session.user = citizen
      resp.json({ message: 'success', citizen, token: req.session.id })
    }
  })

  app.get('/signout', async (req, resp) => {
    await req.session.destroy()
    resp.json({ message: 'success' })
  })


  /////////////////////////////////////////////////////////

  app.post("/getallcitizens", Utils.Authentication, async (req, resp) => {
    var citizens = await CitizenModel.find({}); // async
    resp.json(citizens);
  });

  app.post("/savecitizen", async (req, resp) => {
    try {
      const { national_id, first_name, middle_name, last_name, email,
        password, gender,
        pic_url, birth_date, role, verification, street, area } = req.body

      let newStreet = new StreetModel({
        _id: mongoose.Types.ObjectId(),
        name: street, area
      })
      await newStreet.save()

      let citizen = new CitizenModel({
        _id: mongoose.Types.ObjectId(),
        national_id, first_name, middle_name, last_name, email,
        password, gender,
        pic_url, birth_date, role, verification, street: newStreet._id
      });

      await citizen.save(); // async --> save citizin

      resp.json({ message: "success" });
    } catch (e) {
      resp.json(e);
    }
  });

  app.post("/getcitizenbyname", Utils.Authentication, async (req, resp) => {
    let { first_name } = req.body;
    let citizen = await CitizenModel.findOne({ first_name });
    resp.json(citizen);
  });

  app.post("/getcitizenbynid", Utils.Authentication, async (req, resp) => {
    let { national_id } = req.body;
    let citizen = await CitizenModel.findOne({ national_id });
    resp.json(citizen);
  });

  app.post('/getcitizensagerange', Utils.Authentication, async (req, resp) => {
    try {
      const { start_age, end_age } = req.body
      const citizens = await CitizenModel.find({})
      const filteredCitizens = Utils.filterCitizenByAge(citizens, start_age, end_age)
      resp.json({ message: 'success', citizens: filteredCitizens })
    } catch (e) {
      resp.json({ error: e })
    }
  })

  app.post('/getcitizenbygender', Utils.Authentication, async (req, resp) => {
    const { gender } = req.body
    let citizens = await CitizenModel.find({ gender })
    resp.json({ message: 'success', citizens })
  })

  app.get("/getcitizencount", Utils.Authentication, async (req, resp) => {
    let count = await CitizenModel.count();
    resp.json({ count: count });
  });

  app.get('/getcitizens', Utils.Authentication, async (req, resp) => {
    // let citizens = await CitizenModel.find({}).populate("street")
    let citizens = await CitizenModel.find({}).populate(Utils.streetPopulation)
    resp.json({ message: 'success', citizens })
  })


  app.post('/citizensbyageandphase', Utils.Authentication, async (req, resp) => {
    try {
      const { start_age, end_age, phase } = req.body
      const citizens = await CitizenModel.find({}).populate(Utils.streetPopulation).lean()
      // filter phase and make sure that you have an area
      const filteredByPhase = citizens.filter((citizen, index) => (citizen.street.area && citizen.street.area.city.phase === phase))

      // let filteredByPhase = []
      // citizens.forEach((citizen, index) => {
      //   if (citizen.street.area && citizen.street.area.city.phase === phase) {
      //     filteredByPhase.push(citizen)
      //   }
      // })

      //1 filter by age
      const filteredByAge = Utils.filterCitizenByAge(filteredByPhase, start_age, end_age)
      resp.json({ message: 'success', citizens: filteredByAge })

    } catch (e) {
      resp.json({ message: e })
    }
  })


  app.post('/citizenbycity', Utils.Authentication, async (req, resp) => {
    const { name } = req.body
    const citizens = await CitizenModel.find({}).populate(Utils.streetPopulation).lean()
    const filteredByName = citizens.filter((citizen, index) =>
      (citizen.street.area &&
        citizen.street.area.city.name.toLowerCase() === name.toLowerCase()))
    resp.json({ message: 'success', citizens: filteredByName })
  })
}

module.exports = CitizenAPIS;
