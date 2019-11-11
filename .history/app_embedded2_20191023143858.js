const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dummy2', {useUnifiedTopology: true, useNewUrlParser: true})
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));


  
// city Schema

const citySchema = new mongoose.Schema({
    cityName : String,
    cityDescription : String
});


const City = mongoose.model('City', citySchema);

//create state schema

const stateSchema = new mongoose.Schema({
    stateName : String,
    cityId: citySchema
});

const State = mongoose.model('State',stateSchema);

// country schema
const countrySchema = new mongoose.Schema({
    countryName : String,
    language : String,
    currency : String,
    stateId : stateSchema
});

const Country = mongoose.model('Country',countrySchema);


async function createCountry(countryName,language,currency,stateId){

    const country = new Country({
        countryName,
        language,
        currency,
        stateId
    })

    const result = await country.save();
    console.log(result);
}

createCountry('India','Hindi','Rupes',{stateId : { stateName :'Andra', cityId :{ cityName: 'Tirupathi', cityDescription:'test purpose'} }});

