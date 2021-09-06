const mongoose = require('mongoose');
const brcypt = require('bcrypt');
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: [true,'Please enter an email'],
        unique: true,
        lowercase: true,
        validate:[isEmail,"Please enter a valid email"]
    },
    password:{
        type: String,
        required: [true,'Please enter a password'],
        minlength: [8,'Minimum length is 8 characters']
    }
});


const User = mongoose.model('customers',userSchema);
module.exports = User;