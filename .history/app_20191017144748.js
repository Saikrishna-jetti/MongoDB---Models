// reference model

const mongoose = require('mongoose');
const { createCompany } = require('./models/company');
const { createBrand } = require('./models/brand')

mongoose.connect('mongodb://localhost/playground3', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB Connected'))
    .catch((err) => console.error('DB Not Connect', err));


createCompany('JAVA', 'James glosing');

// createBrand('TVTV','5da72387f1e07854780ad5af');
