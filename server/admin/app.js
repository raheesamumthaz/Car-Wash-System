const serverless = require('serverless-http');
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

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
const servicePlanRoutes = require('./routes/serviceplanRoutes');
const addonRoutes = require('./routes/addonRoutes');
const orderRoutes = require('./routes/orderRoutes');


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
app.use('/',[authRoutes,washerRoutes,customerRoutes,carRoutes,servicePlanRoutes,addonRoutes,orderRoutes]);

//Swagger Config
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.1",
    info: {
      version: "1.0.0",
      title: "Admin API",
      description: "API's for Admin -On demand carwash system"

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
        url:"https://u6y7t9ql95.execute-api.us-east-1.amazonaws.com/dev",
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
app.use("/admin-api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
//app.listen(4000, () => console.log(`Listening on: 4000`));
module.exports.handler = serverless(app);

