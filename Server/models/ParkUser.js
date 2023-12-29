const mongoose = require('mongoose');

const parkUserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  pkno: {
    type: String,
    required: true,
  },
});


const ParkUsersCollection = mongoose.model('ParkUser', parkUserSchema);

module.exports = ParkUsersCollection;
