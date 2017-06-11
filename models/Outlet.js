const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Outlet = new Schema({
    name: String,
    address: String,
    latitude: Number,
    longitude: Number,
    provider: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Outlet', Outlet);