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


async function createState(stateName,cityId){

    const state = new State({
        stateName,
        cityId
    })

    const result = await state.save();
    console.log(result);
}

createState('Andra',{ cityName: 'Tirupathi', cityDescription:'test purpose'});