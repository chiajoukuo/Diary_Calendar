const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useFindAndModify', false);

// Create Schema
const DiarySchema = new Schema({
    uniqueID: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: String,
        required: true
    },
    comments: [{ body: String }],
    images: [{ url: String }],
    userID: {
        type: String,
        required: true
    },
});

module.exports = Diary = mongoose.model('diary', DiarySchema);