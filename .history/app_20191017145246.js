// reference model

const mongoose = require('mongoose');
const { createCompany } = require('./models/company');
const { createBrand } = require('./models/brand')

mongoose.connect('mongodb://localhost/playground3', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB Connected'))
    .catch((err) => console.error('DB Not Connect', err));



createBrand('Spring Boot','5da831cc1f807433949c5ee3');
