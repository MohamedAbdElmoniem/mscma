var mongoose = require("mongoose")

var CitySchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    phase: Number
})

var CityModel = new mongoose.model("city", CitySchema)

module.exports = CityModel