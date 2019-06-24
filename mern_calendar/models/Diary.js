const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useFindAndModify', false);

// Create Schema
const DiarySchema = new Schema({
    date: {
        type: String,
        required: true
    },
    comments: [{ body: String }],
    images: [{ url: String }]
});

module.exports = Diary = mongoose.model('diary', DiarySchema);