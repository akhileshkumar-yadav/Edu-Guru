const { application } = require('express');
const {Schema,model} = require('../connection')

const userSchema = new Schema({
    collegeName:String,
    collegeAddress:String,
    Ranking:String,
    ApplicationDeadline:String,
    fee:String,
    cutoff:String,
    image1:String,
    image2:String,
    category:String,

})

module.exports = model('addbtechcollege', 
    userSchema);