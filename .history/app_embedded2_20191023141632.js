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


async function createCity(cityName,cityDescription){

    const city = new City({
        cityName,
        cityDescription,
    })

    const result = await city.save();
    console.log(result);
}

