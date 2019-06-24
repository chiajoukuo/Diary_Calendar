const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');

// Create Schema
const EventSchema = new Schema({
    start: {
        h: Number,
        m: Number
    },
    end: {
        h: Number,
        m: Number
    },
    day: {
        type: Number,
        default: 0
    },
    value: String,
});

module.exports = Event = mongoose.model('event', EventSchema);