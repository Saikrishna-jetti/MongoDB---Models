const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dummy', {useUnifiedTopology: true, useNewUrlParser: true})
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

// region schema
const regionSchema = new mongoose.Schema({
    regionName :  String,
    regionDescription : String
});

const Region = mongoose.model('Region', regionSchema);

// country schema
const countrySchema = new mongoose.Schema({
    countryName : String,
    regionId : regionSchema,
    language : String,
    currency : String
});

const Country = mongoose.model('Country',countrySchema);


// country schema
const stateSchema = new mongoose.Schema({
    countryId : countrySchema,
    stateName : String,
});

const State = mongoose.model('State',stateSchema);

// city Schema

const citySchema = new mongoose.Schema({
    cityName : String,
    cityDescription : String,
    stateId : stateSchema
});


const City = mongoose.model('City', citySchema);

//create states
// async function createState(countryId,stateName){

//     const state = new State({
//         countryId,
//         stateName
//     })

//     const result = await state.save();
//     console.log(result);
// }

async function createCity(cityName,cityDescription,stateId){

    const city = new city({
        cityName,
        cityDescription,
        stateId
    })

    const result = await city.save();
    console.log(result);
}

createCity('Nay city','it contain 3 hotels',{ countryId:
{countryName:'Polend',regionId:{regionName:'Europe',regionDescription:'Eastern Europe'},language:'english',currency:'english'}
,stateName:'Andra'});