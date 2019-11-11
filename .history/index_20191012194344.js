const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));


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

async function createCourse(){
    const course = new Course({

        name: 'Angular Course',
        author: 'Mosh',
        tags: ['angular','frontend','nodejs'],
        isPublished : true,
        price:15
    });

    const result = await course.save();
    console.log(result);
}


