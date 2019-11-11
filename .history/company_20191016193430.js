const mongoose = require('mongoose');
const { createCompany } = require('./models/company');
mongoose.connect('mongodb://localhost/playground', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB Connected'))
    .catch((err) => console.error('DB Not Connect', err));


const brandSchema = new mongoose.Schema({
    brandName : String,
    company : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Company'
    }
});

const Brand = mongoose.model('Brand', brandSchema);

//create brand
async function createBrand(brandName, company){

    const brand = new Brand({
        brandName,
        company
    })

    const result = await brand.save();
    console.log(result);
}


createCompany('IHCL', 'RAVI BINDHA');

// createBrand('Tata','5da721a82abcce69243f199a');
