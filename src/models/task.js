const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Task = mongoose.model("Task", {
    description:{
        type: String,
        required: true,
        trim: true
    },
    completed:{
        type: Boolean,
        default: false
    }
})

module.exports = Task;