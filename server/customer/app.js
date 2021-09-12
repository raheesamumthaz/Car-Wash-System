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
const carRoutes = require('./routes/carRoutes');
const myordersRoutes = require('./routes/myordersRoutes');

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

//middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
//Connect to Customers Database
const dbURI="mongodb+srv://customer:admin@cluster0.dktgi.mongodb.net/Customer?retryWrites=true&w=majority"
mongoose
  .connect(dbURI, {
    
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 5000,
 
  })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });
app.use('/',[authRoutes,profileRoutes,orderRoutes,carRoutes,myordersRoutes]);


//Swagger Config
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.1",
    info: {
      version: "1.0.0",
      title: "Customer API",
      description: "API's for Customer -On demand carwash system",
    
    },

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    servers: [
      {
        url:"https://bqedlhlpg8.execute-api.us-east-1.amazonaws.com/dev" ,
        description: 'Development AWS server'
      },
      {
        url: 'http://localhost:4000',
        description: 'Development server'
      }
      
    ]
  
  },
  swagger: "2.0",
  apis: ["./routes/*.js"],
};


const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/customer-api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs)); 


//app.listen(4000, () => console.log(`Listening on: 4000`));
module.exports.handler = serverless(app);

