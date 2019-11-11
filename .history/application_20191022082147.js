// reference model

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dummy', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB Connected'))
    .catch((err) => console.error('DB Not Connect', err));


