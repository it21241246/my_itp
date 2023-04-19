const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacherSchema = new Schema ({

    name : {
        type : String,
        required :true
    },

    nic : {
        type : Number,
        required : true
    },

    address : {
        type : String,
        required : true
    },
    
    age : {
        type : Number,
        required :true
    },

    gender : {
        type : String,
        required : true
    },

    land : {
        type :Number,
        requred : true
    },

    mobile : {
        type : Number,
        required : true
    },

    email :{
        type : String,
        required : true
    },

    workPlace : {
        type : String,
        required : true
    }

    // image:{
    //     type : String,
    //     required :false
    // }
})

const Teacher =  mongoose.model("teacher",teacherSchema);
module.exports = Teacher;