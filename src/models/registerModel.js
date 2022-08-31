const { Schema } = require("mongoose");
const { mongoose } = require("../config/dataBase");


let userDeatail = new Schema({
    firstName:String,
    lastName:String,
    email:{
        type:String,
        required:true,
        description:'feelt the email block'
    },
    password_hash:{
        type:String,
        required:true,
        description:'feelt the password block'
    }

})

const User = mongoose.model('User', userDeatail);

module.exports = {User}