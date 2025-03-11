const {Schema,model} = require('../Connection')

const userSchema = new Schema({
    name:String,
    email:String,
    password:String
})

module.exports = model('admin', 
    userSchema);