const Quest = require("../models/questionsModel")

const questionContol = {
    getallQuestions: async (req, res) => {
        const questions = await Quest.find()
        return res.json({ data: questions })
    },
    getQuesttion: async (req, res) => {
        const question = await Quest.findOne({ _id: req.params.id })
        return res.json({ data: question })
    },
    addQuestion: async (req, res) => {
        console.log(req.body)
        const question = new Quest({
            question: req.body.question,
            type: req.body.type,
            level: req.body.level,
            correctAnsweres: req.body.correctAnsweres,
            WrongAnswers: req.body.WrongAnswers

        })
        await post.save()
        return res.json({ msg: 'question added successfuly!!', data: question })
    },
    updateQeustion: async (req, res) => {
        const updatedQuestion = await Quest.findByIdAndUpdate({ _id: req.params.id }, {
            question: req.body.question,
            type: req.body.type,
            level: req.body.level,
            correctAnsweres: req.body.correctAnsweres,
            WrongAnswers: req.body.WrongAnswers
        })
        return res.json({ data: updatedQuestion })
    },
    deleteQuestion: async (req, res) => {
        const deletedQuestion = await Quest.findByIdAndDelete({ _id: req.params.id })
        return res.json({ data: deletedQuestion })
    }
}

module.exports = questionContol
