const Quiz = require("../models/quizModel")

const quizControl = {
    getallQuiz: async (req, res) => {
        const quizes = await Quiz.find()
        return res.json({ data: quizes })
    },
    getQuiz: async (req, res) => {
        const quiz = await Quiz.findOne({ _id: req.params.id })
        return res.json({ data: quiz })
    },
    addQuiz: async (req, res) => {
        console.log(req.body)
        const quiz = new Quiz({
            title: req.body.title,
            quetions: req.body.quetions,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            AllowedList: req.body.AllowedList,
            responses: req.body.responses,
            adminName: req.body.adminName

        })
        await quiz.save()
        return res.json({ msg: 'quiz added successfuly!!', data: quiz })
    },
    updateQuiz: async (req, res) => {
        const updatedQuiz = await Quiz.findByIdAndUpdate({ _id: req.params.id }, {
            title: req.body.title,
            quetions: req.body.quetions,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            AllowedList: req.body.AllowedList,
            responses: req.body.responses,
            adminName: req.body.adminName
        })
        return res.json({ data: updatedQuiz })
    },
    deleteQuiz: async (req, res) => {
        const deletedQuiz = await Quiz.findByIdAndDelete({ _id: req.params.id })
        return res.json({ data: deletedQuiz })
    }
}

module.exports = quizControl
