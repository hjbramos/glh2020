const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    title: String,
    body: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    reply: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reply'
    },
});

module.exports = mongoose.model('Question', QuestionSchema);