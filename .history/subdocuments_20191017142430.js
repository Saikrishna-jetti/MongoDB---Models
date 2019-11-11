const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground_sub', {useUnifiedTopology: true, useNewUrlParser: true})
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  authors : [authorSchema]
}));

async function createCourse(name, authors) {
  const course = new Course({
    name, 
    authors
 }); 
  
  const result = await course.save();
  console.log(result);
}


async function listCourses() { 
  const courses = await Course.find();
  console.log(courses);
}


// we can also add new author in exist one i.e.,

// createCourse('Node Course', [
//     new Author({ name: 'sai' }),
//     new Author({ name: 'krishna' }),
// ]);



// async function addAuthor(courseId,author){
//     const course = await Course.findById(courseId);
//     course.authors.push(author);
//     course.save();
// }

// remove sub document
async function removeAuthor(courseId,authorId){
    const course = await Course.findById(courseId);
    const author = course.authors.id(authorId);
    console.log(author);
}

removeAuthor('5da806a75557424ed08e5693','5da80905a903452dece45cbb');