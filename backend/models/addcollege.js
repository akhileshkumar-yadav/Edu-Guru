const { application } = require('express');
const {Schema,model} = require('../connection')

const userSchema = new Schema({
    collegeName:String,
    collegeAddress:String,
    collegeDetail:String,
    fee:Number,
    email:String,
    phone:Number,
    image:String,
    courses:String,
    category:String,

})

module.exports = model('addcollege', 
    userSchema);