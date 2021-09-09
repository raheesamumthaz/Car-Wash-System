const Admin = require('../models/admin');
const jwt = require("jsonwebtoken");

//handle errors
const handleErrors=(err)=>{
  console.log("err.....",err)
  let error= {email:'', password:''};

  //incorrect email
  if(err.message === 'Incorrect email'){
      error.email ="Entered email is not registered";
  }

  //incorrect password
  if(err.message === 'Incorrect Password'){
      error.password ="Entered password is incorrect";
  }

  //duplicate error code
  if(err.code === 11000)
  {
      error.email ='Entered email is already registered';
      return error;
  }

  if(err.message.includes('credential validation failed'))
  {
      Object.values(err.errors).forEach(({properties})=>{
          error[properties.path] = properties.message;  
      })
  }
  return error;
}

//Creating JWT Token
const maxAge = 2 * 24 * 60 * 60; //token will expire in 2 days
const createToken = (id) => {
  return jwt.sign({ id }, "A strong secret token", {
    expiresIn: maxAge,
  });
};

//Sign up
module.exports.post_signup = async function(req,res){
  const {email, password} = req.body;
  try {
      const user = await Admin.create({email, password});
      const token = createToken(user._id); 
      res.cookie('ajwt',token, {httpOnly: true, maxAge : maxAge*1000}); 
      res.status(201).send(user._id);
  } catch (error) {
      const err= handleErrors(error);
      res.status(400).json(err); 
      
  }
}

//Login
module.exports.post_login = async function(req,res){
  const {email, password} = req.body;
  try {
    const user = await Admin.login(email, password);
    const token = createToken(user._id); 
    res.cookie('ajwt',token, {httpOnly: true, maxAge : maxAge*1000}); 
    res.status(201).send({token});
  } catch (error) {
      const err = handleErrors(error);
      res.status(400).json(err);
  }
}


