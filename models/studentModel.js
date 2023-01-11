const mongoose=require('mongoose');

const student=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    mail:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const studentModel=mongoose.model("student",student);
module.exports=studentModel;