const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB Connected'))
    .catch((err) => console.error('DB Not Connect', err));

const companySchema = new mongoose.Schema({
    companyName :  String,
    ownerName : String
});

const Company = mongoose.model('Company', companySchema);

const brandSchema = new mongoose.Schema({
    brandName : String
});

const Brand = mongoose.model('Brand', brandSchema);

//create company 

async function createCompany(){

    const company = new Company({
        companyName,
        ownerName
    });
   
    const result = await company.save();
    console.log(result);
}

async function createBrand(){

    const brand = new Brand({
        brandName
    })

    const result = await brand.save();
    console.log(result);
}


createCompany('IHCL', 'RAVI BINDHA');
