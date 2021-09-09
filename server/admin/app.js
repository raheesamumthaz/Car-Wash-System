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
const washerRoutes = require('./routes/washerRoutes');
const customerRoutes = require('./routes/customerRoute');
const carRoutes = require('./routes/carRoutes');


//middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
//Connect to Customers Database
const dbURI="mongodb+srv://admin:admin@cluster0.7m9bb.mongodb.net/SuperAdmin?retryWrites=true&w=majority"
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
app.use('/',[authRoutes,washerRoutes,customerRoutes,carRoutes]);
app.listen(4000, () => console.log(`Listening on: 4000`));
//module.exports.handler = serverless(app);

