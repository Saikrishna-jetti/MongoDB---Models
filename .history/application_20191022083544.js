// reference model

const mongoose = require('mongoose');

const { createRegion } = require('./models/region');

mongoose.connect('mongodb://localhost/dummy', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB Connected'))
    .catch((err) => console.error('DB Not Connect', err));


createRegion('Oceania','Australia and New Zealand,Melanesia,Micronesia,Polynesia');

