const mongoose = require('mongoose');

const brandsSchema = new mongoose.Schema({
    name: String,
    make: String,
    model: String,
    variant: String,
    NumberPlate: String, 
    parking: String,
});

const brandsCollection = mongoose.model('brands', brandsSchema);

module.exports = brandsCollection;
