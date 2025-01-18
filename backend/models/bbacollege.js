const {Schema,model} = require('../connection')

const userSchema = new Schema({
    collegeName:String,
    collegeAddress:String,
    ranking:String,
    ApplicationDeadline:String,
    fee:String,
    cutoff:String,
    image1:String,
    image2:String,
})

module.exports = model('bbaCollege', 
    userSchema);