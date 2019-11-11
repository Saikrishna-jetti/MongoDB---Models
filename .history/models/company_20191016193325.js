const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    companyName :  String,
    ownerName : String
});

const Company = mongoose.model('Company', companySchema);


//create company 

async function createCompany(companyName, ownerName){

    const company = new Company({
        companyName,
        ownerName
    });
   
    const result = await company.save();
    console.log(result);
}

exports.Company = Company;
exports.createCompany = createCompany;
