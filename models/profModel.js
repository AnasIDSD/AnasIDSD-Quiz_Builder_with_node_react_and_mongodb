const mongoose=require('mongoose');

const Prof=new mongoose.Schema({
    name:{
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

const ProfModel=mongoose.model("prof",Prof);
module.exports=ProfModel;