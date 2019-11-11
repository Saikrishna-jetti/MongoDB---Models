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

// region schema

const regionSchema = new mongoose.Schema({
    regionName :  String,
    regionDescription : String,
    countryId : countrySchema
});

const Region = mongoose.model('Region', regionSchema);


async function createRegion(regionName,regionDescription,countryId){

    const region = new Region({
        regionName,
        regionDescription,
        countryId
    })

    const result = await region.save();
    console.log(result);
}

createRegion('Asia','Sample Description', { countryName : 'India', language : 'Hindi', currency : 'Rupes',
stateId :{ stateName :'Andra', cityId :{ cityName: 'Tirupathi', cityDescription:'test purpose'}}});


async function updateRegion(cityId){
 const  region = await Region.update({_id:courseId},{
   $set:{
     'countryId.countryName':'Andra'
   }
 });

region.countryId.countryName = 'USA';
region.save();
}

