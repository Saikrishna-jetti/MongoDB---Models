const mongoose = require('mongoose');


const countrySchema = new mongoose.Schema({
    countryName : String,
    regionId : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Region'
    },
    language : String,
    currency : String
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