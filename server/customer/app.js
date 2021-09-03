const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

//middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
 

//Listen to port: Default is 3000
const port = process.env.PORT || 3000;
app.listen( port , function(){
    console.log("listening to port ",port);
});


module.exports = app;