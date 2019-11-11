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

const Country = mongoose.model('Country',countrySchema);

//create country
async function createCountry(countryName,regionId,language,currency){

    const country = new Country({
        countryName,
        regionId,
        language,
        currency
    })

    const result = await country.save();
    console.log(result);
}

exports.createCountry = createCountry;