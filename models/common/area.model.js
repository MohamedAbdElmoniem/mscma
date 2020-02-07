var mongoose = require("mongoose")

var AreaSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    city: { type: mongoose.Schema.Types.ObjectId, ref: "city" }
})

var AreaModel = new mongoose.model("area", AreaSchema)

module.exports = AreaModel