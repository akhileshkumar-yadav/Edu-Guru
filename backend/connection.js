const mongoose = require('mongoose')

const url ='mongodb+srv://yadav:222226@cluster0.c4vlfxy.mongodb.net/mejorProject?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(url)

.then((result) => {
    console.log('database to connect');
    
    
}).catch((err) => {
    console.log(err);
    
});
 module.exports = mongoose;