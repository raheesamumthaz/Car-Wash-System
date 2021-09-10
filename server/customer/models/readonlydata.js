const mongoose = require('mongoose');

//Connect to admin db to read data
const admin="mongodb+srv://admin:admin@cluster0.dktgi.mongodb.net/carwash?retryWrites=true&w=majority"
const conn = mongoose.createConnection( admin,{useNewUrlParser: true, useUnifiedTopology: true});

// //Connect to washers db to read details : to find nearby washers
const washer="mongodb+srv://admin:admin@cluster0.dktgi.mongodb.net/carwash?retryWrites=true&w=majority";
const washerconn = mongoose.createConnection( washer,{useNewUrlParser: true, useUnifiedTopology: true});


//from admin db
const car = conn.model('car', new mongoose.Schema({}));
//from washer details collection
 const washerDetails = washerconn.model('washerdetail',new mongoose.Schema({}))

module.exports = { car,washerDetails};