const express = require('express');
const router = express.Router();

// Event Model
const Event = require('../../models/Event');

// @route   GET api/events
// @desc    GET All Events
// @access  Public
router.get('/', (req, res) => {
    Event.find()
        .sort({ startTime: 1 })
        .then(events => res.json(events))
});

// @route   POST api/events
// @desc    Create An Event
// @access  Public
router.post('/', (req, res) => {
    const newEvent = new Event({
        title: req.body.title,
        startTime: req.body.startTime,
        endTime: req.body.endTime
    });

    newEvent.save().then(event => res.json(event));
});

// @route   DELETE api/events
// @desc    Delete An Event
// @access  Public
router.delete('/:id', (req, res) => {
    Event.findById(req.params.id)
        .then(event => event.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});


module.exports = router;