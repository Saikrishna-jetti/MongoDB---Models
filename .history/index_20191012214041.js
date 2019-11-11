const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test',{useNewUrlParser: true,useUnifiedTopology: true})
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));


const courseSchema = new mongoose.Schema({
    name : String,
    author : String,
    tags : [ String ],
    date : {
            type:Date,
            default: Date.now
    },
    isPublished : Boolean,
    price : Number
})

const Course = mongoose.model('Course', courseSchema);

async function createCourse(){
    const course = new Course({

        author: 'Mosh2',
        tags: ['angular','frontend','nodejs'],
        isPublished : true,
        price:15
    });

    const result = await course.save();
    console.log(result);
}   

createCourse();
