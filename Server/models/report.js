const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    type: String, 
    action: String, 
    timestamp: { type: Date, default: Date.now },
    recordingDate: { type: Date }, 
    brand: String, 
    NumberPlate: String, 
});

const Report = mongoose.model('reports', reportSchema);

module.exports = Report;
