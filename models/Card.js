const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Card = new Schema({
    number: Number,
    dateIssued: Date,
    status: String,
    holder: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Card', Card);