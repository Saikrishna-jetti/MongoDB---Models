const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dummy2', {useUnifiedTopology: true, useNewUrlParser: true})
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));
