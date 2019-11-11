const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dummy', {useUnifiedTopology: true, useNewUrlParser: true})
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const regionSchema = new mongoose.Schema({
    regionName :  String,
    regionDescription : String
});

const Region = mongoose.model('Region', regionSchema);

const countrySchema = new mongoose.Schema({
    countryName : String,
    regionId : regionSchema,
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


createCountry('Poland',new Region({regionName:'',regionDescription:''}),'Polish',' Polish złoty');

