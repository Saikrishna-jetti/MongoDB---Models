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


// country states
const stateSchema = new mongoose.Schema({
    countryId : countrySchema,
    stateName : String,
});

const State = mongoose.model('State',stateSchema);

//create states
async function createState(countryId,stateName){

    const state = new State({
        countryId,
        stateName
    })

    const result = await state.save();
    console.log(result);
}


createState('Poland',new Region({regionName:'Europe',regionDescription:'Eastern Europe'}),'Polish',' Polish złoty');

