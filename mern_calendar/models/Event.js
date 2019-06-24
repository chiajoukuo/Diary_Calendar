const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');

// Create Schema
const EventSchema = new Schema({
    start: {
        type: Number,
        required: true
    },
    end: {
        type: Number,
        required: true
    },
    value: String,
});

module.exports = Event = mongoose.model('event', EventSchema);