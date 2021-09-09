const serverless = require('serverless-http');

const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const profileRoutes= require('./routes/profileRoutes');
const orderRoutes = require('./routes/orderRoutes');

//middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
//Connect to Customers Database
const dbURI="mongodb+srv://admin:admin@cluster0.dktgi.mongodb.net/carwash?retryWrites=true&w=majority"
mongoose
  .connect(dbURI, {
    
    useNewUrlParser: true,
    useUnifiedTopology: true
 
  })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });
app.use('/',[authRoutes,profileRoutes,orderRoutes]);
app.listen(4000, () => console.log(`Listening on: 4000`));
//module.exports.handler = serverless(app);

