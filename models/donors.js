const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  blood: {
    type: String,
    required: true,
  }
});

mongoose.model('Donor', donorSchema);