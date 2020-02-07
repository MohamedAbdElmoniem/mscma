var mongoose = require("mongoose")

var StreetSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    area: { type: mongoose.Schema.Types.ObjectId, ref: "area" }
})

var StreetModel = new mongoose.model("street", StreetSchema)

module.exports = StreetModel