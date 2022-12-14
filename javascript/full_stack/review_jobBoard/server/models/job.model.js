const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true, "{PATH} is required"],
        minlength : [3, "{PATH} must be at least {MINLENGTH} characters long"] 
    },
    company : {
        type : String,
        required : [true, "{PATH} is required"],
        minlength : [3, "{PATH} must be at least {MINLENGTH} characters long"]
    },
    salary : {
        type : Number, //covers integer and double as well
        required : [true, "{PATH} is required"],
        min : [70000, "{PATH} cannot be less than"],
    },
    isRemote: {
        type: Boolean
    }
}, {timestamps: true});


module.exports.Job = mongoose.model('Job', JobSchema);