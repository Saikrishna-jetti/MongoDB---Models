const mongoose = require('mongoose');


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

exports.createBrand = createBrand;