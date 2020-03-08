const User = require('../models/User');
const Question = require('../models/Question');

module.exports = {

    async list(req, res) {
        const { user_id } = req.headers;
        const questions = await Question.find({ user: user_id });
        return res.json(questions);
    },

    async store(req, res) {
        const { title, body } = req.body;
        const { user_id } = req.headers;

        const user = await User.findById(user_id);

        if (!user) {
            return res.status(400).json({ error: 'User does not exists '});
        }

        const question = await Question.create({
            user: user_id,
            title: title,
            body: body
        })

        return res.json(question);
    }
};