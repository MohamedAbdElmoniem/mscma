// create node server

// require("express") b return mno function should be called
// to return object that contains all functions in express library

var express = require("express");
var app = express();
var mongoose = require("mongoose")
var CitizenAPIS = require('./apis/citizen')
var DoctorAPIS = require('./apis/doctor')
var AddressAPIS = require('./apis/commonAPI/address.api')
var HospitalAPIS = require('./apis/hospital')
var cors = require('cors')
var session = require('express-session')
var uuid = require("uuid/v4")

//hello i'm menna :D
//hello i'm moniem :D
app.use(express.json())
app.use(session({ secret: "mysecret", genid: uuid }))
app.use(cors({
  // origin:"https://mo3ty.com"
}))
// db connection
mongoose.connect("mongodb://admnin:admin123@ds239071.mlab.com:39071/mscmadb", { useNewUrlParser: true, useUnifiedTopology: true })

CitizenAPIS(app)
DoctorAPIS(app)
HospitalAPIS(app)
AddressAPIS(app)

// awl api or awl endpoint
app.get("/", (req, resp) => {
  resp.send("hello ssssssssssnode js courseeeeeeee");
});

app.get("/user", (req, resp) => {
  resp.json({ id: 1, name: "ahmed", age: 30 });
});

app.get("/users", (req, resp) => {
  resp.json([
    { id: 1, name: "ahmed", age: 30 },
    { id: 1, name: "ahmed", age: 30 },
    { id: 1, name: "ahmed", age: 30 },
    { id: 1, name: "ahmed", age: 30 },
    { id: 1, name: "ahmed", age: 30 },
    { id: 1, name: "ahmed", age: 30 },
  ]);
});

app.listen(3000); // create node server
