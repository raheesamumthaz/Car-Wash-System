const mongoose = require('mongoose');


//connecting to the customers database with admin's credentials
const dbURI="mongodb+srv://admin:admin@cluster0.7m9bb.mongodb.net/Orders?retryWrites=true&w=majority"
const conn= mongoose.createConnection( dbURI,{useNewUrlParser: true,useUnifiedTopology: true});


const order = conn.model('order', new mongoose.Schema({}))


module.exports = order;