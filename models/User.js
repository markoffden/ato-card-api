const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    gender: {type: Boolean, default: true},
    email: {type: String, required: true},
    address: String,
    phone: String,
    password: {type: String, required: true},
    role: {type: Number, default: 1},
    activated: {type: Boolean, default: false},
    avatarUrl: String
});

module.exports = mongoose.model('User', User);