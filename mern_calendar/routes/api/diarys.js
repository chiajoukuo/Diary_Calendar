const express = require('express');
const router = express.Router();

// Diary Model
const Diary = require('../../models/Diary');

// @route   GET api/diarys
// @desc    GET All Diarys
// @access  Public
router.get('/', (req, res) => {
    Diary.find()
        .then(diarys => res.json(diarys))
});

// @route   POST api/diarys
// @desc    Create A Diary
// @access  Public
router.post('/', (req, res) => {
    const newDiary = new Diary({
        date: req.body.date
    });

    newDiary.save().then(diary => res.json(diary));
});

// @route   DELETE api/diarys/:id
// @desc    Delete A Diary
// @access  Public
router.delete('/:id', (req, res) => {
    Diary.findById(req.params.id)
        .then(diary => diary.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

// @route   POST api/diarys/:id/comments
// @desc    Add new comment to Diary
// @access  Private
router.post('/:id/comments', (req, res) => {
    Diary.findOneAndUpdate({ _id: req.params.id }, { $push: { comments: req.body.comment } }, { new: true })
        .then(diary => res.json(diary.comments[diary.comments.length-1]))
        .catch(err => res.status(404).json({success: false}));
});

// @route   DELETE api/diarys/:id/comments/:com_id
// @desc    Delete A Comment
// @access  Private
router.delete('/:id/comments/:com_id', (req, res) => {
    Diary.updateOne({ _id: req.params.id }, { $pull: { comments: { _id: req.params.com_id } } })
        .then(() => res.json({success: true}))
        .catch(err => res.status(404).json({success: false}));
});

// @route   POST api/diarys/:id/images
// @desc    Add new image to Diary
// @access  Private
router.post('/:id/images', (req, res) => {
    Diary.findOneAndUpdate({ _id: req.params.id }, { $push: { images: req.body.image } }, { new: true })
        .then(diary => res.json(diary.images[diary.images.length-1]))
        .catch(err => res.status(404).json({success: false}));
});

// @route   DELETE api/diarys/:id/images/:img_id
// @desc    Delete An Image
// @access  Private
router.delete('/:id/images/:img_id', (req, res) => {
    Diary.updateOne({ _id: req.params.id }, { $pull: { images: { _id: req.params.img_id } } })
        .then(() => res.json({success: true}))
        .catch(err => res.status(404).json({success: false}));
});


module.exports = router;