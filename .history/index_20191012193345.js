const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name : String,
    author : String,
    tags : [ String ],
    date : {
            type:date,
            default: Date.now
    },
    isPublished : Boolean,
    price : Number
})

const Course = mongoose.model('Course', courseSchema);

