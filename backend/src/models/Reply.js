const mongoose = require('mongoose');

const ReplySchema = new mongoose.Schema({
    body: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    },
    vote: Number,
});

module.exports = mongoose.model('Reply', ReplySchema);