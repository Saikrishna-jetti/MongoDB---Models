const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test',{useNewUrlParser: true,useUnifiedTopology: true})
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));


const courseSchema = new mongoose.Schema({
    name : { type : String, required: true},
    author : String,
    tags : [ String ],
    date : {
            type:Date,
            default: Date.now
    },
    isPublished : Boolean,
    price : {
        type : Number,
        required: function() { return this.isPublished }
    }
})

const Course = mongoose.model('Course', courseSchema);

async function createCourse(){
    const course = new Course({

        //name: 'Angular Course',
        author: 'Mosh',
        tags: ['angular','frontend','nodejs'],
        isPublished : true,
        // price:15
    });

    try{
    const result = await course.save();
    console.log(result);
    }
    catch(ex){
        console.log(ex.message);
    }
}   

createCourse();
