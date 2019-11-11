const mongoose = require('mongoose');

const regionSchema = new mongoose.Schema({
    regionName :  String,
    regionDescription : String
});

const Region = mongoose.model('Region', regionSchema);


//create company 

async function createRegion(regionName, regionDescription){

    const region = new Region({
        regionName,
        regionDescription
    });
   
    const result = await region.save();
    console.log(result);
}

exports.Region = Region;
exports.createRegion = createRegion;
