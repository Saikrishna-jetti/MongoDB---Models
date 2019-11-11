const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    companyName :  String,
    ownerName : String
});

const Company = mongoose.model('Company', companySchema);

exports.Company = Company;
