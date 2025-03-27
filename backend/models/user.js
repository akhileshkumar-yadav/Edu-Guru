const { Schema, model } = require('../connection');

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    role: { type: String, enum: ['user', 'admin'], default: 'user' } // Role field add kiya
}, {
    timestamps: true // Optional: creation/update time track karne ke liye
});

module.exports = model('user', userSchema);