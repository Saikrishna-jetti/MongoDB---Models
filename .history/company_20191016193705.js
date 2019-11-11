const mongoose = require('mongoose');
const { createCompany } = require('./models/company');
const { createBrand } = require('./models/brand')
mongoose.connect('mongodb://localhost/playground', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB Connected'))
    .catch((err) => console.error('DB Not Connect', err));


//createCompany('TATA', 'DATA BINDHA');

createBrand('JAVA','5da72387f1e07854780ad5af');
