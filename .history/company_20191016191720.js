const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB Connected'))
    .catch((err) => console.error('DB Not Connect', err));

const createCompany = new mongoose.Schema({
    companyName :  String,
    ownerName : String
});

const Company = mongoose.model('Company', createCompany);

const createBrand = new mongoose.Schema({
    brandName : String
});

const Brand = mongoose.model('Brand', createBrand);



