const mongoose=require('mongoose');

const questions=mongoose.Schema({
    question:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    level:{
        type:String,
        required:true
    },
    correctAnsweres:{
        type:Array,
        required:true
    },
    WrongAnswers:{
        type:Array,
        required:true
    }
})

const questionsModel=mongoose.model("questions",questions);
module.exports=questionsModel;