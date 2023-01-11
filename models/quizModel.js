const mongoose=require('mongoose');

const quiz=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    quetions:{
        type:Array,
        required:true
    },
    startDate:{
        type:Date,
        required:true
    },
    endDate:{
        type:Date,
        required:true
    },
    AllowedList:{
        type:Array
    },
    responses:{
        type:Array
    },
    adminName:{
        type:String,
        required:true
    }
})
const quizModel=mongoose.model("quiz",quiz)
module.exports=quizModel;