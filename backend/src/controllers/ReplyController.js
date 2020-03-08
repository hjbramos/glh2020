const User = require('../models/User');
const Reply = require('../models/Reply');

module.exports = {

    async show(req, res) {
        const { user_id } = req.headers;
        const { reply_id } = req.body;
        
        let reply = await Reply.find({ _id: reply_id });
        
        await reply.populate('question').populate('user').execPopulate()

        return res.json(reply);
    },

    async upVote(req, res) {
        const { reply_id } = req.body;
        const reply = await Reply.findOne({ user: reply_id });
        await Reply.updateOne({ _id: reply_id }, { vote: 1 });
        return res.json(reply);
    },

    async downVote(req, res) {
        const { reply_id } = req.body;
        const reply = await Reply.findOne({ user: reply_id });
        await Reply.updateOne({ _id: reply_id }, { vote: -1 });
        return res.json(reply);
    },

    async list(req, res) {
        const { user_id } = req.headers;
        const replies = await Reply.find({ user: user_id });
        return res.json(replies);
    },

    async store(req, res) {
        const { user_id } = req.headers;
        const { question_id } = req.body;
        const { body } = req.body;

        const reply = await Reply.create({
            user: user_id,
            question: question_id,
            body: body,
            vote: 0,
        });

        await reply.populate('question').populate('user').execPopulate();

        return res.json(reply);
    }
};