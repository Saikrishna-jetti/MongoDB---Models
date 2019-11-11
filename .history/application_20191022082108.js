// reference model

const mongoose = require('mongoose');
const { createCompany } = require('./models/company');
const { createBrand } = require('./models/brand')

mongoose.connect('mongodb://localhost/dummy', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB Connected'))
    .catch((err) => console.error('DB Not Connect', err));


