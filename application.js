// reference model

const mongoose = require('mongoose');

const { createRegion } = require('./models/region');
const { createCountry } = require('./models/country');

mongoose.connect('mongodb://localhost/dummy', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB Connected'))
    .catch((err) => console.error('DB Not Connect', err));


// createRegion('Asia','Eastern Asia,South-central Asia,South-easern Asia,Western Asia');
createCountry('Zambia','5dae7140d4ba3755ac2d8266','English',' Zambian kwacha');

