const { application } = require('express');
const { Schema, model } = require('../connection')

const userSchema = new Schema({
    universityName: String,
    universityAddress: String,
    universityDetail: String,
    fee: Number,
    email: String,
    phone: Number,
    image: String,
    courses: String,
    category: String,
    Course1: String,
    Course2: String,
    Course3: String,
    Course4: String,
    Course5: String,
    Fee1: String,
    categoryViewPage: String,
    Fee2: String,
    Fee3: String,
    Fee4: String,
    Fee5: String,
    Eligibility1: String,
    Eligibility2: String,
    Eligibility3: String,
    Eligibility4: String,
    Eligibility5: String,
    ApplicationDate1: String,
    ApplicationDate2: String,
    ApplicationDate3: String,
    ApplicationDate4: String,
    ApplicationDate5: String,
    IntroHead: String,
    IntroHead1: String,
    intro: String,
    introHeading: String,

})

module.exports = model('adduniversity',
    userSchema);